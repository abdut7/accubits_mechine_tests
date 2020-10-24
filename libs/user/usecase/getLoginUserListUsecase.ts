import errHandler from '../../core/helpers/errHandler'
export default function getLoginUserListUsecaseFactory({
    getRedisData,
    getKeys
}) {
    return async function getLoginUserListUsecase({
        source,
        body: objUserBodyData
    }) {
        try {
            //Get Keys lists from Redis\
            let arrList = []
            let arrLoginKeys = await getKeys("*")
            let arrKeySplit = []
            arrLoginKeys.forEach(strKey => {
                arrKeySplit = strKey.split("=>")
                if(arrKeySplit && arrKeySplit.length && arrKeySplit[0]=="login"){
                    arrList.push({
                        strName:arrKeySplit[2],
                        strEmail:arrKeySplit[3],
                        strLoginTime:arrKeySplit[4]
                    })
                }
            });
            return {
                arrList
            }
        } catch (error) {
            throw new errHandler(error)
        }
    }
}