import errHandler from '../../core/helpers/errHandler'
import {
    STR_COMMON_DB_TENANT_ID
} from '../../common/constants'
export default function logInUserUseCaseFactory({
    getUserDetailsDb,
    setRedisData,
    compareHashAndText,
    jwtSignIn,
    encryptString,
}) {
    return async function logInUserUseCase({
        source,
        body: objUserBody
    }) {
        if ((objUserBody["strName"] || objUserBody["strEmail"]) && !objUserBody["strPassword"]) {
            throw new errHandler("CREDENTIAL_MISSING")
        }
        let objUser = await getUserDetailsDb({
            strName: objUserBody["strName"] || null,
            strEmail: objUserBody["strEmail"] || null
        })
        let strToken = ""
        //Compare Passwords
        if (await compareHashAndText(objUserBody["strPassword"], objUser["strHashPassword"])) {
            strToken = await jwtSignIn({
                "strUserId": objUser["_id"].toString(),
                "strName": objUser["strName"],
            }, {
                issuer: "ABDU",
                subject: "123",
                audience: STR_COMMON_DB_TENANT_ID
            })
            //strEncryptToken = await encryptString(strToken)
            //Set to Redis
            await setRedisData(`login=>${strToken}=>${objUser["strName"]}=>${objUser["strEmail"]}=>${source["timReceived"]}`, source["timReceived"])
            await delete objUser["strHashPassword"];
        } else {
            throw new errHandler("CREDENTIAL_INVALID")
        }
        return {
            "strToken": strToken,
            strEncryptToken: strToken,
            ...objUser
        }
    }
}