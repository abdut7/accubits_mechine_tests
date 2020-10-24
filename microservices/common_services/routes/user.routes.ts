import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    deleteUserController,
    getListUserController,
    getLoginUserListController
} from "../../../libs/user/app";
let router = express.Router();
router.post("/delete_user", makeController(deleteUserController))
router.get("/get_user", makeController(getListUserController))
router.get("/get_login_user", makeController(getLoginUserListController))
module.exports = router;