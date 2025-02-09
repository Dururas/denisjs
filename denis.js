// Create a label element
let nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
nameLabel.setAttribute("for", "nameInput");

// Create an input text field
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "nameInput";
nameInput.placeholder = "Enter your name";

// Append elements to the document body
document.body.appendChild(nameLabel);
document.body.appendChild(nameInput);

// Optional: Log user input to the console
nameInput.addEventListener("input", function() {
    console.log("User typed: " + this.value);
});
