"use server";

import User from "@/database/user.model";
import { connectToDabatase } from "../mongoose";

export async function getUserById(params: any) {
  try {
    connectToDabatase();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
