// Typing Animation for Roles
const roles = ["ML Engineer", "Web Developer", "Software Engineer", "Data Scientist", "Programmer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing
const erasingSpeed = 100; // Speed of erasing
const delayBetweenRoles = 1500; // Delay before switching roles

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typedText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect after page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});
