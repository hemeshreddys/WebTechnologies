var head = $("h1"),
    content = $("#content"),
    subhead = $("h2"),
    feature = $("#feature"),
    feature1 = $("#feature1"),
    feature2 = $("#feature2"),
    description = $("#description"),
    icons = $("#nav img"),
     btn = $("#but");
 
TweenLite.set(content, {visibility:"visible"})

//instantiate a TimelineLite    
var tl = new TimelineLite();
//add a from() tween at the beginning of the timline
//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
tl.to(head, 0.5, {y:50, opacity:1,delay:1});






