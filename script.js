function makeGrid(){
    const grid = document.querySelector('#container');

    for(let i = 1; i < 53; i++){
        for(let j = 1; j < 53; j++){
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.cssText = `grid-row-start: ${i}; grid-column-end: ${j};`;
            item.setAttribute('id', 'item');  
            grid.appendChild(item);
        }
    }

}

makeGrid();

const divs = document.querySelectorAll('#item');

divs.forEach(box => {
    box.addEventListener('mouseenter', () => {
        console.log(box.id);
        box.classList.add('pressed');
    });
})
