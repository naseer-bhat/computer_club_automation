import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../utils/passwordUtils.js";

export const register = async (req, res) => {
  const { name, username, email, password, phone, role } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered",
      user: { id: newUser._id, role: newUser.role },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await verifyPassword(user.password, password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, {
    expiresIn: "1d",
  });

  return res.json({
    token,
    user: { id: user._id, role: user.role, username: user.username },
  });
};
