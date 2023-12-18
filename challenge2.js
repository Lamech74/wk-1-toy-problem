function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerKmOverLimit = 1;

    try {
        // Parse the input speed
        const parsedSpeed = parseInt(speed);

        // Check if the input is a valid number
        if (!isNaN(parsedSpeed)) {
            // Calculate demerit points
            const demeritPoints = Math.floor((parsedSpeed - speedLimit) / 5);

            // Output the result
            if (demeritPoints > 0) {
                console.log("Points: " + demeritPoints);

                // Check if the driver's license should be suspended
                if (demeritPoints > 12) {
                    console.log("License suspended");
                }
            } else {
                console.log("Ok");
            }
        } else {
            console.log("Invalid input. Please enter a valid number for speed.");
        }
    } catch (error) {
        console.log("An error occurred. Please try again.");
    }
}

// Example usage:
calculateDemeritPoints(50);
