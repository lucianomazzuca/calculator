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

    const btnNumber = document.querySelectorAll('.number');
    let operand;

    btnNumber.forEach(btn => {
        btn.addEventListener('click', function(e){
            console.log(btn.innerHTML);
        })
    })

