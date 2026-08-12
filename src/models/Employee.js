import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  FullName: String,
  Age: Number,
  Role: String,
  Address: String,
});

export default mongoose.model("Employee", employeeSchema);
