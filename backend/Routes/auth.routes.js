import express from 'express';
import {Login, Logout, Signup } from "../Controllers/auth.controllers.js"

const router = express.Router();

router.get("/Signup", Signup);


router.get("/Login", Login)

router.get("/Logout", Logout)


export default router;