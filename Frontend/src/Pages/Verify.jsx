import React, { useContext, useEffect } from "react";
import { shopContext } from "../Context/context";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { token, setCartData } = useContext(shopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const res = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      if (res.data.success) {
        setCartData({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div className="lg:py-24 h-screen">Verify</div>;
};

export default Verify;
