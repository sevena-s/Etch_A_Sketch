function makeGrid(){
    const grid = document.querySelector('#container');

    const item = document.createElement('div');
    item.classList.add('item');
    item.style.cssText = `grid-column-start: ${1}; grid-column-end: ${2};`;
    item.textContent = '1';

    grid.appendChild(item);
}

makeGrid();