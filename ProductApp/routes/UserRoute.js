const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require("../controllers/UserController");
 const {userValidation}=require("../middleware/UserValidator")

router.post("/",userValidation, register);
router.post("/login", login);
router.get("/profile", getProfile);

module.exports = router;
