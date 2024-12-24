import { sign } from '../script/calculator.js';
// const display = document.querySelector('#display');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.number');


let clicked = 0;

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        clicked++

        console.log('clique nº: ', clicked);

        let num = number.dataset.value;

        if(clicked <= 10){
            const input = document.createElement('p');
            input.classList.add('input_number');
            input.innerText = num;
            const opTeste = document.createElement('p');
            opTeste.innerText = sign;
            result.appendChild(input);
            console.log(opTeste);
            result.appendChild(opTeste);
        } else {
            window.alert('Número máximo atingido!');
        }

    });
});