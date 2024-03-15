const container = document.getElementById('container');
const size = document.getElementById('input').value;
const input = document.getElementById('input');
const divs = document.querySelectorAll('div');

const newSquare = (size) => {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let amount = size * size;
    for (i = 0; i < amount; i++) {
        const square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.classList.add('grid');
        container.appendChild(square)
    }
}

input.addEventListener('input', function () {
    const value = parseInt(input.value, 10);
    if (!isNaN(value)) {
        newSquare(value)
    }
})

const colorSquare = (e) => {
    const randomColorR = Math.floor(Math.random() * 256)
    const randomColorG = Math.floor(Math.random() * 256)
    const randomColorB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`
}
















