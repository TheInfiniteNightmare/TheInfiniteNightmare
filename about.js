const nightmareLogoButton =
    document.getElementById("nightmareLogoButton");

const glitchSound =
    document.getElementById("glitchSound");


nightmareLogoButton.addEventListener("click", () => {

    // Restart the sound
    glitchSound.currentTime = 0;

    // Play glitch sound
    glitchSound.play().catch(() => {});

    // Start glitch effect
    nightmareLogoButton.classList.remove("glitch-active");

    void nightmareLogoButton.offsetWidth;

    nightmareLogoButton.classList.add("glitch-active");

});
