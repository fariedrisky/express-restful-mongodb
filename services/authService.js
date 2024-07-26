import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// Service to register a user
export const register = async ({ name, username, email, password }) => {
    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        username,
        email,
        password,
    });

    return {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
    };
};

// Service to login a user
export const login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        return {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        };
    } else {
        throw new Error("Invalid email or password");
    }
};
