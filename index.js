const userMessage = document.getElementById("messageInput");
const result = document.getElementById("response"); //div
const button = document.getElementById("button");
const chatHistory = []; //{role: "user" "assistant", content }

button.onclick = startChat;

if ((chatHistory.length === 0) & !chatHistory) {
  startChat();
} else {
  displayChatHistory();
}

async function startChat() {
  const prompt = userMessage.value;

  chatHistory.push({
    role: "user",
    content: prompt,
  });

  const response = await fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt, chatHistory }),
  });

  const data = await response.json();
  console.log(data);
  chatHistory.push({
    role: data.response.message.role,
    content: data.response.message.content[0].text,
  });
  userMessage.value = "";
}

function displayChatHistory() {
  chatHistory.forEach((msg) => {
    createChatBlock(msg.content); // content - содержимое msg
  });
}

function createChatBlock(msg) {
  const p = document.createElement("p");
  p.textContent = msg;
  result.appendChild(p);
}
