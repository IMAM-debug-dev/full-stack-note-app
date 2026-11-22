
import  { useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const respons = await axios.post(
        "http://localhost:3000/api/auth/login" ,
        formData
       );
       console.log(respons.data)
       setFormData({
        email: "",
        password:""
       })
    } catch (error) {
      console.log(error.respons?.data || error.message )
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#576d89] px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Please login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#f8fafc] border border-gray-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#f8fafc] border border-gray-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6c415f] hover:bg-[#a9809d] text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-gray-500 text-center mt-7">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-500 font-semibold ml-1 hover:text-blue-600"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
