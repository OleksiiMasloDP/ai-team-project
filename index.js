const userMessage = document.getElementById("messageInput");
const result = document.getElementById("response"); //div
const button = document.getElementById("button")

button.onclick=startChat

async function startChat() {
  const prompt = userMessage.value;
  const response = await fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt }),
  });
  userMessage.value = "";
}
