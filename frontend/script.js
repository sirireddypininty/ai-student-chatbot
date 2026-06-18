const chatBox = document.getElementById("chatBox");
async function sendMessage() {

    const input = document.getElementById("message");
    

    const message = input.value.trim();

    if (!message) return;

    const userDiv = document.createElement("div");
    userDiv.className = "message user";
    userDiv.innerText = message;
    chatBox.appendChild(userDiv);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("https://ai-student-chatbot-1-c8tp.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const typingDiv = document.createElement("div");
typingDiv.className = "message bot";
typingDiv.innerText = "AI is typing...";
chatBox.appendChild(typingDiv);

const data = await response.json();

setTimeout(() => {

    typingDiv.innerText = data.reply;
    saveChat();

    chatBox.scrollTop = chatBox.scrollHeight;

}, 1000);

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        const botDiv = document.createElement("div");
        botDiv.className = "message bot";
        botDiv.innerText = "Server connection error.";

        chatBox.appendChild(botDiv);
        saveChat();
    }
}

document
.getElementById("message")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }
});
// Save chat history
function saveChat() {
    localStorage.setItem(
        "chatHistory",
        chatBox.innerHTML
    );
}

// Load chat history
window.onload = function () {

    const savedChat =
        localStorage.getItem("chatHistory");

    if (savedChat) {
        chatBox.innerHTML = savedChat;
    }
};
function newChat() {

    localStorage.removeItem("chatHistory");

    chatBox.innerHTML = `
        <div class="welcome">
            <h2>👋 Welcome</h2>
            <p>Ask anything about coding and studies.</p>
        </div>
    `;
}
function quickQuestion(question) {

    document.getElementById("message").value = question;

    sendMessage();
}
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {

        btn.innerText = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        btn.innerText = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");
    }
}

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    const btn = document.getElementById("themeBtn");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        btn.innerText = "☀️ Light Mode";

    } else {

        btn.innerText = "🌙 Dark Mode";
    }
});