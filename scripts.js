document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Sign-in attempt:', { email, password });
    // Here you would typically send these credentials to a server for authentication
    alert('Sign-in functionality not implemented in this demo.');
});