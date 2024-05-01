const container = document.querySelector('.container');
const buttonSize = document.querySelector(".mainButton");
const buttonClear = document.querySelector('.clear');

if (container.hasChildNodes) {
    changeSize(16);        
}


buttonSize.addEventListener("click", () => {
    const numberBox = prompt("Insert the number of squares of the grid. MAX = 100; MIN = 16;")
    
    if (numberBox > 100) {
        alert("The maximum number of rows is 100");
        return
    } else if (numberBox < 16) {
        alert("The number must be greater than 16")
    } else {
        remove();
        changeSize(numberBox);
    }
});

function changeSize(numberBox) {

    if (!container.childNodes) {
        changeSize(16);        
    }

    for (let i = 0; i <= numberBox; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for (let i = 0; i <= numberBox; i++) {
            const grid = document.createElement('div');
            grid.classList.add('box');
            row.appendChild(grid);
        }
    }
    readyToPrint();
}

function remove() {
    container.innerHTML = '';
}


function readyToPrint() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'black';
        })
    })
}


function clear() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'beige';
    })
}

buttonClear.addEventListener("click", () => {
    clear();
});