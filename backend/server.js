console.log("🔥 SERVER FILE IS RUNNING");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("AI Student Chatbot Backend is running 🚀");
});

// Chatbot Route
app.post("/chat", (req, res) => {

    const userMessage = req.body.message.toLowerCase();

    let botReply = "";

    if (userMessage.includes("java")) {
        botReply =
            "Java is an object-oriented programming language used to build web, mobile and enterprise applications.";
    }

    else if (userMessage.includes("python")) {
        botReply =
            "Python is a popular programming language known for its simplicity and use in AI, data science and web development.";
    }

    else if (userMessage.includes("dsa")) {
        botReply =
            "DSA stands for Data Structures and Algorithms. It helps solve problems efficiently and is important for coding interviews.";
    }

    else if (userMessage.includes("dbms")) {
        botReply =
            "DBMS stands for Database Management System. It is used to store, organize and manage data efficiently.";
    }

    else if (
        userMessage.includes("operating system") ||
        userMessage.includes("os")
    ) {
        botReply =
            "An Operating System manages computer hardware and software resources and provides services to programs.";
    }

    else if (
        userMessage.includes("computer networks") ||
        userMessage.includes("cn")
    ) {
        botReply =
            "Computer Networks enable communication and data sharing between computers using protocols such as TCP/IP.";
    }

    else if (userMessage.includes("interview")) {
        botReply =
            "For interviews, focus on DSA, OOPs, DBMS, Operating Systems, Computer Networks and project explanations.";
    }

    else if (userMessage.includes("hello") || userMessage.includes("hi")) {
        botReply =
            "Hello! I am your AI Student Assistant. How can I help you today?";
    }

    else {
        botReply =
            "I can help with Java, Python, DSA, DBMS, Operating Systems, Computer Networks and Interview Preparation.";
    }

    res.json({
        reply: botReply
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});