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
        case operator == '%':
            return num1 % num2;
            break;
        case operator == '/':
                if(num2 == 0){
                    return 'Error';
                }
                else{
                    return num1 / num2;
                }
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

function getSecondOperand(btnNumber){
    secondOperand += btnNumber.innerText;
    console.log(secondOperand);
}

function getOperator(btn){
    operator = btn.innerText;
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

function decimal(btn){
    if(secondOperand != '' && secondOperand.indexOf('.') == -1){
        getSecondOperand(btn);
        updateDisplay(secondOperand);
    }
    else if(firstOperand != '' && firstOperand.indexOf('.') == -1){
        getFirstOperand(btn);
        updateDisplay(firstOperand);
    }
}

function result(){
    if(secondOperand != ''){
        resultOperate = operate(Number(firstOperand), Number(secondOperand),operator);
        updateDisplay(Math.round((resultOperate + Number.EPSILON) * 100) / 100
        );
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
                getSecondOperand(btn);
                updateDisplay(secondOperand);
                break;
            }
        case btn.className == 'operator':
            if(secondOperand != ''){
                result()
                getOperator(btn)
            }
            else if(firstOperand != ''){
                getOperator(btn)
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
        case btn.id == 'decimalBtn':
            decimal(btn);
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
//         getSecondOperand(btn);
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
