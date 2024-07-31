import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import { emailHandler } from "@/middleware/emailHandler";
import User from "@/models/users";
import { NextResponse } from "next/server";

await dbConnect();

export const PUT = catchAsync(async (req, context) => {
    const { email } = await req.json();
    const existing = await User.findOne({ email });
    if (!existing) {
        return new NextResponse(JSON.stringify({ error: "User does not exist" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    if (existing.otp.expiration != null) {
        await User.findByIdAndDelete(existing._id);
        return new NextResponse(JSON.stringify({ error: "OTP expired" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiration = new Date(Date.now() + 5 * 60 * 1000);
    await User.findByIdAndUpdate(existing._id, {
        otp: { code, expiration },
    });
    emailHandler(email, "OTP for Capt.io", `Thank you for choosing captio,  Your OTP is ${code}`);
    return new NextResponse(JSON.stringify({ success: "OTP sent successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
});