const defaultContainer = document.querySelector('#container');
const buttonContainer = document.querySelector('#buttonContainer')

// create a button that changes the color of the squares to a random RGB color


const changeColor = document.createElement('button');
changeColor.innerText = 'RGB';
buttonContainer.appendChild(changeColor);


// create a button that reverts all squares back to blank
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset Grid';
buttonContainer.appendChild(resetButton);

// create button that toggles 



for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('squares');
    square.style.width = 100/16 + '%';
    square.style.height = 100/16 + '%';
    defaultContainer.appendChild(square);

    square.addEventListener('mouseenter', increaseOpacity(square)); 
}

 // new grid created depending on user input
 let userInput;
 
const button = document.createElement('button');
button.innerText = 'New Grid';
buttonContainer.appendChild(button);


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

      square.addEventListener('mouseenter', increaseOpacity(square))  
   }
}

// function to get random RGB color
const getRandomRGB = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

// function to increase the opacity every time the mouse enter event occurs on a square


function increaseOpacity(square) {
   let rgbMode = false;
   let currentOpacity = 0.1;
   square.hasColor = false;
  
   if (!rgbMode) {

      return function(e) {
         currentOpacity += 0.1;
               if (currentOpacity > 1) {
                  currentOpacity = 1;
               }
               if (!square.hasColor) {
                  square.style.backgroundColor = getRandomRGB();
                  square.hasColor = true;
               }
               square.style.opacity = currentOpacity;
      };
   } else {

      return function(e) {
         currentOpacity += 0.1;
               if (currentOpacity > 1) {
                  cuurrentOpacity = 1;
               
               }

               if (!square.hasColor) {
                  square.style.backgroundColor = 'black';
               }
               
               square.style.opacity = currentOpacity;
      };
      
   }
}


// function to reset the grid to all white spaces
function resetGrid() {
   const squares = document.querySelectorAll('.squares');
   
   squares.forEach(square => {
      square.style.backgroundColor = 'white';
      if (square.style.opacity > 0.1) {
         square.style.opacity = 0.1;
      }
      square.hasColor = false;

   })
}



button.addEventListener('click', newGrid);
resetButton.addEventListener('click', resetGrid);





const rgbTest = document.querySelector('#practice');
rgbTest.style.backgroundColor = 'white';

rgbTest.addEventListener('mouseenter', increaseOpacity(rgbTest))


// consider toggling rgb with statement variable rgbMode = false; clicking button sets it to true and then each square gets a random color 