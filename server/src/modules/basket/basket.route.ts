import express from "express";
import requireUser from "../../middleware/requireUser";
import {
  createBasketHandler
} from "./basket.controller";
const router = express.Router();

router.post("/", requireUser, createBasketHandler);


export default router;
