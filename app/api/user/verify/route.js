import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import User from "@/models/users";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

await dbConnect();

export const PUT = catchAsync(async (req, context) => {
  const { email, otp } = await req.json();
  const existing = await User.findOne({ email });
  if (!existing) {
    return new NextResponse(JSON.stringify({ error: "User does not exist" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (existing.otp.expiration == null) {
    return new NextResponse(
      JSON.stringify({ error: "OTP Already verified." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  if (existing.otp.expiration < new Date()) {
    await User.findOneAndDelete({ email });
    return new NextResponse(JSON.stringify({ error: "OTP expired" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (existing.otp.code !== otp) {
    return new NextResponse(JSON.stringify({ error: "Invalid OTP" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  await User.findOneAndUpdate(
    {
      email: email,
    },
    {
      $set: {
        "otp.expiration": null,
        "otp.code": null,
      },
    }
  );

  const token = sign({ id: existing._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const response = new NextResponse(
    JSON.stringify({ success: "OTP verified successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7*24*3600, 
  });

  return response;
});
