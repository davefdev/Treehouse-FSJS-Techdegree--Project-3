/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

///////////////NAME SECTION//////////////////////
//focus on the name input field
const nameInput = document.querySelector('#name');
console.log(nameInput);
nameInput.focus();

/////////JOB ROLE SECTION/////////////////////
//access job role 
const jobRole = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');

//hide the other job element
otherJobRole.hidden = true;
//otherJobRole.setAttribute('hidden', true);

//create a hide element function that can be reused
function hideElement(elem) {
    elem.style.display = 'hidden';
    //elem.setAttribute('hidden', true);
}

//create function to display element
function displayElement(elem) {
    elem.style.display = 'show';
    //elem.setAttribute('show', true);
}

//event listener on change to hide other job role
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        displayElement(otherJobRole);
    } else {
        hideElement(otherJobRole);
    }
}); 

/////////////////TSHIRT INFO SECTION/////////////
//access job role 
const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const colorOptions = document.querySelectorAll('#color option');
//alternatively const colorSelectOptions = colorSelect.children
//disable color options
colorSelect.disabled = true;
//colorSelect.setAttribute('disabled', true);

//event listener on change to hide other job role
designSelect.addEventListener('change', (e) => {
    //remove disabled
    colorSelect.disabled = false;
    //loop over color options`
    for (let i = 0; i < colorOptions.length; i++) {
        let shirtColor = colorOptions[i];
        let shirtColorValue = shirtColor.value;
        console.log(shirtColor);
        console.log(shirtColorValue);
        //get data-theme attribute of current shirt
        let shirtTheme = colorOptions[i].getAttribute('data-theme');
        console.log(shirtTheme);

        //conditional to check 
        if (shirtColorValue === shirtTheme) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', true);
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].setAttribute('selected', false);
        };
    //not working
    }
});

/////////////////REGISTER ACTIVITIES SECTION/////////////
//create variables 
const activitiesArea = querySelector('#activities');
const totalElement = querySelector('#activities-cost');
//create var to store total cost
let activitiesTotal = 0;

//eventlistener for regiester fieldset
activitiesArea.addEventListener('change', (e) => {
    //access clicked activity elemment unique cost
    let activityCost = e.target.getAttribute('data-cost');
    //convert it to a string with 2 
    let activityPrice = parseInt(activityCost);

    //access event targets checked 
    let activityChecked = e.target.checked;
   //conditional for checked or unchecked
    if (activityChecked) {
        activitiesTotal += activityPrice;
    } else {
        activitiesTotal -= activityPrice;
    }

    //update inner html to display total cost 
    totalElement.innerHTML = `Total: ${activitiesTotal}`;

});

/////////////////PAYMENT INFO SECTION////////////////
//set variables
const paymentMethod = querySelector('#payment');
const creditCard = querySelector('#credit-card');
const paypal = querySelector('#paypal');
const bitcoin = querySelector('#bitcoin');
//hide elements
paypal.hidden = true;
//paypal.setAttribute('hidden', true);
bitcoin.hidden = true;
//bitcoin.setAttribute('hidden', true);

//target payment second child and give selected prop
paymentMethod.children[1].setAttribute('selected', true);

//eventlistener for change on payment method types
paymentMethod.addEventListener('change', (e) => {
   //foor loop to run through each payment element option 
    for (i = 0; i <= paymentMethod.length; i += 1) {
        //conditional for event target value change
        if (e.target.value === 'credit-card') {
            paypal.hidden = true;
            bitcoin.hidden = true;
            creditCard.removeAttribute('hidden');
        } else if (e.target.value ==='paypal') {
            creditCard.hidden = true;
            bitcoin.hidden = true;
            paypal.removeAttribute('hidden');
        } else if (e.target.value === 'bitcoin') {
            creditCard.hidden = true;
            paypal.hidden = true; 
            bitcoin.removeAttribute('hidden');     
        }
    }
});

/////////////////FORM VALIDATION////////////////
//set variables that haven't already been declared
const email = querySelector('#email');
const cardNo = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv"); 
const formElement = document.querySelector('form');



//eventlistener on form submit with helper functions called
formElement.addEventListener('submit', (e) => {
        /*nameInputValue = nameInput.value;
        nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInputValue);
        e.preventDefault();
        if (nameIsValid) {
            //do nothing
        } else {
            e.preventDefault();
        }
        */



}

//create helper functions for each required field 

function validateName(name){
     //if name is not empty string
 
}

function validateEmail(email) {

}

function validateActivities(activity) {

}

function validateCardNo(cardno) {
    
}

function validateZip(zip) {
  
}

function validateCvv(cvv) {
    
}

function setErrorMsg() {

}

function removeErrorMsg(){

}		



/////////////////ACCESSIBILITY SECTION////////////////
//set variables
const activityCheckboxes = document.querySelectorAll('input[type=checkbox]');

//loop over checkboxes
for (let i = 0; i < activityCheckboxes.length; i++) {
    //set eventlistener on focus to each checkbox
    activityCheckboxes[i].addEventListener('focus', (e) => {
        //access each checkbox parentelement and add focus class name
        activityCheckboxes[i].parentElement.classList.add('focus');
    });
    //set eventlistener on blur to each checkbox
    activityCheckboxes[i].addEventListener('blur', (e) => {
        //access each checkbox parentelement and remove focus class name
        activityCheckboxes[i].parentElement.classList.remove('focus');
    });
}


//add form input validation error indications to assist the user

//create function to pass element 
function validatePass(elem) {
    //remove ccs class to parent
    elem.parentElement.classList.remove('not-valid');
    //add css class to parent
    elem.parentElement.classList.add('valid');
    //make child element hidden (but keep the space used)
    elem.parentElement.lastElementChild.style.visibility = 'hidden';
}
//console.log(validationPass(form));
function validateFail(elem) {
    elem.parentElement.classList.remove('valid');
    elem.parentElement.classList.add('not-valid');
    elem.parentElement.lastElementChild.style.visibility = 'visible';
}