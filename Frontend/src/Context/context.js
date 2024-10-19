import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const shopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  const [token, setToken] = useState("");
  const [menu, setMenu] = useState("");

  const shipping_fee = 10;

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKENDURL + "/api/product/all"
      );
      if (res.data.success) {
        setProducts(res.data.products);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = async (prodId, size) => {
    if (!size) {
      toast.error("Select Product Size!");
    }

    let cartItems = structuredClone(cartData);

    if (cartItems[prodId]) {
      if (cartItems[prodId][size]) {
        cartItems[prodId][size] += 1;
      } else {
        cartItems[prodId][size] = 1;
      }
    } else {
      cartItems[prodId] = {};
      cartItems[prodId][size] = 1;
    }
    setCartData(cartItems);
    if (token) {
      try {
        await axios.post(
          process.env.REACT_APP_BACKENDURL + "/api/cart/add",
          { itemId: prodId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartData) {
      for (const item in cartData[items]) {
        try {
          if (cartData[items][item] > 0) {
            totalCount += cartData[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateCart = async (itemId, size, quantity) => {
    let cartItems = structuredClone(cartData);

    cartItems[itemId][size] = quantity;
    setCartData(cartItems);
    if (token) {
      try {
        await axios.post(
          process.env.REACT_APP_BACKENDURL + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const totalCart = () => {
    let totalAmount = 0;
    for (const items in cartData) {
      let prod = products.find((product) => product._id === items);
      for (const item in cartData[items]) {
        try {
          if (cartData[items][item] > 0) {
            totalAmount += prod.price * cartData[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const getUserCart = async (token) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setCartData(res.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const contextValue = {
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartData,
    getCartCount,
    updateCart,
    totalCart,
    shipping_fee,
    menu,
    setMenu,
    token,
    setToken,
    setCartData,
  };

  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
