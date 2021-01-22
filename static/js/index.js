TweenLite.set('body', { perspective: 700 });
var slides = document.querySelectorAll('.slide'), tl = new TimelineLite({ paused: true });
for (var i = 0; i < slides.length; i++) {
    //if(i!=0){tl.addPause('pause'+i)};
    if (i != slides.length - 1) {
        tl.to(slides[i], 0.7, { yPercent: -100 })
            .from(slides[i + 1], 0.7, { yPercent: 100 }, '-=0.7')
            .from(slides[i + 1].getElementsByTagName('span'), 1, { y: '100vh', ease: Back.easeInOut.config(2) }, '-=0.3')
            .addPause('pause' + i)
    };
};

function GO(e) {
    var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
    if (SD < 0) { tl.play() } else { tl.reverse() };
};
document.addEventListener("mousewheel", GO);
document.addEventListener("DOMMouseScroll", GO);