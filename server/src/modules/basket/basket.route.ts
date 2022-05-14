import express from "express";
import requireUser from "../../middleware/requireUser";
import {
  createBasketHandler, deleteBasketHandler, getAllUserBasketHandler, getSingleBasketHandler
} from "./basket.controller";
const router = express.Router();

router.post("/", requireUser, createBasketHandler);
router.get("/", requireUser, getAllUserBasketHandler);
router.get("/:basket_Id", requireUser, getSingleBasketHandler);
router.delete("/:basket_Id", requireUser, deleteBasketHandler);


export default router;
