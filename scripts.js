// Get the grid container
let gridContainer = document.querySelector('.grid-container');

for(let i=0; i <256; i++){
    // Create the square grids
    let squareDiv = document.createElement('div');

    // Give the div a class
    squareDiv.className = 'square';

    // Append the square div to the grid container
    gridContainer.appendChild(squareDiv);
    console.log('oya');
}