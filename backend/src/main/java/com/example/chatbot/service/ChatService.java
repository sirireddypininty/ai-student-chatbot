package com.example.chatbot.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

    public String getReply(String message) {

        message = message.toLowerCase();

        if (message.contains("hello") || message.contains("hi")) {
            return "Hello! How can I help you?";
        }
        else if (message.contains("java")) {
            return "Java is a programming language.";
        }
        else if (message.contains("exam")) {
            return "Your exams will be announced soon.";
        }
        else {
            return "Sorry, I didn't understand.";
        }
    }
}