const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.innerText = i
    square.classList.add('squares');
    square.style.color = 'red';
    container.appendChild(square);
}


container.addEventListener('mouseover', function(e) {
   e.target.style.backgroundColor = 'gray';
})

container.addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'white';
 })

 const button = document.createElement('button');
 button.innerText = 'Reset Tiles'
 document.body.appendChild(button)

 button.addEventListener('click', function(e) {
    container.style.backgroundColor = 'white';
 })

 


 


