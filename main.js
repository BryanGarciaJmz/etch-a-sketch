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