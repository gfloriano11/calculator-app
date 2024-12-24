// const result = document.querySelector('#result');
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    
    operator.addEventListener('click', () => {
        
        const sign = operator.dataset.value;
        
        if(sign === '+'){
            console.log('somei!');
            sum();
        }
        
        if(sign === '-'){
            console.log('diminui!');
            sub();
        }
        
        if(sign === '*'){
            console.log('multipliquei!');
            multiply();
        }
        
        if(sign === '/'){
            console.log('dividi!');
            divide();
        }
        
        if(sign === '%'){
            console.log('porcentagem!');
            percentage();
        }
        
        if(sign === '='){
            console.log('resultado!');
            
        }

        console.log(sign)
        
        return sign;
        
    })
})

export let sign;

let numberOne = 0;
let numberTwo = 0;

function sum(){
    const calcResult = numberOne + numberTwo;
    return calcResult;
}

function sub(){
    const calcResult = numberOne - numberTwo;
    return calcResult;
}

function multiply(){
    const calcResult = numberOne * numberTwo;
    return calcResult;
}

function divide(){
    const calcResult = numberOne / numberTwo;
    return calcResult;
}

function percentage(){
    const calcResult = (numberOne/100)*numberTwo;
    return calcResult;
}