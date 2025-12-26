document.getElementById("send-btn").addEventListener("click", async () => {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  input.value = "";

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  if (data.reply) {
    chatBox.innerHTML += `<p><b>🤖 Bot:</b> ${data.reply}</p>`;
  } else {
    chatBox.innerHTML += `<p><b>🤖 Bot:</b> ⚠️ Error: ${data.error}</p>`;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});
