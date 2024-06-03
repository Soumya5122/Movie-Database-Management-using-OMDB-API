document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('signin-form')) {
        document.getElementById('signin-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;

            // Basic validation
            if (email && password) {
                // Simulate sign-in (should be replaced with actual authentication logic)
                alert('Sign in successful!');
                localStorage.setItem('authenticated', true); // Simulate authentication state
                window.location.href = 'index.html'; // Redirect to main page
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    if (document.getElementById('signup-form')) {
        document.getElementById('signup-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            // Basic validation
            if (name && email && password) {
                // Simulate sign-up (should be replaced with actual registration logic)
                alert('Sign up successful!');
                localStorage.setItem('authenticated', true); // Simulate authentication state
                window.location.href = 'signin.html'; // Redirect to sign-in page
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Check authentication state and redirect to sign-in page if not authenticated
    if (window.location.pathname === '/index.html' && !localStorage.getItem('authenticated')) {
        window.location.href = 'signin.html';
    }
});
