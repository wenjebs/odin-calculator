let display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
let input = '';
numbers.forEach(number => number.addEventListener("click", function() {
    appendNumber(number.innerHTML);
    input+=number.innerHTML;
}));

function appendNumber(number) {
    display.innerHTML+=number;
};



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