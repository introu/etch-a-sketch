const container = document.querySelector('.flex-grid');
const createdDivs = document.getElementsByClassName('newDiv');


function createDivs() {
    const sizeChoice = document.querySelector('input[name="size"]:checked').value
    if (sizeChoice === '16' || sizeChoice === '32' || sizeChoice === '64') {
        for (let i = 1; i <= sizeChoice * sizeChoice; i++) {
            container.appendChild(createDiv())
        }
    } else alert('Wrong number');
}

function removeDivs() {
    while (createdDivs[0]) {
        createdDivs[0].parentNode.removeChild(createdDivs[0]);
    }
}

function createDiv() {
    const sizeChoice = document.querySelector('input[name="size"]:checked').value
    const div = document.createElement('div');
    div.classList.add('newDiv');
    div.style.width = `${960 / sizeChoice}px`;
    div.style.height = `${960 / sizeChoice}px`;
    div.style.margin = '0';
    div.style.padding = '0';
    div.style.backgroundColor = '#f7f7f7';
    div.style.boxSizing = 'border-box';
    div.style.border = '1px solid white';
    return div;
}

function cleanCreate() {
    removeDivs();
    createDivs();
    afterChange();
}

const radio16 = document.getElementById('16')
radio16.addEventListener('click', cleanCreate)

const radio32 = document.getElementById('32')
radio32.addEventListener('click', cleanCreate)

const radio64 = document.getElementById('64')
radio64.addEventListener('click', cleanCreate)


function changeColor(event) {
    event.target.style.backgroundColor = 'black';
}

function afterChange() {
    const newDivs = document.querySelectorAll('.newDiv');
    newDivs.forEach(newDiv => newDiv.addEventListener('mouseenter', changeColor))
}

createDivs()
afterChange()