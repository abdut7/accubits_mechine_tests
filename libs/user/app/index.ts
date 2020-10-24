import {
    createUserControllerFactory,
    logInUserControllerFactory,
    getListUserControllerFactory,
    getLoginUserListControllerFactory,
    deleteUserControllerFactory,
} from './userCotroller'
import {
    createUserUsecase,
    logInUserUseCase,
    getUserUsecase,
    getLoginUserListUsecase,
    deleteUserUsecase
} from '../usecase'
let createUserController = createUserControllerFactory({
    createUserUsecase
})
let logInUserController = logInUserControllerFactory({
    logInUserUseCase
})
let deleteUserController = deleteUserControllerFactory({
    deleteUserUsecase
})
let getListUserController = getListUserControllerFactory({
    getUserUsecase
})
let getLoginUserListController = getLoginUserListControllerFactory({
    getLoginUserListUsecase
})
export {
    createUserController,
    logInUserController,
    getListUserController,
    getLoginUserListController,
    deleteUserController
}