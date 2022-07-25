/* 
to do list :
 add a second div to input ans and put the former calc
 ---------------------------------------------------------
 allow for modification of stored result (done)
 PREVENT input of many 0's (DONe)
 Prevent division by 0 (DONE)
 prevent equal when only 1 num ( DONE!)
 alow input of negative number ( DONE! )
 USE STORED VALUE ( DONE!)
 CHANGE OPERAND WHEN ALR INPUTTED (DONE )
 CALCULATE N GET STORED VALUE WHEN TWO NUMS + OPERAND INPUTTED WHEN OPERAND PRESSED ( DONE)
 ALLOW FOR CALCULATIONS USING PREVIOUSLY CALC VALUE ( DONE)
 PREVENT DECIMAL OVERFLOW ( DONE)

*/
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const operators = ['+', '-', '/', '*'];
let input = '';
let storeResult = '';
let operator = '';
let num = '';
let result = '';

// equal button
equal.addEventListener("click", function() {
    calculateNum();
    operator = '';
});

// input numbers button
numbers.forEach(number => number.addEventListener("click", function() {
    if (storeResult && !operator) {
        appendToDisplay(number.textContent);
        storeResult += number.textContent
        return;
    }
    // iIF num not equal to 0 or display is not empty(allows 0 when thers alr num) AND check IF input already has 0 for operations, allow the num to be displayed
    if (number.textContent !== '0' || display.textContent !== '' && input !== '0') {
        appendToDisplay(number.textContent);
        input+=number.textContent;
    }
}));

// operation button
operations.forEach(operation => operation.addEventListener("click", function(e) {
    // if there are already two numbers, calculate them and return the value
    if ((num || num == '0' || storeResult) && input) {
        calculateNum();
        input = '';
        operator = operation.textContent;
        appendToDisplay(` ${operator} `);
        operator = '';
        return;
    };

    // if there is already an operator inside display AND there is no stored result
    if (operators.some(element => (display.textContent).includes(` ${element} `)) && (!storeResult || storeResult !== '0') && !input) {
        display.textContent = display.textContent.replace(/(\s\*\s)|(\s\+\s)|((\s\-\s))|((\s\/\s))/g, ` ${e.target.textContent} `);
        operator = e.target.textContent;
        return;
    }

    // if there is no numbers dont put the operation (also check if u want to input negative number)
    if ((!num && !storeResult) && (!input || input == '-')) {
        if (e.target.textContent == '-' &&  display.textContent !== '-') {
            input += '-';
            display.textContent = '-';
            return;
        }
        return;
    }
    // else when only 1 number,
    // when operator inputted, save the number input.
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
    // if not all inputs(operator, number) are in then GET OUT!
    if ((!operator || operator == '') || !input) {
        return;
    }
    // if no previous result, use two input
    if (!storeResult && storeResult !== 0) {
        result = (operate(`${operator}`, parseInt(num), parseInt(input)));
        if (result == "You cant divide by 0! FOOL") {
            return;
        }
        display.textContent = roundNum(result);
        //update storedresult
        storeResult = roundNum(result);
        input = '';
    // if already have result, use it
    } else {
        result = (operate(`${operator}`, parseInt(storeResult), parseInt(input)));
        display.textContent = roundNum(result);
        //update storedresult
        storeResult = roundNum(result);
        input = '';
    }
};

// clear button event listener
clear.addEventListener('click', function() {
    clearCalc();
});

function clearCalc() {
    display.textContent = '';
    input = '';
    num = '';
    storeResult = '';
    result = '';
    roundedResult = '';
    operator = '';
};

//add the numbers onto the display
function appendToDisplay(number) {
    display.textContent+=number;
};

function roundNum(result) {
    roundedResult = Math.round(result * 1000) / 1000; 
    return roundedResult;
}

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
    if (num2 == 0) {
        alert("You cant divide by 0! FOOL");
        clearCalc();
        return "You cant divide by 0! FOOL";
    }
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