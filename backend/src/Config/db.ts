import mongoose from "mongoose";    

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:fahad12345678@cluster0.oakgd6k.mongodb.net/newDataBase";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }     
}

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();    
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}

export { connectDB, disconnectDB };