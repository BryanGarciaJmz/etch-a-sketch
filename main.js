const container = document.querySelector('.container');

function addRows() {
    for (let i = 0; i <= 15; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for (let i = 0; i <= 15; i++) {
            const grid = document.createElement('div');
            grid.classList.add('box');
            row.appendChild(grid);
        }
    }
}

addRows();

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = 'black';
    })
})

const buttonClear = document.querySelector('.clear');

function clear() {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'beige';
    })
}

buttonClear.addEventListener("click", () => {
    clear();
});