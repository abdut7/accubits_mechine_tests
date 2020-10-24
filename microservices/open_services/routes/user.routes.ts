import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    logInUserController,
    createUserController
} from "../../../libs/user/app";

let router = express.Router();
router.post("/login_user", makeController(logInUserController));
router.post("/create_user", makeController(createUserController))
module.exports = router;