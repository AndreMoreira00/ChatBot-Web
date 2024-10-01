// API GEMINI
import { GoogleGenerativeAI } from 'https://cdn.skypack.dev/@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyDlw1KM1SI2F3JwhMpnvu77JV2MeVSvc-Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// HTML Components
  // User
const messagesContainer = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', async function () {
  const message = messageInput.value;
  if (message.trim() !== "") {
    
    // Render Message user
    const messageElementUser = document.createElement('div');
    messageElementUser.classList.add('message-user');
    messageElementUser.innerText = message;
    messagesContainer.appendChild(messageElementUser);
    messageInput.value = ""; 
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Render Message chat
    const container_bot = document.createElement('div');
    container_bot.classList.add('container-bot');

    // Image chat
    const image_chat = new Image();
    image_chat.src = 'images/icon_perfil.png'
    image_chat.classList.add('icon_perfil_chat');
    container_bot.appendChild(image_chat);

    // Time loader
    const messageElementChat = document.createElement('div');
    messageElementChat.classList.add('loader');
    container_bot.appendChild(messageElementChat);

    messagesContainer.appendChild(container_bot);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // API GPT (Gemini) SEND MENSSAGE
    const prompt = "Responda com uma frase: ";
    const result = await model.generateContent(prompt+message);

    setTimeout(1000);

    messageElementChat.classList.remove('loader');
    // messageElementChat = document.createElement('div');
    messageElementChat.classList.add('message-chat');
    messageElementChat.innerText = result.response.text();
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

  }
});

messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});