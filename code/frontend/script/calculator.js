const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.number');
let numberOne = document.querySelector('.number_one'); 

if(!numberOne){
    let clicked = 0;
    
    numbers.forEach((number) => {

        number.addEventListener('click', () => {
            
            clicked++
            
            console.log('clique nº: ', clicked);
            
            let num = number.dataset.value;
            
            if(clicked <= 10){
                
                const input = document.createElement('p');
                
                // const numberOne = document.createElement('div');
                // numberOne.classList.add('number_one');
                
                // const numberTwo = document.createElement('div');
                // numberTwo.classList.add('number_two');
                
                input.classList.add('input_number');
                input.innerText = num;
                
                // result.appendChild(numberOne);
                result.appendChild(input);
                
                // console.log(opTeste);
                // result.appendChild(opTeste);
            } else {
                window.alert('Número máximo atingido!');
            }
            
        });
    });
}

operators.forEach((operator) => {
    
    operator.addEventListener('click', () => {

        const sign = operator.dataset.value;

        // console.log(sign)

        if(sign === '='){
            result.innerHTML = '';
            clicked = 0;
            
        }

        const signContainer = document.createElement('div');
        signContainer.classList.add('math_sign');

        const opTeste = document.createElement('p');
        opTeste.innerText = sign;

        result.appendChild(signContainer);
        signContainer.appendChild(opTeste);

        let teste = document.querySelector('.math_sign');

        if(teste){
        } else {
            console.log('não existe sinal')
        }

    });
});