import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Collections from "./Pages/Collections";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Verify from "./Pages/Verify";

function App() {
  return (
    <Router>
      <div className="w-[100vw]">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
