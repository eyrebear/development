const travelForm = document.travel;
//const submitButton = document.getElementById("submit-button")
//const firstName = travelForm.firstName.value;

const travelTicket = () => {
    const firstName = travelForm.firstName.value;
    travelForm.firstName.value = "";
    const lastName = travelForm.lastName.value;
    travelForm.lastName.value = "";
    const age = travelForm["age"].value;
    travelForm.age.value = "";
    const gender = travelForm.gender.value;
    travelForm.gender.value = ""
    let drinkChoice = [];
    for(let i = 0; i < travelForm["drink-selection"].length; i++){
        if(travelForm["drink-selection"][i].checked){
            drinkChoice.push(" " + travelForm["drink-selection"][i].value);
            //drinkChoice.join(" ");
            //drinkChoice.push(" ")
        }
    }   

    let snackChoice = [];
    for(let i = 0; i < travelForm.snackSelection.length; i++){
        if(travelForm.snackSelection[i].checked) {
            snackChoice.push(" " + travelForm.snackSelection[i].value);
        }
    }
    const travelDestination = travelForm.destination.value;
    
    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nSnack Selection:${snackChoice} \nBeverage Selection:${drinkChoice} \nTravel Destination: ${travelDestination}`);
   
}

travelForm.addEventListener("submit", function(e) {
    e.preventDefault();
    travelTicket(); 
})


