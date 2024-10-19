import React, { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { shopContext } from "../Context/context";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const { token, cartData, setCartData, totalCart, shipping_fee, products } =
    useContext(shopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      reciept: order.reciept,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(
            process.env.REACT_APP_BACKENDURL + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCartData({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartData) {
        for (const item in cartData[items]) {
          if (cartData[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((prod) => prod._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartData[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: totalCart() + shipping_fee,
      };
      switch (method) {
        case "cod":
          const res = await axios.post(
            process.env.REACT_APP_BACKENDURL + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (res.data.success) {
            setCartData({});
            navigate("/orders");
          } else {
            toast.error(res.data.msg);
          }
          break;

        case "stripe":
          const resStripe = await axios.post(
            process.env.REACT_APP_BACKENDURL + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (resStripe.data.success) {
            const { session_url } = resStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(resStripe.data.msg);
          }
          break;

        case "razorpay":
          const resRazorpay = await axios.post(
            process.env.REACT_APP_BACKENDURL + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (resRazorpay.data.success) {
            initPay(resRazorpay.data.order);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="lg:py-24 font-style w-[80vw] mx-auto flex flex-col justify-between lg:flex-row"
    >
      <div className="flex flex-col gap-3 w-full sm:max-w-[480px] mt-5 mb-5">
        <div className="mb-4">
          <p className="text-xl lg:2xl font-bold">DELIVERY DETAILS</p>
        </div>
        <div className="flex justify-between gap-2">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First name"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last name"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email Address"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          type="text"
          placeholder="Street"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
        <div className="flex justify-between gap-2">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <div className="flex justify-between gap-2">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="text"
            placeholder="Pin Code"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          placeholder="Phone"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
      </div>
      <div className="w-full sm:max-w-[480px] mt-16 mb-5">
        <CartTotal />
        <div className="flex flex-col w-full mt-8 gap-3">
          <p className="text-lg font-bold">PAYMENT METHOD</p>
          <div className="flex gap-3 w-full">
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 " />
            </div>
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("razorpay")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 " />
            </div>
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-[14px] font-semibold text-gray-800">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="text-end mt-5">
            <button
              type="submit"
              className="bg-black text-white text-sm px-6 py-2 rounded-sm hover:bg-gray-900 active:bg-gray-700"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
