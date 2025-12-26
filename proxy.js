import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Proxy /api requests to Ollama TinyLlama
app.use("/api", createProxyMiddleware({
    target: "http://127.0.0.1:5000",
    changeOrigin: true
}));


const PORT = 4000; // Any free port
app.listen(PORT, () => console.log(`Proxy running on http://localhost:${PORT}`));
