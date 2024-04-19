// script.js

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => {
        if (response.ok) {
            alert('User registered successfully');
            // You can redirect the user or perform other actions here
        } else {
            throw new Error('Error registering user');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Error registering user');
    });
}
