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
            item.style.cssText = `grid-row-start: ${i}; grid-column-end: ${j};`;
            item.setAttribute('id', 'item');  
            grid.appendChild(item);
        }
    }
};

makeGrid(squares);
let divs = document.querySelectorAll('#item');
slider.oninput = function() {
    sliderVal.textContent = slider.value;
    squares = slider.value;
    //makeGrid(squares);
};


function clearBoxes(){
    divs.forEach(function(item){
        item.classList.remove('pressed');
    });
};

clear.addEventListener('click', clearBoxes);

divs.forEach(box => {
    box.addEventListener('mouseenter', () => {
        console.log(box.id);
        box.classList.add('pressed');
    });
})
