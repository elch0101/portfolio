
const curtain = gsap.timeline({defaults:{duration:.13, ease: "none"}})
const cat = gsap.timeline({scrollTrigger: {trigger: '#paw', start: "bottom 80%"}, defaults:{duration:.5, ease: "none", transformOrigin: "50%% 50%"}})


var i;
var piece = "#piece";
var j;
var star = "#Star";

for(i=1; i<18; i++){
    j=i.toString();

curtain.to(piece.concat(j),{y:-44})
curtain.to(piece.concat(j),{opacity:0, duration:0})
}

cat.to('#paw',{rotation:"45deg"},)
cat.to('#paw',{rotation:"0"})
cat.repeat(1);

dt1 = new Date("July 31, 2020");
dt2 = new Date();
document.querySelectorAll('.years').forEach(function(element) {
    element.innerHTML = diff_years(dt1, dt2)+"+";
  });

function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }


// Select all the stars in the SVG
var stars = document.querySelectorAll('#Star');

// Create an array to store the indices of the stars that have already shimmered
var shimmeredStars = [];

// Function to shimmer a random star
function shimmerRandomStar() {
  // Choose a random star that has not yet shimmered
  var star;
  do {
    var randomIndex = Math.floor(Math.random() * stars.length);
    star = stars[randomIndex];
  } while (shimmeredStars.includes(randomIndex));
  
  // Add the index of the chosen star to the shimmeredStars array
  shimmeredStars.push(randomIndex);
  
  // Use GSAP to animate the shimmer effect
  TweenMax.to(star, 0.5, {
    scale: 2,
    repeat: 1,
    yoyo: true,
    onComplete: function() {
      // Reset the scale of the star when the animation is complete
      star.style.transform = 'scale(1)';
      
      // If all the stars have shimmered, reset the shimmeredStars array
      if (shimmeredStars.length === stars.length) {
        shimmeredStars = [];
      }
    }
  });
}

// Call the shimmerRandomStar function every 2 seconds
setInterval(shimmerRandomStar, 2000);
