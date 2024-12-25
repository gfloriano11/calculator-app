const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');

let currentInput = '';
let equal = false;

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        equal = true

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

            try{
                currentInput = eval(currentInput);
                result.textContent = (currentInput);
                console.log('original: ', currentInput);
                console.log('arredondado: ', Math.round(currentInput));

            } catch {
                alert('Erro na expressão!');
                currentInput = '';
                result.textContent = '';
                location.reload(true)
            }

        } else {

            console.log(sign)
            console.log(currentInput)

            currentInput = currentInput + sign;

            console.log(currentInput)

            result.textContent = currentInput;

        }

    });
});

clear.addEventListener('click', clearDisplay);

function clearDisplay(){

    result.textContent = '';
    currentInput = '';
}