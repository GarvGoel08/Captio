"use client";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  // SignUp user useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // SignUp user function
  const signUp = async () => {
    console.log(name, email, password, confirmPassword);
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const res = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      alert("User created successfully");
    } else {
      alert("User already exists");
    }
  };
  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-[#0b0c19] flex flex-col my-10 mx-2 text-white p-6 py-8 rounded-lg overflow-x-hidden  min-w-[490px] max-sm:min-w-0 max-sm:w-full">
        <div className="font-semibold text-center text-2xl mb-4">
          SignUp to Capt.io
        </div>
        <div className="flex flex-col text-sm gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <div>Name</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@capt.io"
              className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
              className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
            />
          </div>
        </div>
        <button
          onClick={() => signUp()}
          className="bg-blue-800 ease-in duration-150 hover:bg-blue-700 text-white rounded-md p-2 mt-6"
        >
          SignUp
        </button>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
