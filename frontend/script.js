async function sendMessage() {

    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const data = await response.json();

console.log(data);

document.getElementById("response").innerText = data.reply;
}