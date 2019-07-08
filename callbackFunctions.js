/*
A callback is a function that is
passed into another function as an argument
to be executed later. */

const button = document.querySelector('button')

    button.addEventListener('click', function(e) {
          // Adds clicked class to button
        this.classList.add('click')
    })



const button = document.querySelector('button')
// Function that adds 'clicked' class to the element
function clickked(e) {
    this.classList.add('clicked')
}
// Adds click function as a callback to the event listener
button.addEventListener('click', clicked)

/* clicked is the callback while 
addEventListener is a function that 
accepts a callback. */

const numbers = [3,4,10,20]
const lesserThanFive = numbers.filter(num => num < 5)

//Different way - named functions

const getLesserThanFive = (num => num < 5)
const lesserThanFive = numbers.filter(getLesserThanFive)
/* In this case, getLesserThanFive is callback function.
Array.filter is a function accepts a callback function. */