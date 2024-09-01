// GSAP animations for curtain and cat
const curtain = gsap.timeline({ defaults: { duration: 0.13, ease: "none" } });
const cat = gsap.timeline({
  scrollTrigger: { trigger: "#paw", start: "bottom 80%" },
  defaults: { duration: 0.5, ease: "none", transformOrigin: "50% 50%" },
});

function initGSAPAnimation() {
  var i;
  var piece = "#piece";
  var j;

  for (i = 1; i < 18; i++) {
    j = i.toString();

    curtain.to(piece.concat(j), { y: -44 });
    curtain.to(piece.concat(j), { opacity: 0, duration: 0 });
  }

  cat.to("#paw", { rotation: "45deg" });
  cat.to("#paw", { rotation: "0" });
  cat.repeat(1);

  dt1 = new Date("July 31, 2020");
  dt2 = new Date();
  document.querySelectorAll(".years").forEach(function (element) {
    element.innerHTML = diff_years(dt1, dt2) + "+";
  });

  function diff_years(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  }
}

// GSAP animation for arrow SVGs
function initArrowAnimation() {
  const arrowTimeline = gsap.timeline({
    repeat: -1,
    defaults: { duration: 0.3, ease: "power1.inOut" },
  });

  arrowTimeline
    .to("#Arrow1", { y: "-10px" }) // Up
    .to("#Arrow1", { y: "0px" })
    

    .to("#Arrow2", { y: "-10px" }) // Up
    .to("#Arrow2", { y: "0px" })
    

    .to("#Arrow3", { x: "-10px" }) // Left
    .to("#Arrow3", { x: "0px" })
    

    .to("#Arrow4", { x: "-10px" }) // Left
    .to("#Arrow4", { x: "0px" })
   

    .to("#Arrow5", { y: "10px" }) // Down
    .to("#Arrow5", { y: "0px" })
    
    .to("#Arrow6", { y: "10px" }) // Down
    .to("#Arrow6", { y: "0px" })
    

    .to("#Arrow7", { x: "10px" }) // Right
    .to("#Arrow7", { x: "0px" })
    

    .to("#Arrow8", { x: "10px" }) // Right
    .to("#Arrow8", { x: "0px" })
    
}

let confettiActive = false;

// Konami Code Easter egg
function initKonamiCode() {
  const konamiCode = [38, 38, 37, 37, 40, 40, 39, 39];
  let konamiIndex = 0;

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        showSpecialMessage(); // Show the modal first
        setTimeout(() => {
          triggerConfetti(); // Trigger confetti after the delay
        }, 500); // Delay in milliseconds (500ms = 0.5 seconds)
        konamiIndex = 0; // Reset the konamiIndex after successful code entry
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function triggerConfetti() {
  confettiActive = true; // Set confetti as active
  var end = Date.now() + 15 * 1000; // Run for 15 seconds

  var colors = ["#f44d5f", "#ffffff"];

  (function frame() {
    if (!confettiActive) return; // Stop confetti if the modal is closed

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

let currentMentorIndex = 1;
const totalMentors = document.getElementsByClassName("mentor-content").length;

document.getElementById("openModalButton").onclick = function () {
  showSpecialMessage();
  setTimeout(() => {
    triggerConfetti(); // Trigger confetti after the delay
  }, 500); // Delay in milliseconds (500ms = 0.5 seconds)
};

function showSpecialMessage() {
  currentMentorIndex = 1;

  const modal = document.getElementById("konamiModal");
  const span = document.getElementsByClassName("close")[0];
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  modal.style.display = "block";

  showMentor(currentMentorIndex);

  span.onclick = function () {
    modal.style.display = "none";
    confettiActive = false; // Stop confetti
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      confettiActive = false; // Stop confetti
    }
  };

  nextButton.onclick = function () {
    if (currentMentorIndex < totalMentors) {
      currentMentorIndex++;
      slideMentor(currentMentorIndex, "next");
    }
  };

  backButton.onclick = function () {
    if (currentMentorIndex > 1) {
      currentMentorIndex--;
      slideMentor(currentMentorIndex, "back");
    }
  };
}

function showMentor(index) {
  const mentors = document.getElementsByClassName("mentor-content");
  for (let i = 0; i < mentors.length; i++) {
    mentors[i].classList.remove("active", "previous", "next");
    mentors[i].style.visibility = "hidden"; // Ensure it's hidden
    mentors[i].style.transform = "translateX(100%)"; // Reset position
  }

  mentors[index - 1].classList.add("active");
  mentors[index - 1].style.visibility = "visible"; // Ensure it's visible
  mentors[index - 1].style.transform = "translateX(0%)"; // Center the active one

  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  // Show/hide the Back button
  if (index === 1) {
    backButton.style.display = "none";
  } else {
    backButton.style.display = "inline-block";
  }

  // Show/hide the Next button
  if (index === totalMentors) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function slideMentor(index, direction) {
  const mentors = document.getElementsByClassName("mentor-content");
  const currentMentor = mentors[index - 1];
  const previousMentor = mentors[direction === "next" ? index - 2 : index];

  previousMentor.classList.remove("active");
  currentMentor.classList.remove("previous", "next");

  // Set up for the slide animation
  if (direction === "next") {
    currentMentor.style.transform = "translateX(100%)"; // Start from right
    currentMentor.style.visibility = "visible"; // Ensure it's visible before sliding in
    requestAnimationFrame(() => {
      previousMentor.style.transform = "translateX(-100%)"; // Slide out to left
      previousMentor.style.visibility = "hidden"; // Hide previous mentor after sliding out
      currentMentor.style.transform = "translateX(0%)"; // Slide in from right
    });
  } else {
    currentMentor.style.transform = "translateX(-100%)"; // Start from left
    currentMentor.style.visibility = "visible"; // Ensure it's visible before sliding in
    requestAnimationFrame(() => {
      previousMentor.style.transform = "translateX(100%)"; // Slide out to right
      previousMentor.style.visibility = "hidden"; // Hide previous mentor after sliding out
      currentMentor.style.transform = "translateX(0%)"; // Slide in from left
    });
  }

  requestAnimationFrame(() => {
    currentMentor.classList.add("active");
    currentMentor.style.visibility = "visible"; // Make current mentor visible

    // Show/hide the Back button
    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    if (index === 1) {
      backButton.style.display = "none";
    } else {
      backButton.style.display = "inline-block";
    }

    if (index === totalMentors) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "inline-block";
    }
  });
}

// Initialize GSAP animations and Konami code
initGSAPAnimation();
initArrowAnimation();
initKonamiCode();
