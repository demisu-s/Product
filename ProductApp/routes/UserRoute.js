const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const { register, login, getProfile } = require("../controllers/UserController");
const { userValidation } = require("../middleware/UserValidator");

router.post("/", userValidation, register);
router.post("/login", login);
router.get("/profile", protect, getProfile); 

module.exports = router;
