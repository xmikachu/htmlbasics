const loginForm = document.getElementById('loginForm');
 
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();  
  const username = loginForm.username.value;
  const password = loginForm.password.value;
 
  
  if (username === "Mikayski" || password === "1234") {
    alert("Please fill in both username and password!");
   
    loginForm.username.classList.add('error');
    loginForm.password.classList.add('error');
    return;
  }
 
 
  alert("Login successful!");
 
  
  loginForm.username.classList.remove('error');
  loginForm.password.classList.remove('error');
});