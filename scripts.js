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

    // Get the random color generator button
    let randomBtn = document.getElementById('randomBtn');

    // Loop through the square array 
    squaresArray.forEach(function (item){
        // Change background color on mouse down
        item.onmousedown = function(){
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            
            let bgColor = "rgb(" + x + "," + y + "," + z + ")";
            item.style.backgroundColor = bgColor;
        }
    });
}

// Get the color picker button
let revealColor = document.querySelector('.pickColor');

// Get the color picker
let hiddenPicker = document.querySelector('.colorPicker');

// Get the okay button to confirm picked color
let okBtn = document.querySelector('#ok') 

// Get the cancel button to ignore picked color
let cancelBtn = document.querySelector('#cancel');

function revealRGB() {
    hiddenPicker.style.display = 'flex';
    okBtn.onclick = function(){
        hiddenPicker.style.display = 'none';
    }
    cancelBtn.onclick = function(){
        hiddenPicker.style.display = 'none';
    }
}

revealColor.addEventListener('click', revealRGB);

// SET UP THE COLOR PICKER //
let r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex');
    hex_box = document.querySelector('#hex-color');

function setColor(){
    let r_hex = parseInt(r.value, 10).toString(16),
        g_hex = parseInt(g.value, 10).toString(16),
        b_hex = parseInt(b.value, 10).toString(16),
        hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
        hex_box.style.backgroundColor = hex; 
    hex_out.value = hex;
  }
  
  function pad(n){
    return (n.length<2) ? "0"+n : n;
  }
  
  r.addEventListener('change', function() {
    setColor();
    r_out.value = r.value;
  }, false);
  
  r.addEventListener('input', function() {
    setColor();
    r_out.value = r.value;
  }, false);
  
  g.addEventListener('change', function() {
    setColor();
    g_out.value = g.value;
  }, false);
  
  g.addEventListener('input', function() {
    setColor();
    g_out.value = g.value;
  }, false);
  
  b.addEventListener('change', function() {
    setColor();
    b_out.value = b.value;
  }, false);
  
  b.addEventListener('input', function() {
    setColor();
    b_out.value = b.value;
  }, false);

// Create a function that would generate random rgb colors
// so I need the entire rgb colors and randomly generate them

function random_bg_color() {
    
    
  
    //document.body.style.background = bgColor;
}

random_bg_color();

