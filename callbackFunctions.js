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

/*------------ How to write callback functions----------- */

//Create a function that accepts another function as an argument
const callbackAcceptingFunction =(fn) => {
    //Calls the function with any required arguments
    return fn(1, 2, 3)
}
//Callback gets arguments from the above call
const callback = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3
}

//Passing a callback into a callback accepting function
const result = callbackAcceptingFunction(callback)
console.log(result) //6



/* Synchronous Function Callback */

/* If your code executes in a top to bottom,
 left to right fashion, sequentially, waiting 
 until one code has finished before the next line begins,
your code is synchronous. Array.filter example above */

/* Asynchronous here means that, if Javascript needs to wait
for something to complete, it will execute the rest of the
tasks given to it while waiting. An example of an asynchronous
function is setTimeout.*/

setTimeout(callback, 1000)

/* Let's see how setTimout works if you give Js anpther task to complete */

const tenSecondsLater = _ => console.log('10 seconds passed!')
setTimeout(tenSecondsLater, 10000)
console.log('Start!')

const orderPizza = flavour => {
    callPizzaShop('I want s ${flavour} pizza')
    waits20minsForPizzaToCome()
    bringPizzaToYou()
}

orderPizza('Hawaiian')

//These operations only starts after orderPizza is completed
mopfloor()
ironClothes()

//Callbacks in event listeners
document.addEventListener( button, highlightTheButton)
document.removeEventListener(button, highlightTheButton)

//Callbacks in jQuery`s ajax method
$.ajax('some-url', {
    success (data) { // success callback },
        error (err) { // error callback}
    }
})