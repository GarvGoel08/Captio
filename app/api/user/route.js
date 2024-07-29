import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import User from "@/models/users";
import { NextResponse } from "next/server";

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
    return new NextResponse(JSON.stringify({ error: "User already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const newUser = await User.create({ name, email, password, otp });
  return new NextResponse(
    JSON.stringify({ success: "User created successfully", newUser }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
});

