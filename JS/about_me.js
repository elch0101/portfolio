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
  const arrowTimeline = gsap.timeline({ repeat: -1, defaults: { duration: 0.3, ease: "power1.inOut" } });

  arrowTimeline
    .to("#Arrow1", { y: "-10px" }) // Up
    .to("#Arrow1", { y: "0px" })
    .to("#Arrow1", { y: "-10px" }) // Repeat Up
    .to("#Arrow1", { y: "0px" })

    .to("#Arrow2", { y: "-10px" }) // Up
    .to("#Arrow2", { y: "0px" })
    .to("#Arrow2", { y: "-10px" }) // Repeat Up
    .to("#Arrow2", { y: "0px" })

    .to("#Arrow3", { x: "-10px" }) // Left
    .to("#Arrow3", { x: "0px" })
    .to("#Arrow3", { x: "-10px" }) // Repeat Left
    .to("#Arrow3", { x: "0px" })

    .to("#Arrow4", { x: "-10px" }) // Left
    .to("#Arrow4", { x: "0px" })
    .to("#Arrow4", { x: "-10px" }) // Repeat Left
    .to("#Arrow4", { x: "0px" })

    .to("#Arrow5", { y: "10px" }) // Down
    .to("#Arrow5", { y: "0px" })
    .to("#Arrow5", { y: "10px" }) // Repeat Down
    .to("#Arrow5", { y: "0px" })

    .to("#Arrow6", { y: "10px" }) // Down
    .to("#Arrow6", { y: "0px" })
    .to("#Arrow6", { y: "10px" }) // Repeat Down
    .to("#Arrow6", { y: "0px" })

    .to("#Arrow7", { x: "10px" }) // Right
    .to("#Arrow7", { x: "0px" })
    .to("#Arrow7", { x: "10px" }) // Repeat Right
    .to("#Arrow7", { x: "0px" })

    .to("#Arrow8", { x: "10px" }) // Right
    .to("#Arrow8", { x: "0px" })
    .to("#Arrow8", { x: "10px" }) // Repeat Right
    .to("#Arrow8", { x: "0px" });
}

// Konami Code Easter egg
function initKonamiCode() {
  const konamiCode = [38, 38, 37, 37, 40, 40, 39, 39];
  let konamiIndex = 0;

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerConfetti();
        showSpecialMessage();
        konamiCodePosition = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}


  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  document.getElementById('openModalButton').onclick = function() {
    showSpecialMessage();
  };

  let currentMentorIndex = 1;
const totalMentors = document.getElementsByClassName('mentor-content').length;

function showSpecialMessage() {
  // Reset to the first mentor when the modal is opened
  currentMentorIndex = 1;
  
  const modal = document.getElementById('konamiModal');
  const span = document.getElementsByClassName('close')[0];
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');

  modal.style.display = 'block';

  // Show the first mentor's content initially
  showMentor(currentMentorIndex);

  // Close the modal when the close button is clicked
  span.onclick = function() {
    modal.style.display = 'none';
  }

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  // Handle the "Next" button click
  nextButton.onclick = function() {
    if (currentMentorIndex < totalMentors) {
      currentMentorIndex++;
      showMentor(currentMentorIndex);
    }
  }

  // Handle the "Back" button click
  backButton.onclick = function() {
    if (currentMentorIndex > 1) {
      currentMentorIndex--;
      showMentor(currentMentorIndex);
    }
  }
}

function showMentor(index) {
  // Hide all mentor content
  const mentors = document.getElementsByClassName('mentor-content');
  for (let i = 0; i < mentors.length; i++) {
    mentors[i].style.display = 'none';
  }

  // Show the current mentor's content
  mentors[index - 1].style.display = 'block';

  // Show or hide the back and next buttons
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');

  if (index === 1) {
    backButton.style.display = 'none';
  } else {
    backButton.style.display = 'inline-block';
  }

  if (index === totalMentors) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'inline-block';
  }
}


  


// Initialize GSAP animations and Konami code
initGSAPAnimation();
initArrowAnimation();
initKonamiCode();
