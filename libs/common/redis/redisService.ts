import redis from "redis";
import errHandler from '../../core/helpers/errHandler'
export async function initializeRedisConn() {
    try {
        // let config = await getRedisConfigById();
        let config = {
            port: 6379, // replace with your port
            host: '120.0.0.1'
        }
        let objRedisClient = await redis.createClient();
        return objRedisClient;
    } catch (error) {
        throw new errHandler(error);
    }
}

export async function setRedisData(strKey, strValue) {
    let objRedisClient = await initializeRedisConn();
    try {
        await objRedisClient.on("error", function (error) {
            console.error(error);
        });
        return objRedisClient.set(strKey, strValue, redis.print);
    } catch (error) {
        throw new errHandler(error)
    } finally {
        await objRedisClient.quit();
    }
}

export async function getRedisData(strKey) {
    let objRedisClient = await initializeRedisConn();
    return new Promise(function (resolve, reject) {
        try {
            objRedisClient.get(strKey, function (error, result) {
                if (result) {
                    resolve(result);
                } else
                    resolve(null);
            });
        } catch (error) {
            reject(new errHandler(error));
        } finally {
            objRedisClient.quit();
        }
    });
}

export async function getKeys(strKey) {
    let objRedisClient = await initializeRedisConn();
    return new Promise(function (resolve, reject) {
        try {
            objRedisClient.keys(strKey, function (error, result) {
                console.log("result");
                console.log(result);
                
                if (result) {
                    resolve(result);
                } else
                    resolve(null);
            });
        } catch (error) {
            reject(new errHandler(error));
        } finally {
            objRedisClient.quit();
        }
    });
}