const defaultContainer = document.querySelector('#container');

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
document.body.insertBefore(button, document.body.firstChild);


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

function increaseOpacity(square) {
   let currentOpacity = 0.1;

   return function(e) {
      currentOpacity += 0.08;
            if (currentOpacity > 1) {
               cuurrentOpacity = 1;
            
            }
            square.style.backgroundColor = 'black';
            square.style.opacity = currentOpacity;
            console.log('mouse enter');
   };
}

button.addEventListener('click', newGrid);


 


