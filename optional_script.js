document.addEventListener("DOMContentLoaded", function() {
    const steamElements = document.querySelectorAll(".steam");
    steamElements.forEach((steam, index) => {
        setTimeout(() => {
            steam.style.opacity = "1";
        }, index * 500);
    });
});
