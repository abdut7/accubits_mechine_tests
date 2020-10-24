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
    getLoginUserListUsecase
} from '../usecase'
let createUserController = createUserControllerFactory({
    createUserUsecase
})
let logInUserController = logInUserControllerFactory({
    logInUserUseCase
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
    getLoginUserListController
}