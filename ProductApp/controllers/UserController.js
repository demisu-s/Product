const Joi = require("joi");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs"); // Change this line
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const register = async (req, res) => {
  const { userName, email, password, role } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
    role
  });

  res.status(201).json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user.id);
    res.json({
      _id: user.id,
      userName: user.userName,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
};

const getProfile = (req, res) => {
  res.json(req.user);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  register,
  login,
  getProfile,
};
