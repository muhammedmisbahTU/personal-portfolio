// function validate() {
// // Get the values of the form fields
// var name = document.getElementById('name').value;
// var email = document.getElementById('email').value;
// var subject = document.getElementById('subject').value;
// var message = document.getElementById('message').value;

// // Get the error message elements
// var nameError = document.getElementById('name-error');
// var emailError = document.getElementById('email-error');
// var subjectError = document.getElementById('subject-error');
// var messageError = document.getElementById('message-error');

// // Clear any previous error messages
// nameError.textContent = '';
// emailError.textContent = '';
// subjectError.textContent = '';
// messageError.textContent = '';

// var isValid = true;

// // Regular expression for validating full name (at least two words, each with at least 2 characters)
// var nameRegex = /^[a-zA-Z]{2,}(\s[a-zA-Z]{2,})+$/;

// // Regular expression for validating email
// var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Check if the name field is empty or invalid
// if (name.trim() === '') {
//     nameError.textContent = 'Name is required';
//     isValid = false;
// } else if (!nameRegex.test(name)) {
//     nameError.textContent = 'Please enter your full name (at least two words)';
//     isValid = false;
// }

// // Check if the email field is empty or invalid
// if (email.trim() === '') {
//     emailError.textContent = 'Email address is required';
//     isValid = false;
// } else if (!emailRegex.test(email)) {
//     emailError.textContent = 'Please enter a valid email address';
//     isValid = false;
// }

// // Check if the subject field is empty
// if (subject.trim() === '') {
//     subjectError.textContent = 'Subject is required';
//     isValid = false;
// }

// // Check if the message field is empty
// if (message.trim() === '') {
//     messageError.textContent = 'Message is required';
//     isValid = false;
// }

// // If any field is invalid, prevent form submission
// return isValid;

// }
// Individual validation functions for real-time (onkeyup) feedback
function validateName() {
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('name-error');
    var nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;

    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = 'Name must contain only letters and single spaces';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('subject').value;
    var subjectError = document.getElementById('subject-error');
    if (subject.trim() === '') {
        subjectError.textContent = 'Subject is required';
        return false;
    }
    subjectError.textContent = '';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;
    var messageError = document.getElementById('message-error');
    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        return false;
    }
    messageError.textContent = '';
    return true;
}

// Final check on form submission (onsubmit)
function validateForm() {
    // Run all validations and store results
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isSubjectValid = validateSubject();
    var isMessageValid = validateMessage();

    // Only returns true if every field passes
    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
}
