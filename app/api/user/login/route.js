import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import User from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

await dbConnect();

export const PUT = catchAsync(async (req, context) => {
  const { email, password } = await req.json();
  const existing = await User.findOne({ email });
  if (!existing) {
    return new NextResponse(JSON.stringify({ error: "User does not exist" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (existing.otp.expiration != null) {
    await User.findOneAndDelete({ email });
    return new NextResponse(JSON.stringify({ error: "OTP expired" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (!bcrypt.compareSync(password, existing.password)) {
    return new NextResponse(JSON.stringify({ error: "Invalid Password" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
    

  const token = sign({ id: existing._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const response = new NextResponse(
    JSON.stringify({ success: "Successfully Logged In" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 3600,
  });

  return response;
});
