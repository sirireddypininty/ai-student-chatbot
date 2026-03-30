function sendMessage() {
    let message = document.getElementById("message").value;

    fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        let chatbox = document.getElementById("chatbox");

        chatbox.innerHTML += "<p><b>You:</b> " + message + "</p>";
        chatbox.innerHTML += "<p><b>Bot:</b> " + data.reply + "</p>";
    });
}