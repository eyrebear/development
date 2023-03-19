// const readline = require("readline-sync");
console.log("greetings");

 
const addItUp = (num1, num2) => {
    // let total = Number(num1) + Number(num2);

    if(typeof(num1) !== typeof(1) || typeof(num2) !== typeof(1)) {
        throw new Error(`Hey, I am an error! Not a Data Match!`);
    } else {
        console.log("The Type of Data is a Match!")

    }
    return num1 + num2;
}

try {
    addItUp(1, 2);
}

catch(err) {
    console.log(err);
}

finally {
    console.log("I am running no matter what");
}

//console.log(addItUp(1,2));

let user = {
    loginName: "FordEyre",
    password: "login" + Number(123)
}

const loginTest = (input1, input2) => {
    
        if(input1 !== user.loginName || input2 !== user.password) {
            throw new Error("That Login Didn't Work!");
        } else {
            console.log("Login Successful!");
        }
        // return input1 + I don't think I need to return anything
}

try {
    loginTest("FordEyre", `login${Number(123)}`)     //`hello${123}`
}
catch(err1) {
    console.log(err1); //need to console log or the error message won't show up for alert. Seriously, I made that mistake
}
finally {
    console.log("Continue");
}