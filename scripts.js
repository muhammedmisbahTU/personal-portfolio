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
    var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("button-error");

function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Invalid name!";
    return false;
  }
  if (name.match(/\s/)) {
    nameError.innerHTML =
      'Valid';
  } else {
    nameError.innerHTML = "Please enter your full name.";
  }
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }
  if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML =
    'valid';

  return true;
}

  function validatePhone() {
    var phone = document.getElementById("phone").value;
    
    if (phone.length == 0) {
      phoneError.innerHTML = "Phone No is required!";
      phoneError.classList.add("error-message");
      return false;
    }

    if (!phone.match(/^[0-9]*$/)) {
    
      phoneError.innerHTML = "Only digits please";
      phoneError.classList.add("error-message");
      return false;
    }

    if (phone.length !== 10) {
      phoneError.innerHTML = "Phone no should be 10 digits";
      phoneError.classList.add("error-message");
      return false;
    }

    phoneError.innerHTML =
      '<div class="valid-message">' +
      '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">' +
      "</div>";
    phoneError.classList.remove("error-message");
    return true;
  }
   function validateSubject() {
     var subject = document.getElementById("subject").value;

     if (subject.length === 0) {
       subjectError.innerHTML = "Subject is required!";
       subjectError.classList.add("error-message");
       return false;
     }

     if (!subject.match(/^[A-Za-z\s]+$/)) {
  
       subjectError.innerHTML = "Only alphabets and spaces please";
       subjectError.classList.add("error-message");
       return false;
     }

     subjectError.innerHTML = 'valid';
     subjectError.classList.remove("error-message");
     return true;
   }
   function validateMessage() {
     var message = document.getElementById("comment").value;
    
     if (message.length === 0) {
       messageError.innerHTML = "Message is required!";
       messageError.classList.add("error-message");
       return false;
     }

     messageError.innerHTML =
       '<div class="valid-message">' +
       '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">' +
       "</div>";
     messageError.classList.remove("error-message");
     return true;
   }