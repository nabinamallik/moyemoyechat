const socket = io("https://moye-moye-chat.onrender.com");

const form = document.querySelector("form");
const m = document.getElementById("m");
const messages = document.getElementById("messages");
function scrollb(){
  messages.scrollTop = messages.scrollHeight;
}
setInterval(scrollb, 300)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  socket.emit("chat message", m.value);
  m.value = "";
});

socket.on("chat message", function (msg) {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});
