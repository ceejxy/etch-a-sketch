const defaultContainer = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('squares');
    square.style.width = 100/16 + '%';
    square.style.height = 100/16 + '%';
    defaultContainer.appendChild(square);

    square.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
   }) 
}

container.addEventListener('click', function(e) {
   if (e.target.style.backgroundColor === 'gray') {
    e.target.style.backgroundColor = 'white';
 }})

 let userInput;

 // new container created depending on user input
 
const button = document.createElement('button');
button.innerText = 'New Grid';
document.body.insertBefore(button, document.body.firstChild);


// function that returns an alert if the user input is greater than 100 or includes special characters

function invalidInput() {

   const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

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
   } else break;
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
      const newSquare = document.createElement('div');
      newSquare.classList.add('newSquares');
      newSquare.style.width = newNumber + '%';
      newSquare.style.height = newNumber + '%';
      defaultContainer.append(newSquare);

      newSquare.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
      })  
   }
}

button.addEventListener('click', newGrid);



















/* button.addEventListener('click', function(e) {

   defaultContainer.innerHTML = '';

   let userInput = prompt('enter dimensions for new grid');
   let newNumber = (100 / userInput);   

   if (userInput > 100) {
      alert('Please click the button again and enter a number under 100')  
   } else if (userInput != parseInt(userInput)) {
      alert('Please click the button again and enter a number with no special characters')
   }


   for (let i = 0; i < (userInput*userInput); i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('newSquares');
      newSquare.style.width = newNumber + '%';
      newSquare.style.height = newNumber + '%';
      defaultContainer.append(newSquare);
      

      newSquare.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
      }) 
  } 
}) 

const clearButton = document.createElement('button');
document.body.insertBefore(clearButton, document.body.firstChild);

function clearBoard() {
 
   clearButton.innerText = 'Reset board';


   if (newSquare.style.backgroundColor === 'gray' || square.style.backgroundColor === 'gray') {
      newSquare.style.backgroundColor = 'white';
      square.style.backgroundColor = 'white';
   }
}

clearButton.addEventListener('click', clearBoard) */




 


