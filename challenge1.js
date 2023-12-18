function calculateGrade() {
    try {
        // Get user input for student marks
        let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

        // Check if the input is within the valid range
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            // Determine the grade based on the given ranges
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60 && marks <= 79) {
                grade = 'B';
            } else if (marks >= 50 && marks <= 59) {
                grade = 'C';
            } else if (marks >= 40 && marks <= 49) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            // Output the result using console.log
            console.log("The corresponding grade for " + marks + " is: " + grade);
        } else {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        }
    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}

// Call the function
calculateGrade(71);

// const userInput = window.prompt("hellooo,")
