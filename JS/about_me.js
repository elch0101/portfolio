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
