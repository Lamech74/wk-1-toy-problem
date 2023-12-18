function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const PAYE_RATES = [
        { range: 12298, rate: 0.1 },
        { range: 23885, rate: 0.15 },
        { range: 35472, rate: 0.2 },
        { range: 47059, rate: 0.25 },
        { range: 58646, rate: 0.3 },
        { range: Infinity, rate: 0.35 }
    ];

    const NHIF_RATES = [
        { range: 5999, amount: 150 },
        { range: 7999, amount: 300 },
        { range: 11999, amount: 400 },
        { range: 14999, amount: 500 },
        { range: 19999, amount: 600 },
        { range: 24999, amount: 750 },
        { range: 29999, amount: 850 },
        { range: 34999, amount: 900 },
        { range: 39999, amount: 950 },
        { range: 44999, amount: 1000 },
        { range: 49999, amount: 1100 },
        { range: 59999, amount: 1200 },
        { range: 69999, amount: 1300 },
        { range: 79999, amount: 1400 },
        { range: 89999, amount: 1500 },
        { range: 99999, amount: 1600 },
        { range: 119999, amount: 1700 },
        { range: 139999, amount: 1800 },
        { range: 159999, amount: 1900 },
        { range: 179999, amount: 2000 },
        { range: 199999, amount: 2100 },
        { range: Infinity, amount: 2200 }
    ];

    const NSSF_RATE = 0.06; // 6% of basic salary

    try {
        // Parse input values
        const parsedBasicSalary = parseFloat(basicSalary);
        const parsedBenefits = parseFloat(benefits);

        // Check if the inputs are valid numbers
        if (isNaN(parsedBasicSalary) || isNaN(parsedBenefits)) {
            throw "Invalid input. Please enter valid numbers for basic salary and benefits.";
        }

        // Calculate gross salary
        const grossSalary = parsedBasicSalary + parsedBenefits;

        // Calculate PAYE
        let taxableIncome = grossSalary - (NSSF_RATE * parsedBasicSalary);
        let paye = 0;

        for (const rate of PAYE_RATES) {
            if (taxableIncome <= rate.range) {
                paye = taxableIncome * rate.rate;
                break;
            }
        }

        // Calculate NHIF
        let nhif = 0;

        for (const range of NHIF_RATES) {
            if (parsedBasicSalary <= range.range) {
                nhif = range.amount;
                break;
            }
        }

        // Calculate NSSF
        const nssf = NSSF_RATE * parsedBasicSalary;

        // Calculate net salary
        const netSalary = grossSalary - paye - nhif - nssf;

        // Output the result
        console.log("Gross Salary: " + grossSalary.toFixed(2));
        console.log("PAYE: " + paye.toFixed(2));
        console.log("NHIF Deductions: " + nhif.toFixed(2));
        console.log("NSSF Deductions: " + nssf.toFixed(2));
        console.log("Net Salary: " + netSalary.toFixed(2));

    } catch (error) {
        console.log("An error occurred: " + error);
    }
}

// Example usage:
calculateNetSalary(50000, 2000);
