// Form submission
const formSubmission = document.getElementById("form");

formSubmission.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted successfully! Our team will contact you soon.");

  //clear storage after form submission
  localStorage.removeItem("name");
  localStorage.removeItem("phone");
  localStorage.removeItem("email");
  localStorage.removeItem("time");


  formSubmission.reset();

});



// Form validation
const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("ph-no");
const emailInput = document.getElementById("email");
const timeInput = document.getElementById("time");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const timeError = document.getElementById("time-error");



//name validation
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
  } else {
    nameError.textContent = "";
  }
});

//phone number validation
phoneInput.addEventListener("input",function(){
  if(phoneInput.value.trim().length !== 10){
    phoneError.textContent = "Please enter a valid 10-digit phone number";
  }else{
    phoneError.textContent ="";
  }
});

//email validation
emailInput.addEventListener("input", function () {
  if (
    !emailInput.value.trim().includes("@") ||
    !emailInput.value.trim().includes(".")
  ) {
    emailError.textContent = "Please enter a valid email";
  } else {
    emailError.textContent = "";
  }
});

//time validation
timeInput.addEventListener("input", function(){
  if (
    timeInput.value < "11:00" || timeInput.value > "22:00"
  ){
    timeError.textContent = "Please select a valid time between 11:00 AM and 10:00 PM";
  }else{
    timeError.textContent = "";
  }
});




//Local storage
const nameField = document.getElementById("name");
const phoneNumberField = document.getElementById("ph-no");
const emailField = document.getElementById("email");
const timeField = document.getElementById("time");

nameField.value = localStorage.getItem("name") || "";
phoneNumberField.value = localStorage.getItem("phone") || "";
emailField.value = localStorage.getItem("email") || "";
timeField.value = localStorage.getItem("time") || "";

nameField.addEventListener("input", function () {
  localStorage.setItem("name", nameField.value);
});
phoneNumberField.addEventListener("input", function () {
  localStorage.setItem("phone", phoneNumberField.value);
});
emailField.addEventListener("input", function () {
  localStorage.setItem("email", emailField.value);
});
timeField.addEventListener("input", function () {
  localStorage.setItem("time", timeField.value);
});







