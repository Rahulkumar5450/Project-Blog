import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve your frontend files

// Route to chat with "Bolt" AI
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Mock response instead of calling paid Ollama API
    // You can add more intelligent canned responses here
    let reply = "🤖 Bolt says: I received your message!";

    // Example: respond differently to specific keywords
    if (userMessage.toLowerCase().includes("hello")) {
      reply = "🤖 Bolt says: Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      reply = "🤖 Bolt says: Sure! Ask me anything and I'll try to assist.";
    }

    // Return the mock response
    res.json({ reply });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start the server on dynamic port or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
