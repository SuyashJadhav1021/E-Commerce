import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/context";
import axios from "axios";
import { toast } from "react-toastify";

function Order() {
  const { token } = useContext(shopContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      if (!token) {
        return null;
      }
      const res = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        let orderItems = [];
        res.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            orderItems.push(item);
          });
        });
        setOrders(orderItems.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div className="lg:py-20 w-[80vw] mx-auto font-style">
      <div className="mt-6 mb-4">
        <h1 className="text-xl font-semibold">MY ORDERS</h1>
      </div>
      <div>
        {orders.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-t text-gray-600 py-2 "
            >
              <div className="flex items-start gap-2">
                <img src={item.images[0]} alt="prod" className="h-24" />
                <div className="text-[15px] flex flex-col gap-1 p-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <div className="flex gap-1 text-gray-600 font-[500]">
                    <p>${item.price}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Size:{item.size}</p>
                  </div>
                  <p className="text-gray-600 font-[500] text-[14px]">
                    Date:{" "}
                    <span className="text-gray-400 font-[500] text-[14px]">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="text-gray-600 font-[500] text-[14px]">
                    Payment:
                    <span className="text-gray-400 font-[500] text-[14px]">
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <p className="text-[14px] text-gray-500 font-[500]">
                    {item.status}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={fetchOrders}
                  className="bg-gray-100 text-sm border border-gray-500 px-2 py-1 text-gray-700 font-[500]"
                >
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
