document.querySelector('.card-number').oninput = () => {
    document.querySelector('.card-number-box').innerText 
    = document.querySelector('.card-number').value;
}

document.querySelector('.card-holder').oninput = () => {
    document.querySelector('.card-holder-name').innerText 
    = document.querySelector('.card-holder').value;
}

document.querySelector('.input-cvc').oninput= () => {
    document.querySelector('.cvc').innerText
    =document.querySelector('.input-cvc').value
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText
    =document.querySelector('.month-input').value
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText
    =document.querySelector('.year-input').value
}