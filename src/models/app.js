import express from "express";
import "../db/conn.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("GET API is working!!");
});
app.post("/employee", (req, res) => {
  console.log("EMPLOYEE ROUTE HIT");
  console.log("Full Name:", req.body.FullName);
  res.send("Hello", req.body.FullName);
});

app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});
