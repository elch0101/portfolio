const curtain = gsap.timeline({defaults:{duration:.2, ease: "none"}})

var i;
var piece = "#piece";
var j;
var k=0;

for(i=0; i<18; i++){
    j=i.toString();

console.log(piece.concat(j));
curtain.to(piece.concat(j),{y:-44})
curtain.to(piece.concat(j),{opacity:0, duration:0})
}


