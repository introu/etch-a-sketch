const container = document.querySelector('#flex-grid');
const createdDivs = document.getElementsByClassName('newDiv');
const clearBoardButton = document.getElementById('clearBoard')
const slider = document.getElementById('sliderBar');
clearBoardButton.addEventListener('click', cleanCreate)


let sizeChoice = document.getElementById('sliderBar').value
let update = () => sizeChoice = slider.value;
slider.addEventListener('input', () => {
    update()
    cleanCreate()
})

function createDivs() {
    for (let i = 1; i <= sizeChoice * sizeChoice; i++) {
        container.appendChild(createDiv())
    }
}

function removeDivs() {
    while (createdDivs[0]) {
        createdDivs[0].parentNode.removeChild(createdDivs[0]);
    }
}

function styleGrid() {
    container.style['grid-template-columns'] = `repeat(${sizeChoice}, ${Math.floor((960 / sizeChoice) * 100) / 100}px)`
}

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('newDiv');
    div.style.width = `${Math.floor((960 / sizeChoice) * 100) / 100}px`;
    div.style.height = `${Math.floor((960 / sizeChoice) * 100) / 100}px`;
    div.style.margin = '0';
    div.style.padding = '0';
    div.style.backgroundColor = 'white';
    div.style.boxSizing = 'border-box';
    div.style.border = '1px solid #f7f7f7';
    return div;
}

function cleanCreate() {
    removeDivs();
    styleGrid()
    createDivs();
    afterChange();
}


function changeColor(element) {
    if (rainbowCheck.checked) {
        element.style.backgroundColor = `#${randomizeColor()}`;
    } else element.style.backgroundColor = "black";

}

function afterChange() {
    const newDivs = document.querySelectorAll('.newDiv');
    newDivs.forEach(newDiv => newDiv.addEventListener('mouseenter', (event) => {
        if (isMousedown) {
            changeColor(event.target)
        } else {
        }
    }))
}

createDivs()
afterChange()

let isMousedown = false;

window.addEventListener("mousedown", function () {
    isMousedown = true;
});

document.addEventListener("mouseup", function () {
    isMousedown = false;
});

function randomizeColor() {
    const randomColor = Math.floor(Math.random() * 16777215)
    return randomColor.toString(16)
}

const rainbowCheck = document.getElementById('rainbowCheck')




