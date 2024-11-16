document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (validateEmail(email) || validatePhone(email)) {
            // Here you would typically send the email or phone number to a server for authentication
            alert('Login successful. Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        } else {
            alert('Please enter a valid email or phone number.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});
