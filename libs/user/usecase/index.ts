import {
    createUserDb,
    getUserDetailsDb,
} from '../db'
import {
    userEntity
} from '../entity'
import {
    compareHashAndText,
    jwtSignIn,
    encryptString,
} from '../../core/helpers'
import {
    setRedisData,
    getRedisData,
    getKeys
} from '../../common/redis'
import {
    deleteDB,
    getListDB,
    inserOneDB
} from '../../common/queryFunctions'
import createUserUsecaseFactory from './createUserUsecase'
import getUserUsecaseFactory from './getUserUsecase'
import logInUserUseCaseFactory from './logInUserUseCase'
import deleteUserUsecaseFactory from './deleteUserUsecase'
import getLoginUserListUsecaseFactory from './getLoginUserListUsecase'
let createUserUsecase = createUserUsecaseFactory({
    createUserDb,
    userEntity
})
let getUserUsecase = getUserUsecaseFactory({
    getListDB
})
let logInUserUseCase = logInUserUseCaseFactory({
    getUserDetailsDb,
    setRedisData,
    compareHashAndText,
    jwtSignIn,
    encryptString,
})
let deleteUserUsecase = deleteUserUsecaseFactory({
    deleteDB
})
let getLoginUserListUsecase = getLoginUserListUsecaseFactory({
    getRedisData,
    getKeys
})
export {
    createUserUsecase,
    logInUserUseCase,
    getUserUsecase,
    getLoginUserListUsecase,
    deleteUserUsecase
}