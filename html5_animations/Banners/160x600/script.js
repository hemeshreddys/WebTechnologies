var head = $("h1"),
    content = $("#content"),
    subhead = $("h2"),
    feature = $("#feature"),
    description = $("#description"),
    icons = $("#nav img"),
     btn = $("#but");
 
TweenLite.set(content, {visibility:"visible"})

//instantiate a TimelineLite    
var tl = new TimelineLite();
tl.from(btn, 0.1, {left:-100,opacity:0}, "+=0.5");
//add a from() tween at the beginning of the timline
//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
tl.from(feature, 0.5, {x:-200, autoAlpha:0}, "+=0.5");
tl.from(description, 0.5, {left:100, autoAlpha:0}, "+=0.25");
tl.to(description, 0.5, {opacity:0}, "+=0.25");
tl.to(feature, 0.5, {opacity:0}, "+=0.5");

tl.from(feature1, 0.5, {x:-200, autoAlpha:0}, "+=0.5");
tl.from(subhead, 0.5, {left:-100, opacity:0}, "+=0.5");
tl.to(subhead, 0.5, {opacity:0}, "+=0.5");
tl.to(feature1, 0.5, {opacity:0}, "+=0.5");
tl.from(head, 0.5, {left:100, opacity:0}, "+=0.5");





