// Get the grid container
let gridContainer = document.querySelector('.grid-container');

// Get the grid select tag
let gridSelect = document.getElementById('grid-size');

// Set the range slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Build grid immediately on app load
buildGrid(900);

// Store the grid area in a variable
let area;

slider.oninput = function() {
    let sides = this.value;
    // Update the current slider value (each time you drag the slider handle)
    output.innerHTML = sides;
    // calculate the grid area
    area = (sides) ** 2;
    buildGrid(area);
}

// Build the grid
function buildGrid(area) {
    // Empty the grid container
    gridContainer.innerHTML = ' ';

    for(let i=0; i <area; i++){
        // Create the square grids
        let squareDiv = document.createElement('div');
    
        // Give the div a class
        squareDiv.className = 'square';

        // Append the square div to the grid container
        gridContainer.appendChild(squareDiv);

        let divWidth = 500/Math.sqrt(area);
        squareDiv.style.width = `${divWidth}px`;

        let divHeight = 415/Math.sqrt(area);
        squareDiv.style.height = `${divHeight}px`;

    }
    changeColor();
}

function changeColor() {
    let squares = document.getElementsByClassName('square');

    // Create an array from the squares
    let squaresArray = Array.from(squares);

    // Loop through the square array 
    squaresArray.forEach(function (item){
        // Change background color on mouse down
        item.onmouseover = function(){
            item.style.backgroundColor = 'red';
        }
    });
}

function resizeGrid(item) {
     // Give the divs their width
     item.style.width = 384/Math.sqrt(area);

     // Give the divs their height
     item.style.height = 468/Math.sqrt(area);
}

