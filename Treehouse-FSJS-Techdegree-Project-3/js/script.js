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
const email = document.querySelector('#email');
const cardNo = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv'); 
const formElement = document.querySelector('form');

//set error messages (alternatively put inside an array)
const nameError = "Please insert correct name";
const emailError = "Please insert correct email address";
const cardnoError = "Please insert correct card number";
const zipError = "Please insert correct zip code";
const cvvError = "Please insert correct CVV number";
const activityError = "Please check the correct activity";





//create validation functions for each required field 
function validateName(name){
     //if name is not empty string
    return name != '';
}

function validateEmail(email) {
    //taken from treehouse tuturial
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
}

function validateActivities(activity) {

}

function validateCardNo(cardno) {
    //from stackoverflow
    return /^[0-9]{13,16}$/.test(cardno.value);
}

function validateZip(zip) {
    //from stackoverflow
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value)
}

function validateCvv(cvv) {
    //matches 3 digits
    return /^[0-9]{3}$/.test(cvv.value);
}

function createErrorMsg() {

}

function removeErrorMsg(){

}		

//eventlistener on form submit with functions called
formElement.addEventListener('submit', (e) => {
    let correctName = validateName(name.value);
    let correctEmail = validateEmail(email.value);
    let correctActivity = validateActivities(activity)
    let correctCardNo = validateCardNo(cardno);
    let correctZip = validateZip(zip);
    let correctCvv = validateCvv(cvv);


    //validate name
    if (!correctName) {
        createErrorMsg(validateName, nameError);
    } else {
        removeErrorMsg(validateName); 
    }
    //validate email
    if (!correctEmail) {
        createErrorMsg(validateEmail, emailError);
    } else {
        removeErrorMsg(validateEmail); 
    }
    //validate card number
    if (!correctCardNo && paymentMethod[0].selected) {
        createErrorMsg(validateCardNo, cardnoError);
    } else {
        removeErrorMsg(validateCardNo); 
    }
    //validate zip code
    if (!correctZip && paymentMethod[0].selected) {
        createErrorMsg(validateZip, zipError);
    } else {
        removeErrorMsg(validateZip); 
    }
    //validate CVV code
    if (!correctCvv && paymentMethod[0].selected) {
        createErrorMsg(validateCvv, cvvError);
    } else {
        removeErrorMsg(validateCvv); 
    }
    e.preventDefault();
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
function passValidation(elem) {
    //remove ccs class to parent
    elem.parentElement.classList.remove('not-valid');
    //add css class to parent
    elem.parentElement.classList.add('valid');
    //make hint hidden 
    elem.parentElement.lastElementChild.style.visibility = 'hidden';
}
//console.log(validationPass(form));
function failValidation(elem) {
    //remove valid class
    elem.parentElement.classList.remove('valid');
    //add not valid class
    elem.parentElement.classList.add('not-valid');
    //display the hint
    elem.parentElement.lastElementChild.style.visibility = 'visible';
}







////////////////EXTRA CREDITS ATTEMPT/////////////////
//Real-time Error Message

email.addEventListener('keyup', (e) => {


});

/*

Prevent users from registering for conflicting activities
Ideally, we want to prevent users from selecting activities that occur at the same time.

When a user selects an activity, loop over all of the activities, check if any have the same day and time as the activity that was just checked/unchecked, and as long as the matching activity is not the activity that was just checked/unchecked, disable/enable the conflicting activity’s checkbox input and add/remove the ‘.disabled’ className to activity’s parent label element.
Real-time error message
Providing form validation error indications at the moment they occur better serves your user.

Program at least one of the required fields to listen for user interaction like a keyup. When then user interaction occurs, run the validation check for that input. If you created helper functions to validate the required form inputs and sections, you can call those helper functions inside of a field’s event listener.
Detail this specific feature in your README.md file.
Conditional error message
Providing additional information for certain types of errors can be very helpful to your user. For example, if the email address field is empty, it would be enough to inform the user that they should add an email address. But if they’ve already added an email address, but formatted it incorrectly, that message wouldn’t be helpful.

For at least one required form section, provide one error message if the field fails on one of its requirements, and a separate message if it fails on one of its other requirements.
Detail this specific feature in your README.md file.

*/

