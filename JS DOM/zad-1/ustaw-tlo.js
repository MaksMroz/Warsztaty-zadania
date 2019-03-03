let button = document.querySelector('.btn');
let pierwszy = document.querySelector('.first')
let drugi = document.querySelector('.second')

zmianaTla = () => {
    pierwszy.style.backgroundColor = 'red';
    drugi.style.backgroundColor = 'yellow';
}

button.onclick = zmianaTla;