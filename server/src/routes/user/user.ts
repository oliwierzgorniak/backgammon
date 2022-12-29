import express from "express";
import login from "./handlers/login";
import register from "./handlers/register";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
