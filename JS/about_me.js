const curtain = gsap.timeline({defaults:{duration:.1, ease: "none"}})

var i;
var piece = "#piece";
var j;
var k=918;

for(i=0; i<18; i++){
    j=i.toString();
k-=51

console.log(piece.concat(j));
curtain.to(piece.concat(j),{y:-52})
curtain.to(piece.concat(j),{opacity:0},'<')
}


