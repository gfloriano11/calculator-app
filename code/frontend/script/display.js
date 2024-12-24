import 'script/calculator.js';

// const display = document.querySelector('#display');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.use_number');


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
            result.appendChild(input);
            result.append(sign);
        } else {
            window.alert('Número máximo atingido!');
        }

    });
});