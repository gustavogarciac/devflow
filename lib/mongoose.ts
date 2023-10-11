import mongoose from "mongoose";

let isConnect: boolean = false;

export const connectToDabatase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("ERROR: MISSING MONGO_DB URL");

  if (isConnect) {
    return console.log("MONGODB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    isConnect = true;
    console.log("MongoDB is connected");
  } catch (error) {}
};
