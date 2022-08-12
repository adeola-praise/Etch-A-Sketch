// Get the grid container
let gridContainer = document.querySelector('.grid-container');

// Get the grid select tag
let gridSelect = document.getElementById('grid-size');

// Store the current chosen grid color
let currentColor;

// Get the box container
let box = document.querySelector('.box');

// Get the height and width of the box container
let boxWidth = box.clientWidth;
let boxHeight = box.clientHeight;

// Set the range slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Build grid immediately on app load
buildGrid(900);

// Color grid black on document load
colorGrid('DefaultColor');

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

        let divWidth = boxWidth/Math.sqrt(area);
        squareDiv.style.width = `${divWidth}px`;

        let divHeight = boxHeight/Math.sqrt(area);
        squareDiv.style.height = `${divHeight}px`;
        
        // Color the grid with the current chosen color
        colorGrid(currentColor);
    }
}

 // Get the random color generator button
 let randomBtn = document.getElementById('rainbowBtn');

 // Get the erase button
 let eraseBtn = document.getElementById('erase');

 // Get the color picker button
 let revealColor = document.querySelector('.pickColor');

 // Get all color changing buttons
 let colorBtns = [randomBtn, eraseBtn, revealColor];

 // Function to change color
 function changeColor(event){
  hiddenPicker.style.display = 'none';
  switch (event.target.value) {
    case 'Rainbow':
      colorGrid('Rainbow');
      break;
    case 'Eraser':
      colorGrid('Eraser');
      break;
    case 'ColorPicker':
      colorGrid('ColorPicker');
      break;
    default:
      colorGrid(event.target.value);
      break;
  }
}

// Loop through the color buttons
colorBtns.forEach(function (btn){
  // Assign the value of any button clicked to colorChoice
  btn.addEventListener('click', changeColor, true) 
})

// Store the number of passes
let passes = 0;

// Function to color grid
function colorGrid(colorChoice) {
  let squares = document.getElementsByClassName('square');

  // Create an array from the squares
  let squaresArray = Array.from(squares);

  // Assign the color choice as the current color
  currentColor = colorChoice;

  // Loop through the squares
  squaresArray.forEach(function(item){
    switch (colorChoice) {
      case 'Rainbow':
        randomColor(item);
        break;
      case 'Eraser':
        eraseColor(item);
        break;
      case 'ColorPicker':
        revealRGB(item);
        break;
      case 'DefaultColor':
        defaultColor(item);
        break;
      default:
        item.onmouseover = function(){
          item.style.backgroundColor = currentColor;
        }
        break;
    }
  })
}

// Random color function
function randomColor(item) {
  // i have gotten a way to store the number of passes but for now i am 
  item.onmouseover = function(){
    let x = Math.floor(Math.random() * 256);
    let y = 100+ Math.floor(Math.random() * 256);
    let z = 50+ Math.floor(Math.random() * 256);
    
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    item.style.backgroundColor = bgColor;
  }
}

// Eraser Function
function eraseColor(item) {
  item.onmouseover = function(){
    item.style.backgroundColor = 'white';
  }
}

// Default color
function defaultColor(item) {
  item.onmouseover = function(){
    item.style.backgroundColor = 'black';
    //let opacity = Number(item.style.opacity);
        //item.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
  }
}

// Get the color picker
let hiddenPicker = document.querySelector('.colorPicker');

// Get the okay button to confirm picked color
let okBtn = document.querySelector('#ok') 

// Reveal the RGB color picker
function revealRGB(item) {
    hiddenPicker.style.display = 'flex';
        item.onmouseover = function(){
          item.style.backgroundColor = setColor();
        }
        
    okBtn.onclick = function(){
        hiddenPicker.style.display = 'none';      
    }
}

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
        return (hex);
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

