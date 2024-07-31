"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Form() {
  const [otp, setOtp] = useState(null);
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);
  const signUp = async () => {
    if (!otp || !otp.length == 6) {
      alert("OTP is required");
      return;
    }
    const res = await fetch("/api/user/verify", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });
    if (res.ok) {
      alert("User created successfully");
    } else {
      alert("OTP is incorrect. Please try again or contact support");
    }
  };
  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-[#0b0c19] flex flex-col my-10 mx-2 text-white p-6 py-8 rounded-lg overflow-x-hidden  min-w-[490px] max-sm:min-w-0 max-sm:w-full">
        <div className="font-semibold text-center text-2xl mb-4">
          Verify OTP
        </div>
        <div className="flex flex-col text-sm gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <div>OTP Sent to your email</div>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
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
        <div className="text-center mt-8">
          Did not recieve an OTP?{" "}
          <button onClick={() => (alert("Function in Development"))} className="underline text-blue-500">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
