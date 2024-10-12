const defaultContainer = document.querySelector('#container');
const buttonContainer = document.querySelector('#buttonContainer')

// create a button that changes the color of the squares to a random RGB color
const changeToRGB = document.createElement('button');
changeToRGB.innerText = 'RGB';
changeToRGB.classList.add('rgbButton')
buttonContainer.appendChild(changeToRGB);

// create button that changes color to black, turns of rgbMode
const toBlack = document.createElement('button');
toBlack.innerText = 'Black Squares';
toBlack.classList.add('toBlack');
buttonContainer.appendChild(toBlack);

// create a button that reverts all squares back to blank
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset Grid';
resetButton.classList.add('reset')
buttonContainer.appendChild(resetButton);

 // create a button that prompts user input and creates a new grid
 const newGridButton = document.createElement('button');
 newGridButton.innerText = 'New Grid';
 newGridButton.classList.add('newGrid');
 buttonContainer.appendChild(newGridButton);


// default grid 
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('squares');
    square.style.width = 100/16 + '%';
    square.style.height = 100/16 + '%';
    defaultContainer.appendChild(square);
    square.style.opacity = 0.1;
    square.hasColor = false;

    square.addEventListener('mouseenter', () => increaseOpacity(square));  
}



// function that returns an alert if the user input is greater than 100 or includes special characters
function invalidInput() {

   const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   const alphabet = /[a-zA-Z]/;

   while (true) {
      userInput = prompt('Enter a number between 1 and 100 to create a new grid');
      if (userInput > 100) {
      alert('Invalid Input: Please enter a number under 100')
      continue;
   } else if (regex.test(userInput)) {
      alert('Invalid Input: Please enter a number with no special characters')
      continue;
   } else if (userInput === '') {
      alert('Invalid Input: Please enter a number between 1 and 100')
   } else if (userInput === null) {
      break;
   } else if (alphabet.test(userInput)) {
      alert('Invalid Input: Alphabetical letters not allowed');
      continue;
   } else if (userInput < 1) {
      alert('Invalid Input: Please enter a number greater than 1 and less than 100')
   }
   else break;
   }
}

// function to take users input and create new grid and lets user know if their input is invalid
let userInput;
function newGrid(){

   invalidInput();
   let newNumber = (100 / userInput);  
   
   if (!isNaN(userInput) && userInput > 0) {
      defaultContainer.innerHTML = '';
   }
   
   for (let i = 0; i < (userInput*userInput); i++) {
      const square = document.createElement('div');
      square.classList.add('squares');
      square.style.width = newNumber + '%';
      square.style.height = newNumber + '%';
      defaultContainer.append(square);
      square.style.opacity = 0.1;
      square.hasColor = false;

      square.addEventListener('mouseenter', () => increaseOpacity(square));  
   }
}

// function to get random RGB color
const getRandomRGB = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

// function to increase the opacity every time the mouse enter event occurs on a square
let rgbMode = false;

function increaseOpacity(square) {
  let currentOpacity = parseFloat(square.style.opacity) || 0.1;

   if (rgbMode) {

         currentOpacity += 0.1;
               if (currentOpacity > 1) {
                  currentOpacity = 1;
               }
               square.style.opacity = currentOpacity;
               if (!square.hasColor) {
                  square.style.backgroundColor = getRandomRGB();
                  square.hasColor = true;
               }
               
   } else {
         currentOpacity += 0.1;
               if (currentOpacity > 1) {
                  currentOpacity = 1;
               
               }

               if (!square.hasColor) {
                  square.style.backgroundColor = 'black';
               }
               
               square.style.opacity = currentOpacity;
      
   }
}


// function to reset the grid to all white spaces
function resetGrid() {
   const squares = document.querySelectorAll('.squares');
   
   squares.forEach(square => {
      square.style.backgroundColor = 'white';
      square.style.opacity = 0.1;
      square.hasColor = false;

   })
}

// event listener on RGB button to toggle rgbMode on
changeToRGB.addEventListener('click', function() {
   const squares = document.querySelectorAll('.squares');
   rgbMode = true;

   squares.forEach(square => {
      square.style.backgroundColor = 'white';
      square.style.opacity = 0.1;
      square.hasColor = false;
   })
})

// event listener to Black square button to toggle RGB mode off
toBlack.addEventListener('click', function() {
   const squares = document.querySelectorAll('.squares');
   rgbMode = false;

   squares.forEach(square => {
      square.style.backgroundColor = 'white';
      square.style.opacity = 0.1;
      square.hasColor = false;
   })

});

//event listener on button to create a new grid
newGridButton.addEventListener('click', newGrid);

// event listener on button to reset the grid
resetButton.addEventListener('click', resetGrid);


