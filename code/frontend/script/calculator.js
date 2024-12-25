const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.delete');

let currentInput = '';
let equal = false;

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        if(equal === true){
            result.textContent = '';
        }

        currentInput = currentInput + number.dataset.value;
            
        result.textContent = currentInput;

    });
});

operators.forEach((operator) => {
    
    operator.addEventListener('click', () => {

        const sign = operator.dataset.value;

        if(sign === '='){

            equal = true;

            result.textContent = '';

            if(currentInput.includes('%')){

                const verifiedInput = verifyPercentage(currentInput);

                currentInput = verifiedInput;

            }

            try{
                currentInput = eval(currentInput);
                result.textContent = (currentInput);

            } catch {
                alert('Erro na expressão!');
                currentInput = '';
                result.textContent = '';
                location.reload(true)
            }

        } else {

            currentInput = currentInput + sign;

            result.textContent = currentInput;

        }

    });
});

clear.addEventListener('click', clearDisplay);
backspace.addEventListener('click', deleteNumber);

function clearDisplay(){

    result.textContent = '';
    currentInput = '';

}

function deleteNumber() {
    currentInput = currentInput.toString();

    currentInput = currentInput.slice(0, -1);

    result.textContent = currentInput;
}

function verifyPercentage(input){

    return input.replace(/(\d+)%/g, '($1 / 100)*');
}