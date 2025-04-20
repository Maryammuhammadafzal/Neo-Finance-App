import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
       await connectDB();

       return NextResponse.json({message : "Mongodb connected succesfully"});
}