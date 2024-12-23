const display = document.querySelector('#display');
const result = document.querySelector('#result');
const keys = document.querySelectorAll('#keys');
// const sign = document.querySelector

keys.forEach((key) => {

    console.log('dentro do for each');

    key.addEventListener('click', () => {

        // let sign = vai receber o 'data-set-value' do html 

        console.log('clicado!');

        console.log(key)

        if(key == '+'){
            console.log('somei!');
        }
    })
})
