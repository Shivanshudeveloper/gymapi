import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from "./routes/users.js";
dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
const DB = "mongodb+srv://shivanshu:shivanshu@1234@cluster0.t9gqi.mongodb.net/workdbdata?retryWrites=true&w=majority";

mongoose
  .connect(
    DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
