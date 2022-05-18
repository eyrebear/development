var header = document.getElementById("header");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.flexDirection = "column";
//header.style.fontSize = "30px";
//header.style.fontWeight = "bold"
// var javaMade = document.getElementById("java-script");
// javaMade.textContent = "JavaScript Made This!!";
// javaMade.style.fontWeight = "bold";
// javaMade.style.fontSize = "27px";
// javaMade.style.fontFamily = "trebuchet MS"

/**
 alternative wayy\
 */

 var h2 = document.createElement("h2")
 h2.textContent ="Javascript made this!"
 header.appendChild(h2)

 
 // I cannot manipulate classNames, and I'm not sure what I'm doing wrong
 //var myName = document.getElementsByClassName("name");
 //myName.value = "Ford Eyre";
//  var myName = document.getElementById("name");
//  myName.textContent = "Ford Eyre";
 //I really need help learning how to use <span>
//  var wroteThis = document.getElementById("wrote-this");
//  wroteThis.textContent = " wrote the JavaScript";
 var nameSpan = document.createElement("span")
nameSpan.textContent = "Ford Eyre"
nameSpan.classList.add('name')
 var tagline = document.createElement("p")
//  tagline.innerHTML = "<span>" + myName.textContent + "</span> wrote this!"
tagline.append(nameSpan, " wrote this!") 
header.appendChild(tagline)
 
//Bronze level, hard code messages to be more interesting
var leftMessage = document.getElementsByClassName("message left")
// for(let i = 0; i < leftMessage.length; i++){
//     console.log(leftMessage[i].textContent)
// }
leftMessage[0].textContent = "I have some exciting news!!"
leftMessage[1].textContent = "I am completing level one in V School!"
var rightMessage = document.getElementsByClassName("message right")
// for(let i = 0; i < rightMessage.length; i++){
// }
rightMessage[0].textContent = "Oh My goodness, tell me what it is!!"
rightMessage[1].textContent = "I knew you could do it, you have been working hard!!"

//Bronze level, make 'clear' button clear out conversation when clicked
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(){
    var leftMessage = document.getElementsByClassName("message left")
    for(let i = 0; i < leftMessage.length; i++){
        leftMessage[i].textContent = ""
    }
    var rightMessage = document.getElementsByClassName("message right")
    for(let i = 0; i < rightMessage.length; i++){
        rightMessage[i].textContent = ""
    }    
})



//Silver level, write javasript to catch the themes dropdown options
var themeDrop = document.getElementById("theme-drop-down")
console.log(themeDrop)
var newOption = document.createElement("option")
newOption.value = "theme-three"
newOption.textContent = "green/yellow"
themeDrop.append(newOption)
//Silver level, write javascript to change themes with eventlistener
themeDrop.addEventListener("change", function(){
    if(themeDrop.options[themeDrop.selectedIndex].value === "theme-one"){
        for(let i = 0; i< rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "lightblue"
        }
        for(let i = 0; i < rightMessage.length; i++){
            leftMessage[i].style.backgroundColor = "burlywood"
            leftMessage[i].style.color = "black"
        }
    } else if(themeDrop.options[themeDrop.selectedIndex].value === "theme-two"){
        for(let i = 0; i< rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "red"
        }
        for(let i = 0; i < rightMessage.length; i++){
            leftMessage[i].style.backgroundColor = "black"
            leftMessage[i].style.color = "white"
        }
    } else if (themeDrop.options[themeDrop.selectedIndex].value === "theme-three"){
        for(let i = 0; i< rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "lime"
        }
        for(let i = 0; i < rightMessage.length; i++){
            leftMessage[i].style.backgroundColor = "yellow"
            leftMessage[i].style.color = "black"
        }
    }

})


themeDrop.append(newOption)
document['message'].addEventListener('submit', function(event) {
    event.preventDefault()

    let div = document.createElement('div')

    div.classList.add('message')
    div.classList.add('right')

    div.textContent = document.getElementById('input').value

    document.querySelector('.messages').appendChild(div)
})
// var messageParent = queryS
// document['message'].addEventListener("submit", function(event){
//     event.preventDefault()

// let newMessage = document.createElement("div")
// newMessage.textContent = "this is a test"
// //newMessage.textContent = document.getElementById("input").value
// document.messages.append(newMessage)

//})

// const parent = document.getElementsByClassName("messages")[0]
// parent.appendChild()


















//append leftMessaze.append(newLeftMessage)
//newLeftMessage = form


//  var messages = document.getElementsByClassName("messages")
// for(let i = 0; i < messages.length; i ++)
// var leftMessage = document.cla
//     for let x = 0; < 
// console.log(messages[i].textContent)
// console.log(messages[0].textContent)
// messageLeft = "I have some exciting news!"



// console.log(wroteThis)

// console.log(myName);


// console.log(header)
