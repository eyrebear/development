var magicBox = document.getElementById("magic-box")
var header = document.getElementById("header")
header.style.fontSize = "50px"
header.style.textAlign = "center"
header.style.fontFamily = "brush script mt"


magicBox.style.alignSelf = "center"
magicBox.style.backgroundColor = "whitesmoke"
magicBox.style.border = "4px solid";
magicBox.style.width = "400px"
magicBox.style.height = "400px"
magicBox.style.borderRadius = "20px"
magicBox.style.textShadow = "5px 2px"
var textBox = document.getElementById("text-box")
textBox.style.backgroundColor = "whitesmoke"
textBox.style.border = "2px solid"
textBox.style.width = "200px"
textBox.style.height = "200px"
textBox.style.borderRadius = "10px"
textBox.style.margin = "10px"
console.log("hello")

function blueFunction(){
    var magicBox = document.getElementById("magic-box")
    magicBox.style.backgroundColor = "blue"
}
document.getElementById("magic-box").addEventListener("mouseover", blueFunction)

function redFunction(){
    var magicBox = document.getElementById("magic-box")
    magicBox.style.backgroundColor = "red"
}
document.getElementById("magic-box").addEventListener("mousedown", redFunction)


function yellowFunction(){
    var magicBox = document.getElementById("magic-box")
    magicBox.style.backgroundColor = "yellow"
}
document.getElementById("magic-box").addEventListener("click", yellowFunction)

function greenFunction(){
    var magicBox = document.getElementById("magic-box")
    magicBox.style.backgroundColor = "lime"
    // magicBox.animate.rright(transform = rotate(90))
}
document.getElementById("magic-box").addEventListener("dblclick", greenFunction)

function orangeFunction(){
    var magicBox = document.getElementById("magic-box")
    magicBox.style.backgroundColor = "orange"
}
addEventListener("wheel", orangeFunction)







window.addEventListener("keydown", function(e) {
    //e.preventDefault()
    if (e.keyCode === 66){
        magicBox.style.backgroundColor = "blue"
    }
     else if(e.keyCode === 82){
      magicBox.style.backgroundColor = "red"
    }
      else if(e.keyCode === 89){
        magicBox.style.backgroundColor = "yellow"
    }
    else if(e.keyCode=== 71){
        magicBox.style.backgroundColor = "lime"
    }
    else if(e.keyCode === 79){
        magicBox.style.backgroundColor = "orange"
    }
 })

//  function eventHandler(e) {
//     e.preventDefault() 
//     if (e.target.value == "b") {
//        magicBox.style.backgroundColor = "blue"
//      } else if (e.target.value == "r"){
//         magicBox.style.backgroundColor = "red"
//      } else if (e.target.value == "y"){
//         magicBox.style.backgroundColor = "yellow"
//      } else if (e.target.value == "o"){
//         magicBox.style.backgroundColor = "orange"
//      } else if (e.target.value == "g"){
//         magicBox.style.backgroundColor = "lime"
//      }
//    }
//    addEventListener("keydown", eventHandler)
   