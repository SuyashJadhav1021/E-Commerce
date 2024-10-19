import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { shopContext } from "../Context/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(shopContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (currentState === "Sign Up") {
        const res = await axios.post(
          process.env.REACT_APP_BACKENDURL + "/api/user/register",
          { name, email, password }
        );
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.success(res.data.msg);
        } else {
          toast.error(res.data.msg);
        }
      } else {
        const res = await axios.post(
          process.env.REACT_APP_BACKENDURL + "/api/user/login",
          { email, password }
        );
        console.log(res.data);

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.error(res.data.msg);
        } else {
          toast.error(res.data.msg);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="lg:py-20 font-style">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-[90%] sm:max-w-96 mx-auto gap-3 mt-8 mb-8"
      >
        <div className="flex flex-col items-center gap-1 text-2xl md:text-3xl font-semibold mb-2">
          <p>{currentState}</p>
          <hr className="h-1 w-14 border-none bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
            required={true}
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
          required={true}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
          required={true}
        />
        <div className="flex w-full text-sm justify-between">
          <p className="cursor-pointer text-blue-800">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer text-gray-800"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </p>
          ) : (
            <p
              className="cursor-pointer text-gray-800"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </p>
          )}
        </div>
        <button className="mt-2 bg-black px-2 py-2 text-white text-sm hover:bg-gray-800 active:bg-gray-700">
          {currentState === "Login" ? "Sign In" : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default LoginSignup;
