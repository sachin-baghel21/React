import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dynamicText, setDynamicText] = useState("Welcome To React App"); // Dynamic content state
  const navigate = useNavigate();

  useEffect(() => {
    const messages = [
      "Welcome To My React App",
      "Welcome To My WebDCS App",
    ];
    let index = 0;

    const interval = setInterval(() => {
      // Change dynamicText every 3 seconds
      setDynamicText(messages[index]);
      index = (index + 1) % messages.length; // Loop back to start
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    if (email === "sachin@gmail.com" && password === "123") {
      setIsAuthenticated(true); // Set user as authenticated
      navigate("/home"); // Redirect to the Home page
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 md:flex md:items-center md:justify-around relative overflow-hidden">
      {/* Background Box Patterns */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_100%)] 
        opacity-30 pointer-events-none"
      ></div>

      {/* Dynamic Heading */}
      <h1 className="text-5xl p-4 text-center font-bold from-yellow-600 via-indigo-600 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent md:block hidden">
        {dynamicText}
      </h1>

      <div className="bg-white md:m-0 my-10 shadow-2xl fixed border-2 border-sky-500 rounded-lg p-6 md:p-10 w-full max-w-md relative z-10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-in-out transform">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none bg-gray-100"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none bg-gray-100"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:text-black py-3 rounded-lg text-lg font-semibold hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
