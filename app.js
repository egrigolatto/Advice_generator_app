document.addEventListener('DOMContentLoaded', () => {

const advice = document.getElementById("advice");
const text = document.getElementById("text");
const btnConsejo = document.getElementById("btnConsejo");

obtenerFrase = ()=>{
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            advice.textContent = data.slip.id
            text.textContent = data.slip.advice;
        })
        .catch(error => {
            console.log('Ha ocurrido un error:', error);
        });
}
obtenerFrase()

btnConsejo.addEventListener('click', obtenerFrase);
});