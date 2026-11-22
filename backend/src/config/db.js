
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected Successfully`
    );

  } catch (error) {
    console.error("MongoDB Connection Failed!");
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);

    throw error;
  }
};

export default connectDB;
