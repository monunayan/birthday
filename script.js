// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const giftBox = document.getElementById("giftBox");
    const mainContent = document.getElementById("mainContent");
  
    // When the gift box is clicked, trigger the animation
    giftBox.addEventListener("click", function () {
      // Add fade-out animation class to gift box
      giftBox.classList.add("fade-out");
  
      // After the fade-out animation, hide the gift box and show main content
      setTimeout(function () {
        giftBox.style.display = "none";
        mainContent.classList.remove("hidden");
        // Optionally add an entrance animation to main content
        mainContent.classList.add("animate-pop-in");
        // Start the confetti celebration
        startConfetti();
      }, 600); // Duration matches the fade-out animation
    });
  });
  
  /* Simple Confetti Animation */
  function startConfetti() {
    const confettiContainer = document.getElementById("confetti");
    const colors = ["#f1c40f", "#e74c3c", "#9b59b6", "#3498db", "#2ecc71"];
    const confettiCount = 150;
    const confettiElements = [];
  
    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      // Randomize color, horizontal position, and animation delay
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 3 + "s";
      confettiContainer.appendChild(confetti);
      confettiElements.push(confetti);
    }
  
    // Clean up confetti elements after 10 seconds
    setTimeout(function () {
      confettiElements.forEach((confetti) => {
        confetti.remove();
      });
    }, 10000);
  }
  document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("musicPlayer");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const giftBox = document.getElementById("giftBox");
    const mainContent = document.getElementById("mainContent");

    // Hide pause button initially
    pauseBtn.style.display = "none";

    playBtn.addEventListener("click", () => {
        music.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";
    });

    pauseBtn.addEventListener("click", () => {
        music.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "inline-block";
    });

    // Gift box click event to reveal content
    giftBox.addEventListener("click", () => {
        giftBox.style.display = "none";
        mainContent.classList.remove("hidden");
    });
});
  