var form = document.getElementById("airline-form"); //var form = ducument["airline-form"]
var submit = document.getElementById("submit");
//var query = document.querySelector;

//This isn't called anywhere, is it?
function formAlert() {
    //e.preventDefault();
    let firstName = form.firstName.value;
        form.elements["firstName"].value = "";
    let lastName = form.elements["last-name"].value;
        form.elements["last-name"].value = "";
    let age = form.age.value;
        form.age.value = "";
    const gender = form.elements["gender"].value;
    let location = form.elements["travelLocation"].value;
    let diet = [];
    if (form.vegan.checked) {
        diet.push(form.vegan.value);
    } if (form.gluten.checked) {
        diet.push(document.getElementById("gluten").value);
    } if (form.paleo.checked) {
        diet.push(document.getElementById("paleo").value);
    }

    alert(`First Name: ${firstName} Last Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nTravel Location: ${location} \nDiet:  ${diet} \nAwesome, now if you die, it won't be an accident..`);
 } 



// document.getElementById("submit").
 form.addEventListener("submit", function(e){
     e.preventDefault();
           formAlert();
 
 })
//form.addEventListener("submit", formAlert);
    

