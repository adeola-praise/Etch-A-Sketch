// Get the grid container
let gridContainer = document.querySelector('.grid-container');

function createElement(){
}

for(let i=0; i <256; i++){
    // Create the square grids
    let squareDiv = document.createElement('div');

    // Give the div a class
    squareDiv.className = 'square';

    // Append the square div to the grid container
    gridContainer.appendChild(squareDiv);
}

let squares = document.getElementsByClassName('square');

// Create an array from the squares
let squaresArray = Array.from(squares);

// Loop through the square array 
squaresArray.forEach(function(item){
    // Change background color on mouse down
    item.onmousedown = function(){
        item.style.backgroundColor = 'red';
    }
})

