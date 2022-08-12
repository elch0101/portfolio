const plants= gsap.timeline({defaults: {duration: 3}})
const progressBar=gsap.timeline({scrollTrigger:{trigger: '#languages', toggleActions: "restart restart none none"},defaults: {duration: 1.5}})
const timeLine=gsap.timeline({scrollTrigger:{trigger: '.timeLine-container'},defaults: {duration:.75}})
const arrows=gsap.timeline({scrollTrigger:{trigger: '#process', toggleActions: "restart restart none none"}, default: {duration:.5},transformOrigin:"center center"})
const clock= gsap.timeline({defaults: {duration: .5,transformOrigin:"0%  center", toggleActions: "restart restart none none"}})

//Plants
plants.fromTo('#plant_left',{x: -300}, {x:0, ease: "elastic.out(1, 1)"} )
plants.fromTo('#plant_right', {y:300}, {y:0, ease: "elastic.out(1, 1)"}, '<')

//Progress-bars
progressBar.from('.progress-bar',{x:-186, ease: "power1.in"})
progressBar.to('.progress-bar',{x:0})

//Timeline
timeLine.fromTo('#ex1', {opacity:0}, {opacity:1})
timeLine.fromTo('#ex2', {opacity:0}, {opacity:1})
timeLine.fromTo('#ex3', {opacity:0}, {opacity:1})
timeLine.fromTo('#ex4', {opacity:0}, {opacity:1})


//Process
arrows.to('#arrow1', {x:10, ease: "power1.in"})
arrows.to('#arrow1', {x:0, ease: "power1.in"})
arrows.to('#arrow2', {x:10, ease: "power1.in"})
arrows.to('#arrow2', {x:0, ease: "power1.in"})
arrows.to('#arrow3', {x:10, ease: "power1.in"})
arrows.to('#arrow3', {x:0, ease: "power1.in"})
arrows.to('#arrow4', {x:10, ease: "power1.in"})
arrows.to('#arrow4', {x:0, ease: "power1.in"})
arrows.to('#arrow5', {x:10, ease: "power1.in"})
arrows.to('#arrow5', {x:0, ease: "power1.in"})
arrows.repeat(-1);


//Clock
function showTime(){
    var userTime = new Date();
    var hours=userTime.getHours()-12;
    var minutes=userTime.getMinutes()+1;    
    var seconds=userTime.getSeconds()+1;  

    var hoursTxt = (((360/12)*hours)-90).toString().concat("_cw");
    var minutesTxt = (((360/60)*minutes)-90).toString().concat("_cw");
    var secondsTxt = (((360/60)*seconds)-90).toString().concat("_cw");

    clock.to('#hours', {rotation:hoursTxt})
    clock.to('#minutes', {rotation:minutesTxt},'<')
    clock.to('#seconds', {rotation:secondsTxt}, '<')
    
    setTimeout(showTime,1000);
}

showTime();





