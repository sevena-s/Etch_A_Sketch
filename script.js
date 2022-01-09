const slider = document.querySelector('#slider');
const sliderVal = document.querySelector('.val');
const grid = document.querySelector('#container');
const clear = document.querySelector('.clear');

sliderVal.textContent = slider.value;
let squares = 40;

function makeGrid(boxes){

    for(let i = 1; i < (boxes + 1); i++){
        for(let j = 1; j < (boxes + 1); j++){
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.cssText = `grid-row-start: ${i}; grid-column-end: ${j}; grid-template-columns: repeat(${i}, 80px); grid-template-rows: repeat(${i}, 80px);`;
            item.setAttribute('id', 'item');  
            grid.appendChild(item);
        }
    }
};

function addBoxes(boxes, items){
    for(let i = 1; i < (boxes + 1); i++){
        for(let j = 1; j < (boxes + 1); j++){
            grid.appendChild(items[i]);
        }
    }
}

makeGrid(squares);
let divs = document.querySelectorAll('#item');

function clearBoxes(){
    divs.forEach(function(item){
        item.classList.remove('pressed');
    });
};

clear.addEventListener('click', clearBoxes);

slider.oninput = function() {
    sliderVal.textContent = slider.value;
    squares = slider.value;
    divs.forEach(function(item){
        item.classList.remove('pressed');
        grid.removeChild(item);
    });
    console.log(squares);
    addBoxes(squares, divs);
};

divs.forEach(box => {
    box.addEventListener('mouseenter', () => {
        console.log(box.id);
        box.classList.add('pressed');
    });
})
