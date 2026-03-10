import express from "express";
import dotenv from "dotenv";
import { CohereClientV2 } from "cohere-ai";
import cors from "cors";

dotenv.config();

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/message", async (req, res) => {
  console.log(req.body);
  const response = await cohere.chat({
    model: "command-a-03-2025",
    messages: req.body.message,
  });

  console.log(response);
});

app.listen(3000, () => {
  console.log("server +");
});
