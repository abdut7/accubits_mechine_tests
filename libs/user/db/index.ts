import {
    createUserDbFactory,
    getListUserDBFactory,
    getUserDetailsDbFactory
} from './userDB'
let createUserDb = createUserDbFactory()
let getUserDetailsDb = getUserDetailsDbFactory()
let getListUserDB = getListUserDBFactory()
export {
    createUserDb,
    getUserDetailsDb,
    getListUserDB
}