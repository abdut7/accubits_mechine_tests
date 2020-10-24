import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    deleteUserController,
    getListUserController
} from "../../../libs/user/app";
let router = express.Router();
router.post("/delete_user", makeController(deleteUserController))
router.post("/get_user", makeController(getListUserController))
module.exports = router;