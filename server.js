const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("MONGO connection ya ese dobavlyu")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const messageSchema = new mongoose.Schema({
  text: String,
  sender: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

app.post("/messages", async (req, res) => {
  const newMessage = new Message(req.body);
  await newMessage.save();
  res.json(newMessage);
});

app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

app.listen(5000, () => console.log("Server started on port 5000"));