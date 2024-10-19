import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const res = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusUpdate = async (e, orderId) => {
    try {
      const res = await axios.post(
        backendURL + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (res.data.success) {
        await fetchOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(res.data.msg);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
          >
            <img src={assets.parcel_icon} alt="" className="w-12" />
            <div>
              <div>
                {order.items.map((item, i) => {
                  if (i === order.items.length - 1) {
                    return (
                      <p key={i} className="py-0.5">
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={i} className="py-0.5">
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Items: {order.items.length}
              </p>
              <p className="mt-3">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">${order.amount}</p>
            <select
              onChange={(e) => statusUpdate(e, order._id)}
              className="p-2 font-semibold"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packed">Packed</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
