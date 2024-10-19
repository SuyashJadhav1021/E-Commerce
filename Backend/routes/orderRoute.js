import express from "express";
import {
  placeOrderCod,
  placeOrderRazorpay,
  placeOrderStripe,
  userOrders,
  allOrders,
  updateOrders,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import auth from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrders);

orderRouter.post("/place", auth, placeOrderCod);
orderRouter.post("/stripe", auth, placeOrderStripe);
orderRouter.post("/razorpay", auth, placeOrderRazorpay);

orderRouter.post("/userorders", auth, userOrders);

orderRouter.post("/verifyStripe", auth, verifyStripe);
orderRouter.post("/verifyRazorpay", auth, verifyRazorpay);

export default orderRouter;
