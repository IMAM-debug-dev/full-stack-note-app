
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Register Controller
export const Userregister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newuser = await User.create({
            username,
            email,
            password: hashedPassword,
            list: []
        });

        return res.status(201).json({
            success: true,
            message: "New user created successfully",
            user: {
                _id: newuser._id,
                username: newuser.username,
                email: newuser.email,
                list: newuser.list
            }
        });

    } catch (error) {
        console.log("Register Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login Controller
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const CorrectPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!CorrectPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                list: user.list
            }
        });

    } catch (error) {
        console.log("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
