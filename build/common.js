!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends Error{constructor(e,t="errCommon"){if(super(),this.isError=!1,Error.captureStackTrace(this,this.constructor),"errServer"==t&&(t="errCommon",console.log(`\n${new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"})).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),void 0!==e.isError&&(this.isError=e.isError),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;this[t]=[],e instanceof Error?(console.log(`\n${new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"})).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else e&&(this[t]=[],this[t].push({strMessage:e}),this.isError=!0)}add(e,t="errCommon"){if("errServer"==t&&(t="errCommon",console.log(`\n${new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"})).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;void 0===this[t]&&(this[t]=[]),e instanceof Error?(console.log(`\n${new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"})).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else void 0===this[t]&&(this[t]=[]),this[t].push({strMessage:e}),this.isError=!0}setStatus(e){return this.HTTP_R_S_Code=e,this}send({statusCode:e=400}={}){let t=[];return this.errCommon.length&&this.errCommon.forEach(e=>{t.push(e.strMessage)}),this.HTTP_R_S_Code&&(e=this.HTTP_R_S_Code),{body:{arrErrors:t},statusCode:e}}}t.default=n},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(12)),n(r(13)),n(r(16)),n(r(19))},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(14)),n(r(15))},function(e,t){e.exports=require("mongodb")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(29);t.setRedisData=n.setRedisData,t.getRedisData=n.getRedisData,t.getKeys=n.getKeys},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(4)),s=n(r(7)),a=n(r(8)),i=r(9),u=n(r(0)),c=n(r(10)),l=r(1),d=r(38),f=o.default();try{f.use(a.default()),f.use(s.default.json()),l.createMongoDbConnection(),f.use(d.jwtVerifier),f.use("/",c.default),f.listen(i.intPort,(function(){console.log("App is listening on port "+i.intPort)}))}catch(e){console.log(new u.default(e).send().body)}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("cors")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.intPort=4001},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=n(r(4)).default.Router();o.use("/user",r(11)),t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(4)),s=r(1),a=r(22);let i=o.default.Router();i.post("/delete_user",s.makeController(a.deleteUserController)),i.get("/get_user",s.makeController(a.getListUserController)),i.get("/get_login_user",s.makeController(a.getLoginUserListController)),e.exports=i},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.makeController=function(e){return async(t,r)=>{try{const n=await({body:t.body,query:t.query,params:t.params,ip:t.ip,strToken:t.strToken,strUserId:t.strUserId,strUserRole:t.strUserRole,method:t.method,timReceived:new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),path:t.originalUrl,strAudience:(t.get("str-audience")||"").toUpperCase(),headers:{"Content-Type":t.get("Content-Type"),Referer:t.get("referer"),"User-Agent":t.get("User-Agent")}});console.log("ObjRequst Body\n :",new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}))),console.log(t.body),await e(n).then(({headers:e={"Content-Type":"application/json","Last-Modified":new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}))},type:t="json",statusCode:o=200,body:s})=>{if(!s)throw new Error("EMPTY_RESPONSE");r.set(e),r.type(t),400==o?r.status(o).send({...s,blnAPIStatus:!1}):r.status(o).send({...s,blnAPIStatus:!0,strToken:n.strToken})}).catch(async e=>{let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}))}).send({...t.body,blnAPIStatus:!1})})}catch(e){let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}))}).send({...t.body,blnAPIStatus:!1})}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(3),s=n(r(0)),a=r(2);let i;async function u(){try{i=await o.MongoClient.connect("mongodb+srv://abdut7:Rahman1**@cluster0.yoytl.mongodb.net/?retryWrites=true&w=majority&replicaSet=cluster0-shard-00-00.yoytl.mongodb.net:27017",{useUnifiedTopology:!0}),console.log("MongoClient Connection Created")}catch(e){throw new s.default(e)}}t.createMongoDbConnection=u,t.getMongoDbConnection=async function(){try{return i||await u(),i.db(a.STR_COMMON_DB)}catch(e){throw new s.default(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLN_USER="cln_user"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STR_COMMON_DB_TENANT_ID="ACCUBITS",t.STR_COMMON_DB="ACCUBITS"},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(17)),s=n(r(18)),a=n(r(0));t.hashString=function(e){return new Promise((function(t,r){try{e.length>0?o.default.genSalt(10,(function(r,n){o.default.hash(e,n,(function(e,r){t(r)}))})):r("NULL_INPUT_RECVD")}catch(e){throw new a.default(e)}}))},t.compareHashAndText=function(e,t){return new Promise((async function(r,n){try{if(e&&t){r(await o.default.compareSync(e,t))}else n("NULL_INPUT_RECVD")}catch(e){throw new a.default(e)}}))},t.encryptString=async function(e){return e?(await s.default.AES.encrypt(e,"ABDU")).toString():e},t.decryptString=async function(e){return e?(await s.default.AES.decrypt(e,"ABDU")).toString(s.default.enc.Utf8):e}},function(e,t){e.exports=require("bcryptjs")},function(e,t){e.exports=require("crypto-js")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(20)),s=n(r(0)),a=n(r(21));t.jwtSignIn=async function(e,t){try{let r=await a.default.readFileSync("./config/private.key","utf-8"),n=await({issuer:t.issuer,subject:t.subject,audience:t.audience,algorithm:"RS256"});return await o.default.sign(e,r,n)}catch(e){throw new s.default(e)}},t.jwtVerify=async function(e,t){try{let r=await a.default.readFileSync("./config/public.key","utf-8"),n={issuer:t.issuer,subject:t.subject,audience:t.audience,algorithm:"RS256",expiresIn:"300d"};return o.default.verify(e,r,n)}catch(e){if("JsonWebTokenError"==e.name)throw new s.default("INVALID_TOKEN");throw new s.default(e)}},t.jwtDecode=async function(e){try{return o.default.decode(e,{complete:!0})}catch(e){throw new s.default(e)}}},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(23),o=r(24);let s=n.createUserControllerFactory({createUserUsecase:o.createUserUsecase});t.createUserController=s;let a=n.logInUserControllerFactory({logInUserUseCase:o.logInUserUseCase});t.logInUserController=a;let i=n.deleteUserControllerFactory({deleteUserUsecase:o.deleteUserUsecase});t.deleteUserController=i;let u=n.getListUserControllerFactory({getUserUsecase:o.getUserUsecase});t.getListUserController=u;let c=n.getLoginUserListControllerFactory({getLoginUserListUsecase:o.getLoginUserListUsecase});t.getLoginUserListController=c},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.createUserControllerFactory=function({createUserUsecase:e}){return async function({body:t,...r}){try{return{body:await e({source:r,body:t})}}catch(e){return new o.default(e).send()}}},t.getListUserControllerFactory=function({getUserUsecase:e}){return async function({body:t,...r}){try{return{body:await e({source:r,body:t})}}catch(e){return new o.default(e).send()}}},t.getLoginUserListControllerFactory=function({getLoginUserListUsecase:e}){return async function({body:t,...r}){try{return{body:await e({source:r,body:t})}}catch(e){return new o.default(e).send()}}},t.logInUserControllerFactory=function({logInUserUseCase:e}){return async function({body:t,...r}){try{return{body:await e({source:r,body:t})}}catch(e){return new o.default(e).send()}}},t.deleteUserControllerFactory=function({deleteUserUsecase:e}){return async function({body:t,...r}){try{return{body:await e({source:r,body:t})}}catch(e){return new o.default(e).send()}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(25),s=r(27),a=r(1),i=r(5),u=r(31),c=n(r(33)),l=n(r(34)),d=n(r(35)),f=n(r(36)),y=n(r(37));let _=c.default({createUserDb:o.createUserDb,userEntity:s.userEntity});t.createUserUsecase=_;let g=l.default({getListDB:u.getListDB});t.getUserUsecase=g;let h=d.default({getUserDetailsDb:o.getUserDetailsDb,setRedisData:i.setRedisData,compareHashAndText:a.compareHashAndText,jwtSignIn:a.jwtSignIn,encryptString:a.encryptString});t.logInUserUseCase=h;let w=f.default({deleteDB:u.deleteDB});t.deleteUserUsecase=w;let p=y.default({getRedisData:i.getRedisData,getKeys:i.getKeys});t.getLoginUserListUsecase=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(26);let o=n.createUserDbFactory();t.createUserDb=o;let s=n.getUserDetailsDbFactory();t.getUserDetailsDb=s;let a=n.getListUserDBFactory();t.getListUserDB=a},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),s=n(r(0)),a=r(2),i=r(3);t.createUserDbFactory=function(){return async function({objUser:e}){let t=await o.getMongoDbConnection();try{return await t.collection(a.CLN_USER).insertOne(e),{strMessage:"Success"}}catch(e){let t={strName:"USER NAME ALREADY EXIST",strEmail:"USER EMAIL ALREADY EXIST"},r=new s.default;if("MongoError"==e.name&&"11000"==e.code&&(e.keyValue.strName&&r.add(t.strName),e.keyValue.strEmail&&r.add(t.strEmail),r.isError))throw r;throw new s.default(e)}}},t.getListUserDBFactory=function(){return async function({strTenantId:e,arrQuery:t,strType:r}){let n=await o.getMongoDbConnection();try{let e=await n.collection(a.CLN_USER).aggregate(t).toArray();return e.length?(t.pop(),t.pop(),t.push({$count:"intTotalCount"}),{arrList:e,objCount:await n.collection(a.CLN_USER).aggregate(t).toArray()}):{arrList:e,objCount:[{intTotalCount:0}]}}catch(e){throw new s.default(e)}}},t.getUserDetailsDbFactory=function(){return async function({strName:e=null,strEmail:t=null,strUserPK:r=null}){let n=await o.getMongoDbConnection();try{let o={chrStatus:"N"};e?o.strName=e:t?o.strEmail=t:r&&(o._id=new i.ObjectID(r));let u={};if(u=await n.collection(a.CLN_USER).findOne(o),!u)throw new s.default("INVALID_USER");return u}catch(e){throw new s.default(e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(28).userEntityFactory();t.userEntity=n},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),s=r(1),a=r(3);t.userEntityFactory=function(){return async function({strName:e,strEmail:t,strPassword:r,strCreatedTime:n,strCreatedUser:i}){try{let u=new o.default;if(e||u.add("NAME_EMPTY"),r||u.add("PASSWORD_ERROR"),u.isError)throw u;if(u.isError)throw u;return{objUser:{strName:e,strEmail:t,strHashPassword:await s.hashString(r.trim()),chrStatus:"N",strCreatedTime:n||null,strCreatedUser:new a.ObjectID(i)||null}}}catch(e){throw new o.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(30)),s=n(r(0));async function a(){try{return await o.default.createClient()}catch(e){throw new s.default(e)}}t.initializeRedisConn=a,t.setRedisData=async function(e,t){let r=await a();try{return await r.on("error",(function(e){console.error(e)})),r.set(e,t,o.default.print)}catch(e){throw new s.default(e)}finally{await r.quit()}},t.getRedisData=async function(e){let t=await a();return new Promise((function(r,n){try{t.get(e,(function(e,t){r(t||null)}))}catch(e){n(new s.default(e))}finally{t.quit()}}))},t.getKeys=async function(e){let t=await a();return new Promise((function(r,n){try{t.keys(e,(function(e,t){console.log("result"),console.log(t),r(t||null)}))}catch(e){n(new s.default(e))}finally{t.quit()}}))}},function(e,t){e.exports=require("redis")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(32);let o=n.inserManyDBFactory();t.inserManyDB=o;let s=n.inserOneDBFactory();t.inserOneDB=s;let a=n.getListDBFactory();t.getListDB=a;let i=n.getOneDBFactory();t.getOneDB=i;let u=n.deleteDBFactory();t.deleteDB=u;let c=n.updateOneDBFactory();t.updateOneDB=c;let l=n.deleteManyDBFactory();t.deleteManyDB=l},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),s=n(r(0));t.getListDBFactory=function(){return async function({strCollection:e,arrQuery:t}){try{return(await o.getMongoDbConnection()).collection(e).aggregate(t).toArray()}catch(e){throw new s.default(e)}}},t.getOneDBFactory=function(){return async function({strCollection:e,objSet:t=null,objQuery:r}){try{let n=await o.getMongoDbConnection();if(t){return(await n.collection(e).findOneAndUpdate(r,{$set:t})).value}return n.collection(e).findOne(r)}catch(e){throw new s.default(e)}}},t.inserManyDBFactory=function(){return async function({strCollection:e,arrInsertDocuments:t}){try{return(await o.getMongoDbConnection()).collection(e).insertMany(t)}catch(e){throw new s.default(e)}}},t.inserOneDBFactory=function(){return async function({strCollection:e,objDocument:t}){try{return(await o.getMongoDbConnection()).collection(e).insertOne(t)}catch(e){throw new s.default(e)}}},t.updateOneDBFactory=function(){return async function({strCollection:e,objQuery:t,objDocument:r}){try{let n=await o.getMongoDbConnection();return await n.collection(e).updateOne(t,{$set:r}),{strMessage:"UPDATE_SUCCESS"}}catch(e){throw new s.default(e)}}},t.deleteManyDBFactory=function(){return async function({strCollection:e,objQuery:t}){try{let r=await o.getMongoDbConnection();return await r.collection(e).deleteMany(t),{strMessage:"UPDATE_SUCCESS"}}catch(e){throw new s.default(e)}}},t.deleteDBFactory=function(){return async function({strCollection:e,arrDeleteId:t,strModifiedTime:r,strModifiedUser:n}){let a=await o.getMongoDbConnection();try{if((await a.collection(e).find({_id:{$in:t}}).toArray()).length!=t.length)throw new s.default("ITEM_MISMACTH");return await a.collection(e).updateMany({_id:{$in:t}},{$set:{chrStatus:"D",strModifiedTime:r,strModifiedUser:n}}),{}}catch(e){throw new s.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.default=function({createUserDb:e,userEntity:t}){return async function({source:r,body:n}){try{let o=await t({...n,strCreatedTime:r.timReceived,strCreatedUser:r.strUserId});return e({objUser:o.objUser})}catch(e){throw new o.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),s=r(2);t.default=function({getListDB:e}){return async function({source:t,body:r}){try{return{arrList:await e({strCollection:s.CLN_USER,arrQuery:[{$match:{chrStatus:"N"}}]})}}catch(e){throw new o.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),s=r(2);t.default=function({getUserDetailsDb:e,setRedisData:t,compareHashAndText:r,jwtSignIn:n,encryptString:a}){return async function({source:a,body:i}){if((i.strName||i.strEmail)&&!i.strPassword)throw new o.default("CREDENTIAL_MISSING");let u=await e({strName:i.strName||null,strEmail:i.strEmail||null}),c="";if(!await r(i.strPassword,u.strHashPassword))throw new o.default("CREDENTIAL_INVALID");return c=await n({strUserId:u._id.toString(),strName:u.strName},{issuer:"ABDU",subject:"123",audience:s.STR_COMMON_DB_TENANT_ID}),await t(`login=>${c}=>${u.strName}=>${u.strEmail}=>${a.timReceived}`,a.timReceived),await delete u.strHashPassword,{strToken:c,strEncryptToken:c,...u}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(2),s=n(r(0)),a=r(3);t.default=function({deleteDB:e}){return async function({source:t,body:r}){try{let n=[];return r.arrDeleteId.forEach(e=>{n.push(new a.ObjectID(e))}),await e({arrDeleteId:n,strCollection:o.CLN_USER,strModifiedTime:t.timReceived,strModifiedUser:t.strUserId}),{strMessage:"DELETE_SUCCESS"}}catch(e){throw new s.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.default=function({getRedisData:e,getKeys:t}){return async function({source:e,body:r}){try{let e=[],r=await t("*"),n=[];return r.forEach(t=>{n=t.split("=>"),n&&n.length&&"login"==n[0]&&e.push({strName:n[2],strEmail:n[3],strLoginTime:n[4]})}),{arrList:e}}catch(e){throw new o.default(e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(39))},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),s=r(5),a=r(2),i=n(r(0));t.jwtVerifier=async function(e,t,r){let n={"Content-Type":"application/json","Last-Modified":new Date((new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}))};try{let u=await e.headers["x-access-token"]||e.headers.authorization;if(!u)return t.status(401).set(n).send(new i.default("AUTHORIZATION_TOKEN_HEADER_IS_MISSING").send().body);{let t=u;e.strToken=t;await s.getRedisData(t);let n={issuer:"ABDU",subject:"123",audience:a.STR_COMMON_DB_TENANT_ID},i=await o.jwtVerify(t,n);e.strUserId=i.strUserId,r()}}catch(e){return t.status(401).set(n).send(new i.default(e).send().body)}}}]);