import mongoose from "mongoose";
import config from "config";

const connectDB = async () => {
  try {
    const db: string = config.get("db");
    await mongoose.connect(db, {});
    console.log(`Database connected:`);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
