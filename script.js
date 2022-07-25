/* 
to do list :
fix up multiple operations able to be inputted
fix up all the FUCKING ERORS GOD DAMN
*/
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
let input = '';
let storeResult = '';
let operator;
let num;
let result;

// equal button
equal.addEventListener("click", function() {
    calculateNum();
});

// clear button
clear.addEventListener("click", function() {
    display.textContent = '';
    input = '';
    num = '';
    storeResult = '';
    result = '';
});

// input numbers button
numbers.forEach(number => number.addEventListener("click", function() {
    appendToDisplay(number.textContent);
    // store ur input
    input+=number.textContent;
}));

// operation button
operations.forEach(operation => operation.addEventListener("click", function() {
    // if there are already two numbers, calculate them and return the value
    if (num && input) {
        calculateNum();
        input = '';
        operator = operation.textContent;
        appendToDisplay(` ${operator} `);
        return operator;
    };
    // operator input save the number input.
    num = input;
    // clear the input variable
    input = '';
    // add to display
    operator = operation.textContent;
    appendToDisplay(` ${operator} `);
    return operator;
}));

// calculate the result function
function calculateNum() {
    if (!operator || !num | !input) {
        return;
    }
    // if no previous result, use two input
    if (!storeResult) {
        result = (operate(`${operator}`, parseInt(num), parseInt(input)));
        display.textContent = result;
        //update storedresult
        storeResult = result;
    // if already have result, use it
    } else {
        result = (operate(`${operator}`, parseInt(storeResult), parseInt(input)));
        display.textContent = result;
        //update storedresult
        storeResult = result;
    }
};

//add the numbers onto the display
function appendToDisplay(number) {
    display.textContent+=number;
};

// mathematical operations
function addNum(num1, num2) {
    return num1 + num2;
};

function subtractNum(num1, num2) {
    return num1 - num2;
};

function multiplyNum(num1, num2) {
    return num1 * num2;
};

function divideNum(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return addNum(num1,num2);
        case '-':
            return subtractNum(num1,num2);
        case '/':
            return divideNum(num1,num2);
        case '*':
            return multiplyNum(num1,num2);
    }
};