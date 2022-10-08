const NUMBERS = document.querySelectorAll(".numbers");
const MATH_OPERS = document.querySelectorAll(".math__operators");
const ADDITIONAL_OPERS = document.querySelectorAll(".additional__operators");
const RESULT = document.querySelector(".result span");
const EQUAL = document.querySelector(".equal");
const CLEAR = document.querySelector(".clear");
const PROCENT = document.querySelector(".procent");
const NEGATIVE = document.querySelector(".negative");
const POINT = document.querySelector(".point");

let firstValue = "";
let secondValue = "";
let resultValue = 0;
let isFirstValue = false;
let isSecondValue = false; 
let typeOfOper = ""

for (let i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener("click", (e) => {
        let atr = e.target.innerHTML;
        console.log(atr);
        if (isFirstValue === false) {
            getFirstValue(atr)
        } else if (isSecondValue === false) {
            getSecondValue(atr)
        }
    })
}

for (let i = 0; i < MATH_OPERS.length; i++) {
    MATH_OPERS[i].addEventListener("click", (e) => {
        typeOfOper = e.target.innerHTML;
        isFirstValue = true;
    })
}

function getFirstValue(el) {
    RESULT.innerHTML = "";
    firstValue += el;
    RESULT.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    RESULT.innerHTML = "";
    secondValue += el;
    RESULT.innerHTML = secondValue;
    secondValue = +secondValue;
}

EQUAL.addEventListener("click", () => {
    if (typeOfOper === "+") {
        resultValue = firstValue + secondValue
        isSecondValue = true
        RESULT.innerHTML = resultValue
    } else if (typeOfOper === "-") {
        isSecondValue = true
        resultValue = firstValue - secondValue
        RESULT.innerHTML = resultValue
    } else if (typeOfOper === "/") {
        isSecondValue = true
        resultValue = firstValue / secondValue
        RESULT.innerHTML = resultValue
    } else if (typeOfOper === "X") {
        isSecondValue = true
        resultValue = firstValue * secondValue
        RESULT.innerHTML = resultValue
    }
})

CLEAR.addEventListener("click", () => {
    firstValue = ""
    secondValue = ""
    typeOfOper = ""
    isFirstValue = false
    isSecondValue = false
    RESULT.innerHTML = ""
})

PROCENT.addEventListener("click", () => {
    if (isFirstValue === false && isSecondValue === false) {
        firstValue = firstValue / 100
        RESULT.innerHTML = firstValue
    } else if (isFirstValue === true && isSecondValue === false) {
        secondValue = secondValue / 100
        RESULT.innerHTML = secondValue
    } else if (isFirstValue === true && isSecondValue === true) {
        resultValue = resultValue / 100
        RESULT.innerHTML = resultValue
    }
})

NEGATIVE.addEventListener("click", () => {
    if (isFirstValue === false && isSecondValue === false) {
        firstValue = -firstValue
        RESULT.innerHTML = firstValue
    } else if (isFirstValue === true && isSecondValue === false) {
        secondValue = -secondValue
        RESULT.innerHTML = secondValue
    } else if (isFirstValue === true && isSecondValue === true) {
        resultValue = -resultValue
        RESULT.innerHTML = resultValue
    }
})

POINT.addEventListener("click", () => {
    if (isFirstValue === false && isSecondValue === false) {
        RESULT.innerHTML = firstValue + "."
    } else if (isFirstValue === true && isSecondValue === false) {
        secondValue = secondValue / 100
        RESULT.innerHTML = secondValue
    } else if (isFirstValue === true && isSecondValue === true) {
        resultValue = resultValue / 100
        RESULT.innerHTML = resultValue
    }
})
