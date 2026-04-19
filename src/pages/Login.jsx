// src/pages/LoginPage.jsx

import { useState } from "react";
import api from "../api";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await api.post("/admin/login", { email, password });

      toast.success("Login successful 🎉");
      window.location.href = "/";
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* 🔥 Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-1/2 left-1/2"></div>

      {/* 💎 Glass Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">
          Welcome Back 👋
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* BUTTON */}
        <button className="w-full p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transform transition duration-300 shadow-lg font-semibold">
          Login 🚀
        </button>

        {/* EXTRA TEXT */}
        <p className="text-sm text-center mt-4 text-white/70">
          Secure admin access 🔐
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
