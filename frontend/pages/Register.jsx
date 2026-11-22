
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      formData
    );

    console.log(response.data);
    setFormData({
      email: "",
      username: "",
      password: ""
    })

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-sm bg-white p-7 rounded-xl shadow-sm border border-gray-200">

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create Account
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2 mb-7">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Username
            </label>
            <input
            
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          <button
          
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg text-sm font-semibold transition duration-200"
          >
            Create Account
          </button>

        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
