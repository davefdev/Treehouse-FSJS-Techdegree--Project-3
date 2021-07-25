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
otherJobRole.style.display = 'hidden';

//create a hide element function that can be reused
function hideElement(elem) {
    elem.style.display = 'hidden';
}

//create function to display element regardless 
function displayElement(elem) {
    element.style.display = 'show';
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
colorSelect.disabled = true;

//event listener on change to hide other job role
designSelect.addEventListener('change', (e) => {
    //remove disabled
    colorSelect.disabled = false;
    //loop over color options`
    for (let i = 0; i < colorOptions.length; i++) {
        let tshirtColor = colorOptions[i];
    }
}); 
