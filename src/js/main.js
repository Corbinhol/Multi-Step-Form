//Stores all the repeated elements
let inputSection1 = document.getElementById("input-section__step1");
let inputSection2 = document.getElementById("input-section__step2");
let inputSection3 = document.getElementById("input-section__step3");
let inputSection4 = document.getElementById("input-section__step4");

let inputSection4Part1 = document.getElementById("step4-part1");
let inputSection4Part2 = document.getElementById("step4-part2");

let step1Indicater = document.getElementById("step1-indicater");
let step2Indicater = document.getElementById("step2-indicater");
let step3Indicater = document.getElementById("step3-indicater");
let step4Indicater = document.getElementById("step4-indicater");

let currentPage = 1;

//These functions make it easier to switch between various
//Steps
function show1() {
    currentPage = 1; //Set the current page

    inputSection1.classList.remove("display-none"); //Shows the selected page
    inputSection2.classList.add("display-none"); //Hides the rest
    inputSection3.classList.add("display-none"); 
    inputSection4.classList.add("display-none");
    
    step1Indicater.classList.add("selected"); //Selects the correct indicator
    step2Indicater.classList.remove("selected"); //unselects the rest
    step3Indicater.classList.remove("selected");
    step4Indicater.classList.remove("selected");

    backButton.classList.add("display-hidden"); //hides the back button on the first one
}

function show2() {
    currentPage = 2;

    inputSection2.classList.remove("display-none");
    inputSection1.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection4.classList.add("display-none"); 

    step1Indicater.classList.remove("selected");
    step2Indicater.classList.add("selected");
    step3Indicater.classList.remove("selected");
    step4Indicater.classList.remove("selected");

    backButton.classList.remove("display-hidden"); //shows the back button on the rest
}

function show3() {
    currentPage = 3;

    inputSection3.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection1.classList.add("display-none"); 
    inputSection4.classList.add("display-none"); 

    step1Indicater.classList.remove("selected");
    step2Indicater.classList.remove("selected");
    step3Indicater.classList.add("selected");
    step4Indicater.classList.remove("selected");

    backButton.classList.remove("display-hidden");
}

function show4() {
    currentPage = 4;

    inputSection4.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection1.classList.add("display-none"); 

    step1Indicater.classList.remove("selected");
    step2Indicater.classList.remove("selected");
    step3Indicater.classList.remove("selected");
    step4Indicater.classList.add("selected");
    inputSection4Part1.classList.remove("display-none");
    inputSection4Part2.classList.add("display-none");
    
    backButton.classList.remove("display-hidden");
}

function show5() {
    currentPage = 5;

    inputSection4.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection1.classList.add("display-none"); 

    step1Indicater.classList.remove("selected");
    step2Indicater.classList.remove("selected");
    step3Indicater.classList.remove("selected");
    step4Indicater.classList.add("selected");
    inputSection4Part1.classList.add("display-none");
    inputSection4Part2.classList.remove("display-none");
    //Hides both the continue button and back button on final page
    backButton.classList.add("display-hidden"); 
    continueButton.classList.add("display-hidden");
}

//Plan Selection Code
let currentPlan = 1; //defaults to first
let isYear = false; //defaults to month
let arcadeButton = document.getElementById("arcade-button");
let advancedButton = document.getElementById("advanced-button");
let proButton = document.getElementById("pro-button");

//Code For Each plan
arcadeButton.addEventListener("click", () => {
    currentPlan = 1; //sets current plan
    arcadeButton.classList.add("selected"); //selects and clears plans buttons
    advancedButton.classList.remove("selected");
    proButton.classList.remove("selected")
})

advancedButton.addEventListener("click", () => {
    currentPlan = 2;
    arcadeButton.classList.remove("selected");
    advancedButton.classList.add("selected");
    proButton.classList.remove("selected")
})

proButton.addEventListener("click", () => {
    currentPlan = 2;
    arcadeButton.classList.remove("selected");
    advancedButton.classList.remove("selected");
    proButton.classList.add("selected")
})

let monthYearCheckbox = document.getElementById("year-month-checkbox");
monthYearCheckbox.addEventListener("click", () => {
    if(isYear) {
        isYear = false;
        document.getElementById("month-label").classList.add('selected')
        document.getElementById("year-label").classList.remove('selected')
        document.getElementById("year-label").classList.add('unselected')

        document.getElementById("yearly-label1").classList.add('display-hidden');
        document.getElementById("yearly-label2").classList.add('display-hidden');
        document.getElementById("yearly-label3").classList.add('display-hidden');
    } else {
        isYear = true;
        document.getElementById("month-label").classList.remove('selected')
        document.getElementById("year-label").classList.add('selected')
        document.getElementById("month-label").classList.add('unselected')

        document.getElementById("yearly-label1").classList.remove('display-hidden');
        document.getElementById("yearly-label2").classList.remove('display-hidden');
        document.getElementById("yearly-label3").classList.remove('display-hidden');
    }
})

//Continue and Back buttons.
let continueButton = document.getElementById("continue-button");
let backButton = document.getElementById("go-back");
backButton.addEventListener("click", () => {
    if(currentPage == 2) {
        show1();
    }
    else if(currentPage == 3) {
        show2();
    }
    else if(currentPage == 4) {
        show3();
    }
})

continueButton.addEventListener("click", () => {
    switch (currentPage) {
        case 1:
            let shouldContinue = true;
            //Check if each form is filled out
            let nameInput = document.getElementById("name-input")
            let emailInput = document.getElementById("email-input")
            let numberInput = document.getElementById("phone-input")
            if(nameInput.value == "") {
                nameInput.classList.add("error")
                document.getElementById("name-error-text").classList.remove("display-none");
                shouldContinue = false;
            } else {
                nameInput.classList.remove("error")
                document.getElementById("name-error-text").classList.add("display-none");
                shouldContinue = true;
            }

            if(emailInput.value == "") {
                emailInput.classList.add("error")
                document.getElementById("email-error-text").classList.remove("display-none");
                shouldContinue = false;
            } else {
                emailInput.classList.remove("error")
                document.getElementById("email-error-text").classList.add("display-none");
                shouldContinue = true;
            }

            if(numberInput.value == "") {
                numberInput.classList.add("error")
                document.getElementById("phone-error-text").classList.remove("display-none");
                shouldContinue = false;
            } else {
                numberInput.classList.remove("error")
                document.getElementById("phone-error-text").classList.add("display-none");
                shouldContinue = true;
            }

            if(shouldContinue) {
                show2();
            }
            break;
        case 2:
            document.getElementById("online-service-price").innerHTML = "Test"
            show3();
            break;
    }
})



show2();