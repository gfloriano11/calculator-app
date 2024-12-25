const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {

    number.addEventListener('click', () => {
        
        let num = number.dataset.value;

        const input = document.createElement('p');
            
        input.classList.add('input_number');
        input.innerText = num;
        
        result.appendChild(input);
        
    });
});

operators.forEach((operator) => {
    
    operator.addEventListener('click', () => {

        const sign = operator.dataset.value;


        if(sign === '='){
            result.innerHTML = '';
        } else{

            const signContainer = document.createElement('div');
            signContainer.classList.add('math_sign');
    
            const opTeste = document.createElement('p');
            opTeste.innerText = sign;
    
            result.appendChild(signContainer);
            signContainer.appendChild(opTeste);
        }

        let teste = document.querySelector('.math_sign');

        if(!teste){
            console.log('não existe sinal')
        }

    });
});