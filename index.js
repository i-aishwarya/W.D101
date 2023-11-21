function submitForm() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  
  document.getElementById('passwordError').innerText = '';
  document.getElementById('confirmPasswordError').innerText = '';

  
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
    return;
  }

 
  alert('Form submitted successfully!');
}
