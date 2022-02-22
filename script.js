const container = document.querySelector('.flex-grid');


function createDivs() {
    const sizeChoice = document.querySelector('input[name="size"]:checked').value
    if (sizeChoice === '16' || sizeChoice === '32' || sizeChoice === '64') {
        for (let i = 1; i <= sizeChoice * sizeChoice; i++) {
            container.appendChild(createDiv())
        }
    } else alert('Wrong number');
}

function removeDivs() {
    const divsToRemove = document.getElementsByClassName('newDiv');
    while (divsToRemove[0]) {
        divsToRemove[0].parentNode.removeChild(divsToRemove[0]);
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
    div.style.backgroundColor = 'pink';
    div.style.boxSizing = 'border-box';
    div.style.border = '1px solid white';
    return div;
}

const radio16 = document.getElementById('16')
radio16.addEventListener('click', () => {
        removeDivs();
        createDivs();
    }
)
const radio32 = document.getElementById('32')
radio32.addEventListener('click', () => {
        removeDivs();
        createDivs();
    }
)
const radio64 = document.getElementById('64')
radio64.addEventListener('click', () => {
        removeDivs();
        createDivs();
    }
)

createDivs()