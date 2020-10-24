import {
    MongoClient
} from "mongodb";
import errHandler from './errHandler'
import {
    STR_COMMON_DB
} from '../../common/constants'
let objMongoConnection
export async function createMongoDbConnection() {
    try {
        /**Dev mode */
        // objMongoConnection = await MongoClient.connect("mongodb://localhost:27017,127.0.0.1:27018/?retryWrites=true&w=majority&replicaSet=rs1", {
        //     useUnifiedTopology: true
        // });
        /**Prod mode */
        objMongoConnection = await MongoClient.connect("mongodb+srv://abdut7:Rahman1**@cluster0.yoytl.mongodb.net/?retryWrites=true&w=majority&replicaSet=cluster0-shard-00-00.yoytl.mongodb.net:27017", {
            useUnifiedTopology: true
        });
        console.log("MongoClient Connection Created");
    } catch (error) {
        throw new errHandler(error)
    }
}
export async function getMongoDbConnection() {
    try {
        if (!objMongoConnection)
            await createMongoDbConnection()
        return objMongoConnection.db(STR_COMMON_DB);
    } catch (error) {
        throw new errHandler(error)
    }
}
