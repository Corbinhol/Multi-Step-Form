let continueButton = document.getElementById("continue-button");
let inputSection1 = document.getElementById("input-section__step1");
let inputSection2 = document.getElementById("input-section__step2");
let inputSection3 = document.getElementById("input-section__step3");
let inputSection4 = document.getElementById("input-section__step4");



//Testing

function show1() {
    inputSection1.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection4.classList.add("display-none"); 
}

function show2() {
    inputSection2.classList.remove("display-none");
    inputSection1.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection4.classList.add("display-none"); 
}

function show3() {
    inputSection3.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection1.classList.add("display-none"); 
    inputSection4.classList.add("display-none"); 
}

function show4() {
    inputSection4.classList.remove("display-none");
    inputSection2.classList.add("display-none"); 
    inputSection3.classList.add("display-none"); 
    inputSection1.classList.add("display-none"); 
}