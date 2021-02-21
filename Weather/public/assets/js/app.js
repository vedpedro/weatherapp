console.log('JavaScript do front carregou');

const form = document.querySelector('form');
const cityInput = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const successMessage = document.querySelector('.success');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = cityInput.value;
    
    errorMessage.textContent = "A carregar...";

    fetch('http://localhost:3000/weather?city=' + city).then((response) => {
        response.json().then((data) => {
            if(data.error){
                errorMessage.textContent = data.error;
            } else{
                errorMessage.textContent = '';
                successMessage.innerHTML = data.forecast;
            }
        })
    })
});