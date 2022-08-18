const curtain = gsap.timeline({defaults:{duration:.13, ease: "none"}})

var i;
var piece = "#piece";
var j;

for(i=1; i<18; i++){
    j=i.toString();

curtain.to(piece.concat(j),{y:-44})
curtain.to(piece.concat(j),{opacity:0, duration:0})
}


