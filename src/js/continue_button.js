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