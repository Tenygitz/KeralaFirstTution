let formSubmit=(e) =>{
    e.preventDefault();
   // local storage
  
    
  // First name validation
  const firstName = document.getElementById('first').value;
  const firstError = document.getElementById('firstError');
   localStorage.setItem("name",firstName)
  console.log(firstName)
  console.log("this is message ")
  if (firstName=="") {
    firstError.innerText = 'First name is required';
    firstError.style.color ="red";
   
  
  } else {
    firstError.innerText  = '';
  }

  // Last name validation
  const lastName = document.getElementById('Last').value;
  const lastError = document.getElementById('lastError');
  if (lastName=="") {
    lastError.innerText  = 'Last name is required';
    
  } else {
    lastError.innerText  = '';
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email=="") {
    emailError.innerText  = 'Email is required';
    
  } else if (!emailPattern.test(email)) {
    emailError.innerText  = 'Enter a valid email';

  } else {
    emailError.innerText = '';
  }

  // Phone number validation
  const phoneNumber = document.getElementById('number').value;
  const  numberError = document.getElementById('numberError');
  if (phoneNumber=="" && phoneNumber.length==10) {
    numberError.innerText  = 'Phone number is required';
   
  } else {
    numberError.innerText  = '';
  }

  // Message validation
  const message = document.getElementById('message').value;
  const messageError = document.getElementById('messageError');
  if (message=="") {
    messageError.innerText  = 'Message is required';
    
  } else {
    messageError.innerText  = '';
  }

}