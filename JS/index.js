const plants = gsap.timeline({ defaults: { duration: 3 } });

const progressBar = gsap.timeline({
  scrollTrigger: {
    trigger: "#languages",
    toggleActions: "play none none reset",
  },
  defaults: { duration: 1.5 },
});

const timeLine = gsap.timeline({ defaults: { duration: 10 } });

const process = gsap.timeline({
  scrollTrigger: {
    trigger: "#process",
    toggleActions: "restart restart none none",
  },
  default: { duration: 1 },
  transformOrigin: "80% 70%",
});

const clock = gsap.timeline({
  defaults: { duration: 0.5, transformOrigin: "0% 50%", ease: "none" },
});

const down = gsap.timeline({
  defaults: { duration: 1, yoyo: true, repeat: -1 },
});

// ----- * PLANT * -----//

plants.fromTo("#plant", { x: 300 }, { x: 0, ease: "elastic.out(1, 1)" });

// ----- * PROGRESS-BARS * -----//

progressBar.to("#progress", { width: "100%" });

// ----- * TIMELINE * -----//

timeLine.to("#ex1", {
  scrollTrigger: {
    trigger: "#ex1",
    start: "top 80%",
    end: "80% 70%",
    scrub: 1.5,
  },
  opacity: 1,
});
timeLine.to("#ex2", {
  scrollTrigger: {
    trigger: "#ex2",
    start: "top 80%",
    end: "80% 70%",
    scrub: 1.5,
  },
  opacity: 1,
});
timeLine.to("#ex3", {
  scrollTrigger: {
    trigger: "#ex3",
    start: "top 80%",
    end: "80% 70%",
    scrub: 1.5,
  },
  opacity: 1,
});
timeLine.to("#ex4", {
  scrollTrigger: {
    trigger: "#ex4",
    start: "top 80%",
    end: "80% 70%",
    scrub: 1.5,
  },
  opacity: 1,
});

// ----- * PROCESS * -----//
process.to("#arrow1", { x: 10, ease: "power1.in" });
process.to("#arrow1", { x: 0, ease: "power1.in" });
process.to("#arrow2", { x: 10, ease: "power1.in" }, "<");
process.to("#arrow2", { x: 0, ease: "power1.in" });
process.to("#arrow3", { x: 10, ease: "power1.in" }, "<");
process.to("#arrow3", { x: 0, ease: "power1.in" });
process.to("#arrow4", { x: 10, ease: "power1.in" }, "<");
process.to("#arrow4", { x: 0, ease: "power1.in" });
process.to("#arrow5", { x: 10, ease: "power1.in" }, "<");
process.to("#arrow5", { x: 0, ease: "power1.in" });
process.repeat(-1);

// ------- * CLOCK * -----//

function showTime() {
  var userTime = new Date();
  var hours = userTime.getHours();
  var minutes = userTime.getMinutes();
  var seconds = userTime.getSeconds() + 1;

  if (hours > 12) {
    hours -= 12;
  }

  var hoursTxt = ((360 / 12) * hours + (30 / 60) * minutes - 90)
    .toString()
    .concat("_cw");
  var minutesTxt = ((360 / 60) * minutes - 90).toString().concat("_cw");
  var secondsTxt = ((360 / 60) * seconds - 90).toString().concat("_cw");

  clock.to("#hours", { rotation: hoursTxt });
  clock.to("#minutes", { rotation: minutesTxt }, "<");
  clock.to("#seconds", { rotation: secondsTxt }, "<");

  setTimeout(showTime, 1000);
}

showTime();

// ------- * DOWN ICON * -----//

down.fromTo("#Down", { y: -5 }, { y: 5, ease: "sine.inOut" });

console.log(
  "<<<-------------------------------------------------------------------------------------------------------->>>"
);
console.log(
  "If you're reading this, you're probably looking for bugs... or just curious. Either way, enjoy peeking around!"
);
console.log(
  "<<<-------------------------------------------------------------------------------------------------------->>>"
);
