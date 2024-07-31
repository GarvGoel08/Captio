import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import User from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { emailHandler } from "@/middleware/emailHandler";

await dbConnect();

export const PUT = catchAsync(async (req, context) => {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new NextResponse(
      JSON.stringify({ error: "All fields are required" }),
      {
        status: 400,
      }
    );
  }

  const existing = await User.findOne({ email });
  if (existing) {
    if (existing.otp.expiration != null) {
      await User.findOneAndDelete({ email });
      return new NextResponse(
        JSON.stringify({ error: "User entry deleted.. Please try again.." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else
      return new NextResponse(
        JSON.stringify({ error: "User already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
  }
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiration = new Date(Date.now() + 5 * 60 * 1000);
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashed,
    otp: { code, expiration },
  });
  emailHandler(email, "OTP for Capt.io", `Thank you for choosing captio,  Your OTP is ${code}`);
  return new NextResponse(
    JSON.stringify({ success: "User created successfully", newUser }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
});
