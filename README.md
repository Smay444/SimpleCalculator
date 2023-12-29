# SimpleCalculator
Simple Calculator to add two numbers utilizing HTML &amp; JavaScript

Simple JavaScript/HTML Calculator
This repository contains a simple calculator implemented using HTML and JavaScript. It allows users to input two values and calculates their sum upon clicking the "Calculate" button.

Getting Started
To run this calculator locally or integrate it into your project, follow these steps:

Clone the Repository: Use the following command to clone this repository to your local machine:

git clone https://github.com/smay444/calculator.git
Open the Files: Navigate to the cloned repository directory and open the index.html file in your preferred web browser or code editor.

Usage
Open the index.html file in a web browser.
Input numerical values into the designated fields for num1 and num2.
Click the "Calculate" button to see the sum of the input values displayed below.
Implementation Details
The calculator uses HTML for structure and JavaScript for functionality.
Upon loading the page, the JavaScript code ensures that the calculation occurs only when the "Calculate" button is clicked.
The calculate() function fetches the input values, performs addition, and displays the result below the input fields.

Example Code Snippet

document.addEventListener('DOMContentLoaded', (event) =>{
    const btnCalculate = document.getElementById('btnCalculate');

    btnCalculate.addEventListener('click', (event) => {
        event.preventDefault();
        calculate();
    });



