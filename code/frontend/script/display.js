const display = document.querySelector('#display');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.use_number');

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        let num = number.dataset.value;

        const input = document.createElement('p');
        input.classList.add('input_number');
        input.innerText = num
        result.appendChild(input);

    });
});