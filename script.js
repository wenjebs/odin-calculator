const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
let input = '';
let storeResult = '';
let operator;
//listen for mouse click on equal button
equal.addEventListener("click", function() {
    display.textContent = '';
    // if there hasnt been a previous result use the one u inputted
    if (!storeResult) {
        let result = (operate(`${operator}`, parseInt(num), parseInt(input)));
        display.textContent = result;
        storeResult = result;
    // else if there is a result alr from previous operations u shd use it
    } else {
        let result = (operate(`${operator}`, parseInt(storeResult), parseInt(input)));
        display.textContent = result;
        //update new storedresult
        storeResult = result;
    }
});

//listen for clear
clear.addEventListener("click", function() {
    display.textContent = '';
    input = '';
    num = '';
    storeResult = '';
});

//for each input number
numbers.forEach(number => number.addEventListener("click", function() {
    appendToDisplay(number.textContent);
    // store ur input
    input+=number.textContent;
}));

//for each operation + - / *
operations.forEach(operation => operation.addEventListener("click", function() {
    // when u press + - / * save the previous input
    num = input;
    // delete the current saved input
    input = '';
    // add to display
    operator = operation.textContent;
    appendToDisplay(` ${operator} `);
    return operator;
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