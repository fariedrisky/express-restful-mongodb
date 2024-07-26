import express from "express";
import {
    getUserProfile,
    getAllUsersController,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route for getting user profile (protected)
router.get("/profile", protect, getUserProfile);

// Route for getting all users (protected)
router.get("/all", protect, getAllUsersController);

export default router;
