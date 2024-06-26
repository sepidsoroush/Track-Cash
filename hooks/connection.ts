import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connectMongoDB = async () => {
  const conn = await mongoose
    .connect(MONGO_URI as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const CategorySchema = new mongoose.Schema({
    label: { type: String, required: true },
    budget: Number,
    icon: String,
    tooltip: String,
  });

  const Category =
    mongoose.models.Category || mongoose.model("Category", CategorySchema);

  return { conn, Category };
};
