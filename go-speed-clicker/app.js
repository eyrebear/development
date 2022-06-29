let display = document.getElementById("counter-display");
let counter = 0;
//testing with simple number before accessing display text layer
// localStorage.setItem("display", counter)
let storedDisplay = localStorage.getItem("display");
display.textContent = storedDisplay;
//realized I needed storage for the counter as well
let storedCounter = localStorage.getItem("counter");
//I have to re-initialize the counter.  It broke if it was in the function or event listener
counter = storedCounter;

let noNoButton = document.getElementById("no-no-button");

const buttonFunction = () => {
    counter ++;
    noNoButton.style.backgroundColor = "red";
    if (counter === 1){
        display.textContent = (`You clicked the button anyway ${counter} time`)
    }   else {
        display.textContent = (`You clicked the button anyway ${counter} times`)
    }
    //this didn't work here
    // display.textContent = storedDisplay;
   //this didn't work here
    //  localStorage.setItem("display", counter)
   
}


noNoButton.addEventListener("click", function(){
    buttonFunction();
    localStorage.setItem("display", display.textContent);
    localStorage.setItem("counter", counter);
   
})