// Greet the user
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Hello! What's your name? ", (userName) => {
    console.log(`Welcome, ${userName || "guest"}!`);
    readline.close();
});

// Display the current time
function showTime() {
    let now = new Date();
    console.log(`Current Time: ${now.toLocaleTimeString()}`);
}
showTime();

// Change color in terminal every second
let colors = ["Red", "Green", "Blue", "Purple", "Orange"];
setInterval(() => {
    console.log(`Changing color to: ${colors[Math.floor(Math.random() * colors.length)]}`);
}, 1000);
