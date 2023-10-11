"use server";

import { connectToDabatase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDabatase();
  } catch (error) {}
}
