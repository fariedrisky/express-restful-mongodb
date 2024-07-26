import { getProfile, getAllUsers } from "../services/userService.js";

// Controller for getting user profile
export const getUserProfile = async (req, res) => {
    try {
        const userData = await getProfile(req.user.id);
        res.json(userData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Controller for getting all users
export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
