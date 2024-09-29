const defaultContainer = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('squares');
    square.style.color = 'red';
    defaultContainer.appendChild(square);

    square.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
   }) 
}

container.addEventListener('click', function(e) {
   if (e.target.style.backgroundColor === 'gray') {
    e.target.style.backgroundColor = 'white';
 }})


 // new container created depending on user input
 
const button = document.createElement('button');
button.innerText = 'Change number of Squares'
document.body.insertBefore(button, document.body.firstChild);

const newContainer = document.querySelector('#newContainer')


button.addEventListener('click', function(e) {

   defaultContainer.remove();

   userInput = prompt('enter dimensions for new grid');
   newNumber = parseInt(userInput)**2;   

   for (let i = 0; i < newNumber; i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('newSquares');
      newSquare.style.color = 'red';
      newContainer.appendChild(newSquare);

      newSquare.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
      }) 
  } 
}) 














/* function newGrid(gridNumber) {

   userInput = prompt('enter any number below 100')
   gridNumber = parseInt(userInput)

   if (gridNumber <= 100) {
      for (let i = 0; i < gridNumber; i++) {
         const square = document.createElement('div');
         square.classList.add('squares');
         square.style.color = 'red';
         defaultContainer.appendChild(square); 
     }
   }
}*/ 







 


