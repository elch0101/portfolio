
const curtain = gsap.timeline({defaults:{duration:.13, ease: "none"}})
const cat = gsap.timeline({scrollTrigger: {trigger: '#paw', start: "bottom 80%"}, defaults:{duration:.5, ease: "none", transformOrigin: "50%% 50%"}})


var i;
var piece = "#piece";
var j;

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

