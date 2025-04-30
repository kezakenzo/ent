function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["confirmPassword"].value;


  
  // Password match validation
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // Email validation using regex
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address");
    return false;
  }

    // Name validation
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

  alert("Form submitted successfully!");
  return true;
}