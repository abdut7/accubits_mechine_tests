import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    getListUserController,
    getLoginUserListController
} from "../../../libs/user/app";
let router = express.Router();
router.get("/get_user", makeController(getListUserController))
router.get("/get_login_user", makeController(getLoginUserListController))
module.exports = router;