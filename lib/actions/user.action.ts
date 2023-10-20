"use server";

import User from "@/database/user.model";
import { connectToDabatase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  GetUserByIdParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: GetUserByIdParams) {
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

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDabatase();

    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDabatase();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete questions, answers, comments, etc.

    // const userQuestionIds = await Question.find({
    //   author: user._id,
    // }).distinct("_id");

    //  Delete user questions

    await Question.deleteMany({ author: user._id });

    // TODO: Delete user answers, comments, etc.

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDabatase();

    const { clerkId, updateData, path } = params;

    const newUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
