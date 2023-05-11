function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    // Check email field
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    // Check password field
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must have at least 4 characters, including numbers, lowercase and uppercase letters");
      return false;
    }
    
    // Check password confirmation field
    if (password !== confirmPassword) {
      alert("Password confirmation does not match");
      return false;
    }
    
    // Show password on button click
    var showPasswordCheckbox = document.getElementById('showPassword');
    if (showPasswordCheckbox.checked) {
      alert("Password: " + password);
    }
  }
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (passwordInput.type === 'password' && confirmPasswordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  }
  