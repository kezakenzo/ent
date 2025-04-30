function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["pass"].value;

    //Password validation

  if (password !== confirmPassword) {
    alert("use same password");

  }
    
  // Email validation

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