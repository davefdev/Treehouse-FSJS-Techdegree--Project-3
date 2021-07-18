/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/


//focus on the name input field
const focusName = document.querySelectorAll('input[type=text]');
console.log(focusName);
focusName[0].focus();

//access job role 
const jobRoleSelect = document.querySelector('#title');
const otherJobRoleInput = document.querySelector('#other-job-role')

//create a hide element function that can be reused
const hideElement(elem) {
    elem.style.display = 'hidden';
}
//hide the other job element
hideElement(otherJobRoleInput);

//event listener on change to hide other job role
jobRoleSelect.addEventListener('change', () => {
    if (jobRoleSelect.value === 'other') {
        displayElement(otherJobRoleInput, 'block');
    } else {
        hideElement(otherJobRoleInput);
    }
}); 