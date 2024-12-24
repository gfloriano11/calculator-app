// const result = document.querySelector('#result');
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    
    operator.addEventListener('click', () => {
        
        const sign = operator.dataset.value;
        
        if(sign === '+'){
            console.log('somei!');
        }
        
        if(sign === '-'){
            console.log('diminui!');
        }
        
        if(sign === '*'){
            console.log('multipliquei!');
        }
        
        if(sign === '/'){
            console.log('dividi!');
        }

        if(sign === '%'){
            console.log('porcentagem!');
        }
        
        if(sign === '='){
            console.log('resultado!');
        }
        
        export default sign;
        
    })
})

function sum(){
    
}