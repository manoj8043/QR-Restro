import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${mongoose.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
