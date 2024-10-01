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


 // new container created depending on user input
 
const button = document.createElement('button');
button.innerText = 'Change number of Squares'
document.body.insertBefore(button, document.body.firstChild);

const newContainer = document.querySelector('#newContainer')


button.addEventListener('click', function(e) {

   defaultContainer.remove();

   let userInput = prompt('enter dimensions for new grid');
   let newNumber = (100 / userInput);   

   if (userInput > 100) {
      alert('Please select a number under 100')
      return;
   } else if (userInput != parseInt(userInput)) {
      alert('Please enter a number with no special characters')
   }

   for (let i = 0; i < (userInput*userInput); i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('newSquares');
      newSquare.style.width = newNumber + '%';
      newSquare.style.height = newNumber + '%';
      newContainer.appendChild(newSquare);

      newSquare.addEventListener('mouseover', function(e) {
         e.target.style.backgroundColor = 'gray';
      }) 
  } 
}) 

newContainer.addEventListener('click', function(e) {
   if (e.target.style.backgroundColor === 'gray') {
    e.target.style.backgroundColor = 'white';
 }})








 


