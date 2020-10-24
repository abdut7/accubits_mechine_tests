import errHandler from '../../core/helpers/errHandler'
import {
    CLN_USER
} from '../../common/constants'
export default function getUserUsecaseFactory({
    getListDB
}) {
    return async function getUserUsecase({
        source,
        body: objUserBodyData
    }) {
        try {
            //Get user lists from DB
            let arrList = await getListDB({
                strCollection: CLN_USER,
                arrQuery: [{
                    $match: {
                        "chrStatus": "N"
                    }
                }]
            })
            return {
                arrList
            }
        } catch (error) {
            throw new errHandler(error)
        }
    }
}