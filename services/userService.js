import User from "../models/User.js";

// Service to get all users
export const getAllUsers = async () => {
    const users = await User.find({}, "-password"); // Exclude password field for security
    return users.map((user) => ({
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
    }));
};

// Service to get user profile
export const getProfile = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    return {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
    };
};
