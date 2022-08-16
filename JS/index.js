const plants= gsap.timeline({defaults: {duration: 3}})

const progressBar=gsap.timeline({scrollTrigger: {trigger: '#languages', toggleActions: "restart restart none none"}, defaults: {duration: 1.5}})

const timeLine=gsap.timeline({scrollTrigger: {trigger: '.tl-container'}, defaults: {duration: 1}})

const process=gsap.timeline({scrollTrigger: {trigger: '#process', toggleActions: "restart restart none none"}, default: {duration: 1}, transformOrigin: "center center"})

const clock= gsap.timeline({defaults: {duration: .5, transformOrigin: "0% 50%", ease: "none"}})

// ----- * PLANT * -----//

plants.fromTo('#plant', {x: 300}, {x: 0, ease: "elastic.out(1, 1)"})

// ----- * PROGRESS-BARS * -----//

progressBar.fromTo('.progress-bar', {x: -186}, {x: 0, ease: "power1.in"})

// ----- * TIMELINE * -----//

timeLine.fromTo('#ex1', {opacity: 0}, {opacity: 1})
timeLine.fromTo('#ex2', {opacity: 0}, {opacity: 1})
timeLine.fromTo('#ex3', {opacity: 0}, {opacity: 1})
timeLine.fromTo('#ex4', {opacity: 0}, {opacity: 1})

// ----- * PROCESS * -----//
process.to('#arrow1', {x: 10, ease: "power1.in"})
process.to('#arrow1', {x: 0, ease: "power1.in"})
process.to('#arrow2', {x: 10, ease: "power1.in"}, '<')
process.to('#arrow2', {x: 0, ease: "power1.in"})
process.to('#arrow3', {x: 10, ease: "power1.in"}, '<')
process.to('#arrow3', {x: 0, ease: "power1.in"})
process.to('#arrow4', {x: 10, ease: "power1.in"}, '<')
process.to('#arrow4', {x: 0, ease: "power1.in"})
process.to('#arrow5', {x: 10, ease: "power1.in"}, '<')
process.to('#arrow5', {x: 0, ease: "power1.in"})
process.repeat(-1);

// ------- * CLOCK * -----//

function showTime(){
    let userTime = new Date();
    let hours = userTime.getHours();
    let minutes = userTime.getMinutes();    
    let seconds = userTime.getSeconds()+1; 
    
    if(hours>12){
        hours-=12;
    }

    let hoursTxt = ((((360/12)*hours)+(30/60)*minutes)-90).toString().concat("_cw");
    let minutesTxt = (((360/60)*minutes)-90).toString().concat("_cw");
    let secondsTxt = (((360/60)*seconds)-90).toString().concat("_cw");

    clock.to('#hours', {rotation: hoursTxt})
    clock.to('#minutes', {rotation: minutesTxt}, '<')
    clock.to('#seconds', {rotation: secondsTxt}, '<')
    
    setTimeout(showTime, 1000);
}

showTime();





