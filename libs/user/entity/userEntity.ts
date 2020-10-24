import errHandler from '../../core/helpers/errHandler'
import {
    getOneDB
} from '../../common/queryFunctions'
import {
    hashString
} from '../../core/helpers'
import {
    ObjectID
} from 'mongodb'

export function userEntityFactory() {
    return async function userEntity({
        strName,
        strEmail,
        strPassword,
        strCreatedTime,
        strCreatedUser
    }) {
        try {
            let objErrorHandler = new errHandler();
            if (!strName )
                objErrorHandler.add("NAME_EMPTY")
            if (!strPassword)
                objErrorHandler.add("PASSWORD_ERROR")
            if (objErrorHandler.isError) throw objErrorHandler;
            //validate user role exists
            else {
                if (objErrorHandler.isError) throw objErrorHandler;
                let strHashPassword = await hashString(strPassword.trim())
                return {
                    objUser: {
                        strName,
                        strEmail,
                        strHashPassword,
                        "chrStatus": "N",
                        strCreatedTime: strCreatedTime || null,
                        strCreatedUser: new ObjectID(strCreatedUser) || null,
                    }
                }
            }
        } catch (error) {
            throw new errHandler(error)
        }
    }
}

