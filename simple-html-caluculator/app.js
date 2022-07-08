const addForm = document["addition-form"];
const multiplyForm = document["multiplication-form"];
//const subButton = document.getElementById("subButton")
//const submit = document.getElementById("submit")
const subForm = document["subtraction-form"];


const addFunction = (num1, num2) => {
    //e.preventDefault();
   //num1 = addForm.firstNumAdd.value;
   //num2 = addForm.secondNumAdd.value;
    let addNums = Number(num1) + Number(num2);
    let h1 = document.getElementById("add-solution");
    let div = document.getElementById("addition");
    //div.textContent = (`test`) This gets rid of the form and I don't want that
   //alert test: 
   //alert(`${num1} + ${num2} = ${addNums}`);
    div.style.marginTop = "30px";
    div.style.marginBottom = "0px";
    h1.style.margin = "10px";
    h1.textContent = (`${num1} + ${num2} = ${addNums}`);
}

const subFunction = (num1, num2) => {
    let subNums = Number(num1) - Number(num2);
    let h1 = document.getElementById("sub-solution");
    let div = document.getElementById("subtraction");
    //alert test:
    //alert(`${num1} - ${num2} = ${subNums}`);
    div.style.marginBottom = "0px";
    h1.style.margin = "10px";
    h1.textContent = (`${num1} - ${num2} = ${subNums}`);
}

const multiFunction = (num1, num2) => {
    let multiNums = Number(num1) * Number(num2);
    let h1 = document.getElementById("multi-solution");
    let div = document.getElementById("multiplication");
    div.style.marginBottom = "0px";
    h1.style.marginTop = "10px";
    h1.style.marginBottom = "50px"
    h1.textContent = (`${num1} x ${num2} = ${multiNums}`);
}


// const addNums = 
addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const num1 = addForm["firstNumAdd"].value;
    const num2 = addForm["secondNumAdd"].value;
    addFunction(num1, num2)
})


//addForm.addEventListener("submit", addFunction) 
   
   // let num1 = addForm.firstNumAdd.value;
   // let num2 = addForm.secondNumAdd.value;
    // function add(num1, num2) { 
   // let addNums = Number(num1) + Number(num2)
   // let addNums = num1 + num2;
   // const h1 = document.getElementById("add-solution");
   // h1.textContent = addNums;
   //addFunction(num1, num2);
   
subForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const num1 = subForm["firstNumSubtract"].value;
    const num2 = subForm["secondNumSubtract"].value;
    subFunction(num1, num2);
})

multiplyForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // const num1 = multiplyForm["firstNumMultiply"].value;
    //const num2 = multiplyForm["secondNumMultiply"].value;
    multiFunction(multiplyForm["firstNumMultiply"].value, multiplyForm["secondNumMultiply"].value);
})
