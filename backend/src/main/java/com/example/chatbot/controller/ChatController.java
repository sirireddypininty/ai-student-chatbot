package com.example.chatbot.controller;
import com.example.chatbot.model.ChatRequest;
import com.example.chatbot.model.ChatResponse;
import com.example.chatbot.service.ChatService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {
        String reply = chatService.getResponse(request.getMessage());
        return new ChatResponse(reply);
    }
}