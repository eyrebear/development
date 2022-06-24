const form = document.marioForm;

const pestTotal = (num1, num2, num3) => {
    let totalNum1 = Number(num1) * 5
    let totalNum2 = Number(num2) * 7
    let totalNum3 = Number(num3) * 11
    let addNums = Number(totalNum1) + Number(totalNum2) + Number(totalNum3);
    // alert(`${num1} + ${num2} + ${num3} equals ${addNums}`)
    //alert(`total goombas is ${num1} and costs ${totalNum1}`);
  
    // const container = document.getElementById("container");
    // const totalBox = document.createElement("ul");
    const totalBox = document.getElementById("totalBox");
    totalGoombas = document.createElement("li");
    totalGoombas.textContent = `Total Cost of Goombas is ${totalNum1} Coins`;
    totalBox.style.padding = "10px";
    totalBox.style.backgroundColor = "beige";
    totalBox.style.borderRadius = "8px";
    totalBox.style.alignItems = "center"
    totalBox.style.listStylePosition = "inside";
    // totalBox.style.display = "grid"
    // totalBox.style.gridTemplateColumns = "repeat(4, 1fr)"
    totalGoombas.style.gridColumn = "2 / 4";
    // container.append(totalBox);
    
    totalBox.append(totalGoombas);
    const totalBobOms = document.createElement("li");
    totalBobOms.textContent = `Total Cost of Bob-Ombs is ${totalNum2} Coins`;
    totalBox.append(totalBobOms);
    totalBobOms.style.gridColumn= "2 / 4";
    const totalCheeps = document.createElement("li");
    totalCheeps.textContent = `Total Cost of Cheep-Cheeps is ${totalNum3} Coins`;
    totalBox.append(totalCheeps);
    totalCheeps.style.gridColumn = "2 / 4";
    const grandTotal = document.createElement("h2");
    grandTotal.textContent = `Your Total For Pest Control Today is ${addNums} Coins`
    grandTotal.style.gridColumn = "1 / -1"
    totalBox.append(grandTotal);
    grandTotal.style.textAlign = "center";
    const thankYouMessage = document.createElement("h3");
    thankYouMessage.textContent = `Thank You For Choosing Mario Pest Control`;
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.marginBottom = "10px";
    grandTotal.append(thankYouMessage);
    // let screenSize = window.matchMedia("(max-width: 770px)");
    // const screenFunction = (screenSize) => {
    //     if(screenSize.matches) {
    //         totalBox.style.gridTemplateColumns = "repeat(4, 1fr)"
    //     } else {
    //         totalBox.style.gridTemplateColumns = "repeat(3, 1fr)"
    //     }
    // }
    // screenSize.addEventListener(screenFunction);

}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = form.goombaNumber.value;
    const num2 = form.bobOmbNumber.value;
    const num3 = form.cheepNumber.value;
    pestTotal(num1, num2, num3)
})