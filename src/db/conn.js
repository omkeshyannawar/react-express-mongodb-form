import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/DASP_Registration")
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log("DATABASE NOT CONNECTED", error);
  });
