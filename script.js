
const header = document.querySelector("header");

// Add or remove the 'sticky' class based on scroll position
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Toggle menu and nav list visibility on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// Close menu and nav list when scrolling
window.onscroll = () => {
    if (navlist.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }
};
/** Form validation **/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

const username_error = document.getElementById("username_error");
const email_error = document.getElementById("email_error");
const message_error = document.getElementById("message_error");

// Regular expression for validating email addresses
const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous error messages
    username_error.textContent = '';
    email_error.textContent = '';
    message_error.textContent = '';

    let isValid = true;

    // Validate username
    if (username.value.trim() === '') {
        username_error.textContent = "*Name is required";
        isValid = false;
    }

    // Validate email
    if (!email.value.match(email_check)) {
        email_error.textContent = "*Enter a valid email";
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        message_error.textContent = "*This field is required";
        isValid = false;
    }

    // Submit the form if all fields are valid
    if (isValid) {
        form.submit();
        form.reset();
    }
});

