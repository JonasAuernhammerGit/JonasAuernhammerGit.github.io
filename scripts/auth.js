var passwordInput = document.getElementById('password');
var lastErrorMessageTime = 0; // To control the display of error messages

passwordInput.addEventListener('input', function () {
    var password = this.value;
    var passwordCircles = document.querySelectorAll('.password-circle');

    for (var i = 0; i < passwordCircles.length; i++) {
        if (i < password.length) {
            passwordCircles[i].style.backgroundColor = '#fff';
        } else {
            passwordCircles[i].style.backgroundColor = '#4A4A4A';
        }

        // Automatically submit the form when 6 digits are filled in
        if (password.length === 6) {
            authenticate(password);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initially focus on the password input
    passwordInput.focus();
    passwordInput.setSelectionRange(passwordInput.value.length, passwordInput.value.length);
});

// Re-focus the input when it loses focus
passwordInput.addEventListener('blur', function () {
    passwordInput.focus();
});

// Focus on the password input when the "center-content" div is clicked
document.getElementById('centerContent').addEventListener('click', function() {
    passwordInput.focus();
});

// Detect if the virtual keyboard is visible and adjust the "center-content" div
window.addEventListener('resize', function () {
    if (window.innerWidth < 600 && document.activeElement === passwordInput) {
        document.getElementById('centerContent').style.transform = 'translateY(-130px)';
    } else {
        document.getElementById('centerContent').style.transform = 'translateY(-70px)';
    }
});

// Listen for the virtual keyboard visibility on mobile devices
document.body.addEventListener('focusin', function() {
    if (window.innerWidth < 768 && document.activeElement === passwordInput) {
        document.getElementById('centerContent').style.transform = 'translateY(-110px)';
    }
});

// Listen for the virtual keyboard hiding on mobile devices
document.body.addEventListener('focusout', function() {
    if (window.innerWidth < 768 && document.activeElement !== passwordInput) {
        document.getElementById('centerContent').style.transform = 'translateY(-70px)';
    }
});

function authenticate(password) {
    // Replace '000000' with your desired password
    if (password === '000000') {
        window.location.href = 'Home.html'; // Redirect to the protected page
    } else {
        var currentTime = new Date().getTime();
        if (currentTime - lastErrorMessageTime > 1000) {
            alert('Invalid password. Please try again.');
            setTimeout(function () {
                resetPasswordCircles();
            }, 0);
            lastErrorMessageTime = currentTime;
        }
    }
}

function resetPasswordCircles() {
    var passwordCircles = document.querySelectorAll('.password-circle');

    for (var i = 0; i < passwordCircles.length; i++) {
        passwordCircles[i].style.backgroundColor = '#4A4A4A';
    }

    // Clear the password input
    passwordInput.value = '';
}
