// globle variables
let DOB = document.querySelector("#DOB");
let luckyNumber = document.querySelector("#LuckyNum");
let checkButton = document.querySelector("#check-btn");
let outputDiv = document.querySelector("#show-text");
let resetButton = document.querySelector("#reset-btn");

// Handler Functions
checkButton.addEventListener('click', function clickCheckHandler() {
    if(luckyNumber.value>0){
        if (DOB.value != "" && luckyNumber.value != "") {
            let finalSum = calculateSum(DOB.value);
            let isLucky = calculateLuck(finalSum);
            // console.log(isLucky)
            outputDiv.style.color = "black";
            if (isLucky) {
                outputDiv.innerText = "Wow, Your Birthday is Lucky🎉"
            } else {
                outputDiv.innerText = "Sorry! Your Birthday is Not Lucky👀"
            }
        }else{
            outputDiv.innerText = "Please Enter Both Fields!"
            outputDiv.style.color = "red";
        }
    }
    else{
        outputDiv.innerText = "Please Enter Positive Number!"
        outputDiv.style.color = "red";
    }
    

})

resetButton.addEventListener('click', function clickResetHandler() {
    DOB.value = "";
    luckyNumber.value = "";
    outputDiv.innerText = "";
})

// Return functions
// 1.calculateSum
function calculateSum(dob) {
    let sum = 0;
    dob = dob.replaceAll("-", "")
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob[i])
    } return sum
}
// 2. calculateLuck
function calculateLuck(finalSum) {
    if (Number(finalSum) % Number(luckyNumber.value) === 0) {
        return true
    } else { return false }
}