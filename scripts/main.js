document.addEventListener("DOMContentLoaded", function() {
    const notification = document.getElementById("notification");
    const closeBtn = document.querySelector(".close-notification");

    // Animation on page load
    setTimeout(() => {
        notification.style.visibility = "visible"; // Make it visible
        notification.style.bottom = "16px"; // Move it to the final position
        notification.style.transform = "scale(0.9)"; // Scale up to the final size
    }, 100); // Timeout to ensure the animation runs after the initial render

    // Close notification on button click
    closeBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        notification.style.transition = "bottom 0.6s ease-out, transform 0.6s ease-out";
        notification.style.bottom = "-500px"; // Move it back down
        notification.style.transform = "scale(0.9)"; // Scale down
        setTimeout(() => {
            notification.style.display = "none"; // Hide the element after animation
        }, 300); // Wait for the close animation to finish
    });
});
