import * as readline from 'readline';

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Calculator class to handle operations
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
}

// Function to prompt for user input
function getUserInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

// Function to perform calculation based on user input
async function performCalculation() {
    const calculator = new Calculator();

    while (true) {
        const operation = await getUserInput("Enter operation (add, subtract, multiply, divide) or 'exit' to quit: ");

        if (operation.toLowerCase() === 'exit') {
            console.log("Exiting the calculator.");
            rl.close();
            return;
        }

        const num1Str = await getUserInput("Enter first number: ");
        const num2Str = await getUserInput("Enter second number: ");

        const num1 = parseFloat(num1Str);
        const num2 = parseFloat(num2Str);

        let result: number;

        try {
            switch (operation.toLowerCase()) {
                case 'add':
                    result = calculator.add(num1, num2);
                    break;
                case 'subtract':
                    result = calculator.subtract(num1, num2);
                    break;
                case 'multiply':
                    result = calculator.multiply(num1, num2);
                    break;
                case 'divide':
                    result = calculator.divide(num1, num2);
                    break;
                default:
                    console.log("Invalid operation. Please try again.");
                    continue;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

// Start the calculator application
performCalculation();
