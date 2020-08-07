function operate(num1, num2, operator){
    switch(true){
        case operator == '+':
            return num1 + num2;
            break;
        case operator == '-':
            return num1 - num2;
            break;
        case operator == '*':
            return num1 * num2;;
            break;
        case operator == '/':
            return num1 / num2;
            break;
        default: 
            return 'Invalid operator'
    }
}

//Get input

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
let firstOperand = '';
let secondOperand = '';
let operator = '';
let resultOperate = '';


function getFirstOperand(btnNumber){
    firstOperand += btnNumber.innerText;
    console.log(firstOperand)
}

function getSecondOperator(btnNumber){
    secondOperand += btnNumber.innerText;
    display.innerText = secondOperand;
    console.log(secondOperand);
}

function getOperator(btn){
    operator = btn.innerText;
    display.innerText = operator;
    console.log(operator);
}

function updateDisplay(value){
    return display.innerText = value;
}

function clear(){
    firstOperand = '';
    secondOperand = '';
    operator = '';
    display.innerText = '';  
}

function deleteLastValue(){
    let displayUpdated = display.innerText.slice(0, -1);

    if(firstOperand != '' && secondOperand == ''){
        operator = displayUpdated;
        updateDisplay(displayUpdated);
    }
    else if(operator == ''){
        firstOperand = displayUpdated;
        updateDisplay(displayUpdated);
    }
    else if(operator != ''){
        secondOperand = displayUpdated
        updateDisplay(displayUpdated);
    }
}

function result(){
    if(secondOperand != ''){
        resultOperate = operate(Number(firstOperand), Number(secondOperand),operator);
        updateDisplay(resultOperate);
        firstOperand = resultOperate,
        secondOperand = '',
        operator = '';
    }
}

function action(event){
    const btn = event.target;
    switch(true){
        case btn.className == 'number':
            if(operator == ''){
                getFirstOperand(btn);
                updateDisplay(firstOperand);
                break;
            }
            else if(operator != ''){
                getSecondOperator(btn);
                updateDisplay(secondOperand);
                break;
            }
        case btn.className == 'operator':
            if(firstOperand != ''){
                getOperator(btn)
                updateDisplay(operator);
                break;
            }
        case btn.id == 'result':
            result();
            break;
        case btn.id == 'clear':
            clear();
            break;
        case btn.id == 'delete':
            deleteLastValue();
            break;
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', action)
})
    

// switch(true){
//     case operator == '' && btn.className == 'number':
//         getFirstOperand(btn);
//         updateDisplay(firstOperand);
//         break;
//     case operator == '' && btn.className == 'operator':
//         getOperator(btn)
//         updateDisplay(operator);
//         break;
//     case operator != '' && btn.className == 'number':
//         getSecondOperator(btn);
//         updateDisplay(secondOperand);
//         break;
//     case btn.id == 'result':
//         result();
//         break;
//     case btn.id == 'clear':
//         clear();
//         break;
//     case btn.id == 'delete':
//         deleteLastValue();
//         break;
