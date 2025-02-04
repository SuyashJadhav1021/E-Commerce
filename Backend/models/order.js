import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: { type: Array, required: true },
  userId: { type: String, required: true },
  address: { type: Object, required: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  payment: { type: Boolean, required: true, default: false },
  status: { type: String, required: true, default: "Order Placed" },
  date: { type: Number, required: true },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
