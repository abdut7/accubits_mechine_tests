#  About
* The project following clean-onion architecture model
* The project developed microservice model (In this we have two sevices)
#### Execution of Production build
* Make webpack Build file of two services
   * ``npm run build-common``
   * ``npm run build-open``
* Run build file exists in /build Directry
   * ``node common.js``
   * ``node open.js``
## API DOCUMENTAION
   POSTMAN:[https://documenter.getpostman.com/view/3805752/TVYF7JH3]

 ###### Registering User
   * URL: http://localhost:4000/user/create_user
   * Methode :POST
   * Request body
       `` {
          "strName":"Abdu",
          "strEmail":"abdu@accubits.com",
          "strPassword":"123456"
         }
       ``
   * Response body
     `` {
            "strMessage": "Success",
            "blnAPIStatus": true
        } ``
   * Error response
    `` {
         "arrErrors": ["USER EMAIL ALREADY EXIST", "USER NAME ALREADY EXIST],
         "blnAPIStatus": false
       }  ``
 ###### Login API
   * URL: http://localhost:4000/user/login_user
   * Methode :POST
   * Request body
       `` { 
           "strEmail": "admin@accubits.com",
           "strPassword":"admin123"
          }
       ``
   * Response body
          `` {
               "strEncryptToken":             "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJVc2VySWQiOiI1ZjkzYmYzYjFhNkxMjIyZmFhOTM            4OTUiLCJzdHJOYW1lIjoiYWRtaW4iLCJpYXQiOjE2MDM1MTk0OTMsImF1ZCI6IkFDQ1VCSVTIiwiaXNzIjoi             QUJEVSIsInN1YiI6IjEyMyJ9.            HNM9PBYV48IQbc6PE5y-kzCucdG2KmakgIsp4_XVlqjQzY0RfD3Hlv54eVA401xloMDZEl8pLYVH12HtIThB             A",
               "_id": "5f93bf3b1a591222faa93895",
               "strName": "admin",
               "strEmail": "admin@accubits.com",
               "chrStatus": "N",
               "blnAPIStatus": true
           } ``
   * Error response
    `` {
           "arrErrors": [ "CREDENTIAL_INVALID"],
           "blnAPIStatus": false
       } ``
 ###### Get user details
   * URL: http://localhost:4000/user/login_user
   * Methode :GET
   * Response body
     ``
                        {
                           "arrList": [
                               {
                                   "_id": "5f93bf3b1a591222faa93895",
                                   "strName": "admin",
                                   "strEmail": "admin@accubits.com",
                                   "strHashPassword": "$2a$10$WGM1CovEyqtMTnzTxK0OW.lRVCgPalwR.N00//                       LmqBkchYquKGXvu",
                                   "chrStatus": "N"
                               },
                               {
                                   "_id": "5f93c4d79eadd40b0237fad4",
                                   "strName": "Abdu",
                                   "strEmail": "abdu@accubits.com",
                                   "strHashPassword":                        "$2a$10$4uAP1WeRnTDoMAx0FxTKZOWfeZn20c458U6aiHldghpFEx5QRcf2S",
                                   "chrStatus": "N",
                                   "strCreatedTime": "2020-10-24T06:08:23.000Z",
                                   "strCreatedUser": "5f93bf3b1a591222faa93895"
                               }
                           ],
                           "blnAPIStatus": true,
                           "strToken":                        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJVc2VySWQiOiI1ZjkzYmYzYjFhNTkxMjIyZmFhOTM                       4OTUiLCJzdHJOYW1lIjoiYWRtaW4iLCJpYXQiOjE2MDM1MjIxODAsImF1ZCI6IkFDQ1VCSVRTIiwiaXNzIjoi                       QUJEVSIsInN1YiI6IjEyMyJ9.                       eCiPhPngr1sXQZLOKkiwfS0FRe-b8rAWYstMvTET1IvVYRzrdtmmTVm8iK42-MhAUlBznn63nbgQ2tOj7i3H0                       w"
                       }
     ``
 ###### Get Login User List
   * URL: http://localhost:4001/user/get_login_user
   * Methode :GET
   * Response body
     ``
                        {
                            "arrList": [
                                {
                                    "strName": "admin",
                                    "strEmail": "admin@accubits.com",
                                    "strLoginTime": "Sat Oct 24 2020 13:10:42 GMT+0530 (India Standard Time)"
                                }
                            ],
                            "blnAPIStatus": true,
                            "strToken":                             "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJVc2VySWQiOiI1ZjkzYmYzYjFhNTkxMjIyZmFhOTM                            4OTUiLCJzdHJOYW1lIjoiYWRtaW4iLCJpYXQiOjE2MDM1MjIxODAsImF1ZCI6IkFDQ1VCSVRTIiwiaXNzIjoi                            QUJEVSIsInN1YiI6IjEyMyJ9.                            eCiPhPngr1sXQZLOKkiwfS0FRe-b8rAWYstMvTET1IvVYRzrdtmmTVm8iK42-MhAUlBznn63nbgQ2tOj7i3H0                            w"
                        }
     ``
## Environment Dependancy
 * Node
 * Redis
 * MongoDB (In This project ,using MongoDB from remote server from Atlas service )
##### Available APIs in above documentation
* login_user
  * This API for login for user
* get_user
  * This API for get List of all users exists
* create_user
  * This API for create a new user 

  ## Testing Documentation
   * Login with 
      ``{ 
          "strEmail": "admin@accubits.com",
          "strPassword":"admin123"
       }``
   * Then get Token,Assign that to all other Header Autherisation
   * Create a new user using ``create_user`` 
     
 
