"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col bg-[#1E1E1E] w-full items-center justify-center min-h-screen">
      <header className="text-4xl font-bold mb-4 text-[white]">NAITRAM</header>
      <div className="text-xl mb-8 text-[white]">QR Scanner</div>
      <Image
        className="rounded-full mb-8"
        src="https://via.placeholder.com/200"
        alt="Random Image"
        width={140}
        height={140}
      />
      <form className="flex flex-col items-center">
        <input
          type="text"
          className="mb-4 p-2 border border-gray-300 rounded"
          placeholder="Username"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-2 right-2 focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
