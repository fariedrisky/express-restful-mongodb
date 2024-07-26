import { register, login } from "../services/authService.js";

// Controller for user registration
export const registerUser = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        const userData = await register({ name, username, email, password });
        res.status(201).json(userData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller for user login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await login({ email, password });
        res.json(userData);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
