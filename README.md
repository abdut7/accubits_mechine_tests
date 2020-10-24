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
[https://documenter.getpostman.com/view/3805752/TVRn26oW]
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
     
 
