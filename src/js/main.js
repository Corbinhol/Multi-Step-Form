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

//Plan Details (These would be forwarded to the backend server for charging)
let currentPlan = 1; //1 = Arcade, 2 = Advanced, 3 = Pro
let isYear = false; //defaults to month
let onlineService = false;
let largerStorage = false;
let customizableProfile = false;

//Prices (Will be multiplied by 10 for year.)
let planPrice, servicePrice, taxPrice, total, totalWithTax;




//These functions make it easier to switch between various steps. I could narrow this whole section down, but it became
//Super handy when writing all the js, so im going to keep it up incase I need to edit anything.
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

let currentPage = 1; //This Variable keeps track of the current page.

//Plan Selection Code
let arcadeButton = document.getElementById("arcade-button");
let advancedButton = document.getElementById("advanced-button");
let proButton = document.getElementById("pro-button");

//This sections is what happens when you click each plan button. It selects the button, and then deselects the rest.
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

let monthYearCheckbox = document.getElementById("year-month-checkbox"); //This segment is for the month/year toggle switch at the bottom
monthYearCheckbox.addEventListener("click", () => {
    if(isYear) { //If Switching to month
        isYear = false;
        document.getElementById("month-label").classList.add('selected')
        document.getElementById("year-label").classList.remove('selected')
        document.getElementById("year-label").classList.add('unselected') //These are a special css rule for animation purposes.

        document.getElementById("yearly-label1").classList.add('display-hidden'); //These Hide the "2 Months Free" label when you switch
        document.getElementById("yearly-label2").classList.add('display-hidden'); //To Month
        document.getElementById("yearly-label3").classList.add('display-hidden');

        document.getElementById("button-price-1").innerHTML = "$9/mo"; //These Set the button prices to display the correct
        document.getElementById("button-price-2").innerHTML = "$12/mo";//Price per each button
        document.getElementById("button-price-3").innerHTML = "$15/mo";
    } else { //If Switching to year
        isYear = true;
        document.getElementById("month-label").classList.remove('selected')
        document.getElementById("year-label").classList.add('selected')
        document.getElementById("month-label").classList.add('unselected')

        document.getElementById("yearly-label1").classList.remove('display-hidden'); //These Show the "2 Months Free" label when you switch
        document.getElementById("yearly-label2").classList.remove('display-hidden'); //To Year
        document.getElementById("yearly-label3").classList.remove('display-hidden');

        document.getElementById("button-price-1").innerHTML = "$90/yr";
        document.getElementById("button-price-2").innerHTML = "$120/yr";
        document.getElementById("button-price-3").innerHTML = "$150/yr";
    }
})

//add-on page code

//Each one of these is for when you click each of the add on button
document.getElementById("online-button").addEventListener("click", () => {
    if(onlineService) { 
        onlineService = false; //Sets it to whether service is selected
        document.getElementById("online-button").classList.remove("selected") //Removes or Adds the visual display of the button
        document.getElementById("online-checkbox").checked = false; //checks or unchecks the checkbox
    } else { 
        onlineService = true;
        document.getElementById("online-button").classList.add("selected")
        document.getElementById("online-checkbox").checked = true;
    }
})

document.getElementById("storage-button").addEventListener("click", () => { //Same Code For Larger Storage^
    if(largerStorage) {
        largerStorage = false;
        document.getElementById("storage-button").classList.remove("selected")
        document.getElementById("storage-checkbox").checked = false;
    } else {
        largerStorage = true;
        document.getElementById("storage-button").classList.add("selected")
        document.getElementById("storage-checkbox").checked = true;
    }
})

document.getElementById("profile-button").addEventListener("click", () => { //Same Code For Customizable Profiles^
    if(customizableProfile) {
        customizableProfile = false;
        document.getElementById("profile-button").classList.remove("selected")
        document.getElementById("profile-checkbox").checked = false;
    } else {
        customizableProfile = true;
        document.getElementById("profile-button").classList.add("selected")
        document.getElementById("profile-checkbox").checked = true;
    }
})

document.getElementById("change-button").addEventListener("click", () => {
    //This is For the "Change" button on the last page, changes the "Confirm" button back to "Next Step"
    continueButton.innerHTML = "Next Step" 
    show2();
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
        continueButton.innerHTML = "Next Step"; //On the last page, if you click the back button, reverts "Confirm" button to "Next Step"
        show3();
    }
})


//These are all the code for the continue button, the form will update each following page every time they
//hit the "Next Step" button. Therefore, Case 1 is the code for Page 1's Button which effects Page 2.
//In most cases, excluding case 1, you should consider the each case to be the code for the next page.
//Case 2 is code for page 3, Case 3 is code for page 4.
continueButton.addEventListener("click", () => {
    switch (currentPage) {
        case 1: //This is for the first page
            let shouldContinue = true;
            //Check if each form is filled out
            let nameInput = document.getElementById("name-input")
            let emailInput = document.getElementById("email-input")
            let numberInput = document.getElementById("phone-input")
            //This is all the form validation, if needed I could add more stricter validation like correct number
            //and email format. For right now, all it checks is if there is nothing in the textbox
            if(nameInput.value == "") {
                nameInput.classList.add("error") //makes the input box have a red border
                document.getElementById("name-error-text").classList.remove("display-none"); //shows the "this field is required" text
                shouldContinue = false; //sets it so that they can't continue until fixed.
            } else {
                nameInput.classList.remove("error"); //removes the red border
                document.getElementById("name-error-text").classList.add("display-none"); //removes the "this field is required" text
                shouldContinue = true; //sets it so they can continue
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
                //If everything is correct continue to next page.
                show2();
            }
            break;
        case 2: //This Code Mostly effects the 3rd page
            let mult = 1; //how much the price is multiplied for if its yearly
            let time = "mo"; //Sets it to /mo by default
            if(isYear) {
                mult = 10; //if yearly, sets it to multiply prices by 10
                time = "yr"; //Sets it to /yr
            }
            document.getElementById("online-service-price").innerHTML = "$" + (1 * mult) + "/" + time; //Sets the display prices
            document.getElementById("storage-service-price").innerHTML = "$" + (2 * mult) + "/" + time;
            document.getElementById("customize-service-price").innerHTML = "$" + (2 * mult) + "/" + time;
            show3(); //Change to page 3
            break;
        case 3: //This code mostly effects the 4th page
            switch(currentPlan) { //This sets the Label at the top of the page to what plan is being purchased, and how
                                  //Frequently its being purchased
                case 1: 
                    document.getElementById("plan-name").innerHTML = "Arcade";
                    planPrice = 9;
                    if(isYear) {planPrice = 90;} //Sets the price to x10 if its being paid yearly
                    break;
                case 2:
                    document.getElementById("plan-name").innerHTML = "Advanced";
                    planPrice = 12;
                    if(isYear) {planPrice = 120;}
                    break;
                case 3:
                    document.getElementById("plan-name").innerHTML = "Pro";
                    planPrice = 15;
                    if(isYear) {planPrice = 150;}
                    break;
            }
            
            let payTime;
            let multiple;
            total = planPrice;
            if(isYear) { //sets whether its "/mo" or "/yr", and then sets the label to "Yearly" or "Monthly" depending on what they chose.
                multiple = 10; //Sets to multiply prices by 10 if they purchase per year
                payTime = "yr";
                document.getElementById("charge-time").innerHTML = "Yearly";
            } else {
                document.getElementById("charge-time").innerHTML = "Monthly";
                payTime = "mo";
                multiple = 1;
            }
            document.getElementById("plan-price").innerHTML = "<b>$" + planPrice + "/" + payTime + "</b>"; //Sets the plan price accordingly
            if(onlineService) {
                document.getElementById("online-service-listing").classList.remove("display-none"); //Shows or hides the add-ons they chose
                total += 1 * multiple; //Adds to the total
                document.getElementById("online-price").innerHTML = "+$" + (1 * multiple) + "/" + payTime //Shows the add-ons price

            } else {
                document.getElementById("online-service-listing").classList.add("display-none"); //Hides the add on if they don't have it
            }

            if(largerStorage) { //Same for Storage ^
                document.getElementById("storage-service-listing").classList.remove("display-none");
                total += 2 * multiple;
                document.getElementById("storage-price").innerHTML = "+$" + (2 * multiple) + "/" + payTime

            } else {
                document.getElementById("storage-service-listing").classList.add("display-none");
            }

            if(customizableProfile) {//Same For Customizable Profile ^
                document.getElementById("profile-service-listing").classList.remove("display-none");
                total += 2 * multiple;
                document.getElementById("profile-price").innerHTML = "+$" + (2 * multiple) + "/" + payTime

            } else {
                document.getElementById("profile-service-listing").classList.add("display-none");
            }

            if(!customizableProfile && !largerStorage && !onlineService) { //If there are no add-ons it hides the seperator.
                document.getElementById("divider").classList.add("display-none");
            } else {
                document.getElementById("divider").classList.remove("display-none");
            }

            taxPrice = total * (6.25 / 100); //Calculates the total tax (this is based in texas, but would change accordingly based on their state)
            document.getElementById("tax-price").innerHTML = "+$" + taxPrice.toFixed(2) + "/" + payTime; //Sets the tax price
            let totalWithTax = total + taxPrice; //Adds together the total with the tax price.
            document.getElementById("total-price").innerHTML = "$" + totalWithTax.toFixed(2) + "/" + payTime; //sets the total price combined with tax
            document.getElementById("continue-button").innerHTML = "Confirm"; //Changes the "Next Step" button to "Confirm"
            show4(); //Switch to 5th page.
            break;
        case 4: //This Code effects the 5th page

            //This is where the form would send the data to backend, it would send the selected plan, selected add-ons,
            //and whether or not the user wants to pay yearly or monthly. Assuming this was a payment, it would also
            //Add the debit card details for the user. If the backend decides the info isn't valid, it will reject it
            //The user will then be sent back to fix whatever went wrong.

            //If all goes well...
            continueButton.classList.add("display-none"); //Hide the "Confirm" button
            backButton.classList.add("display-none"); //Hides the "Go back" button
            show5(); //Show 5th page (AKA the thank you page).
    }
})
show1();