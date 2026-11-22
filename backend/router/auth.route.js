import express from 'express';
import { loginUser, Userregister } from '../controllers/auth.controller.js';


const router = express.Router();

// Sign up
router.post("/register", Userregister);
router.post("/login", loginUser);




export default router;
