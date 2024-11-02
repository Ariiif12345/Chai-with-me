document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Event listener for Yes button - redirects to foggy_morning.html
    yesBtn.addEventListener("click", function() {
        window.location.href = "foggy_morning.html"; // Redirect to the foggy morning page
    });

    // Event listener for No button
    noBtn.addEventListener("click", function() {
        // Change No button to behave as Yes button
        noBtn.innerText = "Yes, I'd love to!";
        noBtn.classList.add("enabled");
        noBtn.disabled = true;

        // Redirect after a small delay for playful effect
        setTimeout(() => {
            window.location.href = "foggy_morning.html";
        }, 1000);
    });

    // Enable No button and add animation to make it clickable
    setTimeout(() => {
        noBtn.disabled = false;
        noBtn.classList.add("enabled");
        noBtn.style.cursor = "pointer";
    }, 2000); // No button becomes clickable after 2 seconds
});
