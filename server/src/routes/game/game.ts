import express from "express";
import dices from "./handlers/dices";

const router = express.Router();

router.post("/dices", dices);

export default router;
