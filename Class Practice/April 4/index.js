//variable
const button =  
//to access the relative class
document.querySelector(".event-button"); //the class - assigned button in html
// addEventListener is a js 
//once click - function () 
// alert is the ("pop up message")
button.addEventListener("click", function () {  
alert("Hey there!");
});

//example 2
//const input = document.querySelector(".input-to-copy");  
//const paragraph = document.querySelector(".p-to-copy-to");
//input.addEventListener("keyup", function () {  
    //paragraph.innerText = input.value;
//});


//example 3
//const is a keyboard
const input = document.querySelector(".color-input");  //to access the class on html
const paragraph = document.querySelector(".color-box");
//
input.addEventListener("change", function () {  
    paragraph.style.backgroundColor = input.value;
});