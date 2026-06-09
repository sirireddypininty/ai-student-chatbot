package com.example.chatbot.service;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final Map<String, String> responses = new HashMap<>();

    public ChatService() {

        responses.put("hello", "Hi! How can I help you?");
        responses.put("java", "Java is a programming language.");
        responses.put("python", "Python is easy to learn.");
        responses.put("sql", "SQL is used to manage databases.");
        responses.put("exam", "Prepare regularly and practice previous papers.");
         responses.put("dsa", "DSA stands for Data Structures and Algorithms.");
    responses.put("oops", "OOPS stands for Object Oriented Programming System.");
    responses.put("dbms", "DBMS is software used to manage databases.");
    responses.put("os", "Operating System manages hardware and software resources.");
    responses.put("cn", "Computer Networks enable communication between devices.");
    responses.put("interview", "Practice DSA, OOPS, DBMS, OS and aptitude.");
    responses.put("resume", "Keep your resume concise and project-focused.");
    responses.put("placement", "Focus on DSA, aptitude, projects and communication skills.");
    }

    public String getResponse(String message) {

        if(message == null || message.trim().isEmpty()) {
            return "Please enter a question.";
        }

        message = message.toLowerCase();

        for(String keyword : responses.keySet()) {
            if(message.contains(keyword)) {
                return responses.get(keyword);
            }
        }

        return "Sorry, I didn't understand.";
    }
}