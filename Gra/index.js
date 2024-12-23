// index.js

// Function to start the game
function startGame() {
    console.log("Welcome to the game of Millionaire!");
    // Initialize game variables and logic here
}

// Function to ask a question
function askQuestion(question, options) {
    console.log(question);
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    // Logic to handle user input and check the answer
}

// Example usage
startGame();
askQuestion("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"]);