// document.querySelector("p").innerHTML = "Kylie learned how to use query selector today"
// document.querySelector("#p2").innerHTML = "Kylie learned how to use query selector today"
// function declaration
function myfirstfunction() {
    document.querySelector("#p2").innerHTML = "Kylie learned how to use query selector today"}
    // calling the function

// myfirstfunction()

// add mouse click listener function
document.querySelector("p").addEventListener("click", myfirstfunction)
   
//  division 

function mysecondfunction() {
    document.querySelector("#WHOOO").innerHTML = "these are words that I have spoken internally"}

document.querySelector("p").addEventListener("click", mysecondfunction)


// number
console.log(1)

// variable
let Kylie = 27889986

// string (quotations)
console.log ("Kylie")

let Mcneil = "AHHHHHHHH"

console.log (Kylie + Mcneil)

// set interval

<p id="demo"></p>

const element = document.getElementById("demo");
setInterval(function() {element.innerHTML += "Hello"}, 1000);



