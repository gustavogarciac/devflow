"use server";

import User from "@/database/user.model";
import { connectToDabatase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDabatase();
    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("user not found");

    // Find interactions for the user and group by tags.

    return [
      {
        _id: "1",
        name: "tag1",
      },
      {
        _id: "2",
        name: "tag2",
      },
      {
        _id: "3",
        name: "tag3",
      },
    ];
  } catch (error) {}
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDabatase();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
