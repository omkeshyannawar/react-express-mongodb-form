import express from "express";
import "../db/conn.js";
import Employee from "./Employee.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("GET API is working!!");
});

app.post("/employee", async (req, res) => {
  const employee = new Employee(req.body);

  await employee.save();

  res.json(employee);
});

app.get("/employee", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});
