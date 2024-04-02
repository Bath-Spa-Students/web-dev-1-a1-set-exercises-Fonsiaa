window.onload = () => {
    const input = document.querySelectorAll("input");

    inputs.forEach(ipnut => {
        input.addEventListener('change, calculate')
    })
}

function calculate () {
    const Petrol = document.querySelector('#Petrol').value;
    const liters = document.querySelector('#liter').value;

    if(!Petrol || !liters) return;

    document.querySelector('#cost').innerText = Petrol * liter;
}