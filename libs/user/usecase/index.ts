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
    getListDB
} from '../../common/queryFunctions'
import createUserUsecaseFactory from './createUserUsecase'
import getUserUsecaseFactory from './getUserUsecase'
import logInUserUseCaseFactory from './logInUserUseCase'
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
let getLoginUserListUsecase = getLoginUserListUsecaseFactory({
    getRedisData,
    getKeys
})
export {
    createUserUsecase,
    logInUserUseCase,
    getUserUsecase,
    getLoginUserListUsecase
}