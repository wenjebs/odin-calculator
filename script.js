const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
let input = '';

//listen for mouse click on equal button
equal.addEventListener("click", function() {
    display.textContent = '';
    let result = (operate(`${operator}`, parseInt(num), parseInt(input)));
    display.textContent = result;
    
});

//listen for clear
clear.addEventListener("click", function() {
    display.textContent = '';
    input = 0;
    num = 0;
});

//for each input number
numbers.forEach(number => number.addEventListener("click", function() {
    appendToDisplay(number.textContent);
    input+=number.textContent;
}));

//for each operation + - / *
operations.forEach(operation => operation.addEventListener("click", function() {
    operator = operation.textContent;
    num = input;
    input = '';
    appendToDisplay(` ${operator} `);
}));

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