const output = document.getElementById("output");
const messageBox = document.getElementById("message");

const btnFetch = document.getElementById("btnFetch");
const btnXHR = document.getElementById("btnXHR");
const postForm = document.getElementById("postForm");
const putForm = document.getElementById("putForm");
const btnDelete = document.getElementById("btnDelete");

function showMessage(type, text) {
  messageBox.className = `message ${type}`; // success or error
  messageBox.textContent = text;
  messageBox.style.display = "block";
}

function clearUI() {
  output.textContent = "";
  messageBox.style.display = "none";
  messageBox.textContent = "";
  messageBox.className = "message";
}

function renderPost(data) {
  output.textContent =
    `ID: ${data.id}\n` +
    `Title: ${data.title}\n\n` +
    `Body:\n${data.body}\n`;
}