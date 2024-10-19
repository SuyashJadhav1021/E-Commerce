import userModel from "../models/user.js";
import validator from "validator";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, msg: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Please provide valid email" });
    }
    if (password.length < 3) {
      return res.json({ success: false, msg: "Please enter strong password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = {
      name,
      email,
      password: hashPass,
    };

    const user = await userModel.create(newUser);
    const token = createToken(user._id);
    return res.json({ success: true, msg: "User created", token: token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: "false", msg: "User doesn't exists" });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (pass) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: "false", msg: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, msg: error.message });
  }
};

const adminRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, msg: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, msg: error.message });
  }
};

export { login, register, adminRegister };
