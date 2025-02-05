"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create a readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Calculator class to handle operations
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    };
    return Calculator;
}());
// Function to prompt for user input
function getUserInput(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (answer) {
            resolve(answer);
        });
    });
}
// Function to perform calculation based on user input
function performCalculation() {
    return __awaiter(this, void 0, void 0, function () {
        var calculator, operation, num1Str, num2Str, num1, num2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    calculator = new Calculator();
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 5];
                    return [4 /*yield*/, getUserInput("Enter operation (add, subtract, multiply, divide) or 'exit' to quit: ")];
                case 2:
                    operation = _a.sent();
                    if (operation.toLowerCase() === 'exit') {
                        console.log("Exiting the calculator.");
                        rl.close();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getUserInput("Enter first number: ")];
                case 3:
                    num1Str = _a.sent();
                    return [4 /*yield*/, getUserInput("Enter second number: ")];
                case 4:
                    num2Str = _a.sent();
                    num1 = parseFloat(num1Str);
                    num2 = parseFloat(num2Str);
                    result = void 0;
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
                                return [3 /*break*/, 1];
                        }
                        console.log("Result: ".concat(result));
                    }
                    catch (error) {
                        console.log("Error: ".concat(error.message));
                    }
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Start the calculator application
performCalculation();
