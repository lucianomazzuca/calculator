//Operations
function sum(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(true){
        case operator == '+':
            return sum(num1, num2);
            break;
        case operator == '-':
            return substract(num1, num2);
            break;
        case operator == '*':
            return multiply(num1, num2);
            break;
        case operator == '/':
            return divide(num1, num2);
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


    buttons.forEach(btn => {
        btn.addEventListener('click', function(e){
            if(operator == '' && this.className == 'number'){
                firstOperand += this.innerHTML;
                display.innerText = firstOperand;
                console.log(firstOperand)
            }   
            else if(operator == '' && this.className == 'operator'){
                operator = this.innerHTML;
                console.log(operator);
            }
            else if(operator != '' && this.className == 'number'){
                secondOperand += this.innerHTML;
                display.innerText = secondOperand;
                console.log(secondOperand);
            }
            else if(this.id == 'result'){
                display.innerText = operate(Number(firstOperand), Number(secondOperand), operator)
            }
        })
    })
    

