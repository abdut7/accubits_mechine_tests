import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import {
  intPort
} from './config/port'
import errHandler from "../../libs/core/helpers/errHandler";
import routes from "./routes";
import {
  createMongoDbConnection
} from '../../libs/core/helpers'
import {
  jwtVerifier
} from '../../libs/core/middleware'
const objServiceApp: express.Application = express();
try {
  objServiceApp.use(cors());
  objServiceApp.use(bodyParser.json());
  //init Mongo connection
  createMongoDbConnection()
  //JWT verify middleware
  objServiceApp.use(jwtVerifier)
  //import all routes
  objServiceApp.use("/", routes);
  //Start server
  objServiceApp.listen(intPort, function () {
    console.log('App is listening on port ' + intPort);
  });
} catch (error) {
  console.log(new errHandler(error).send().body);
}