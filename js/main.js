//hover tweenMax Sidebar
$(function (side_Nav_Animation) {

    var navAnim = new TimelineMax({ paused: true })
    navAnim.to("nav", 0.55, { x: 280, backgroundColor: "rgba(255, 255, 255, 1)", ease: SteppedEase.config(6) });
    var burgAnim = new TimelineMax({ paused: true })
    burgAnim.to("#top", 0.55, { x: 280, backgroundColor: "rgba(255, 255, 255, 1)", ease: SteppedEase.config(6) });
    
    
    
    var sidebarBox = document.querySelector('.menuicon');
    var sidebarBtn = document.querySelector('nav');
    var pageWrapper = document.querySelector('#page-content');
    
    sidebarBtn.addEventListener('mouseenter', function (event) {
    
    
        if (this.classList.contains('active')) {
    
            this.classList.remove('active');
            sidebarBox.classList.remove('active');
        } else {
            navAnim.play();
            this.classList.add('active');
            sidebarBox.classList.add('active');
        }
    });
    
    sidebarBtn.addEventListener('mouseleave', function (event) {
    
        if (sidebarBox.classList.contains('active')) {
            navAnim.reverse();
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }
    });
    
    window.addEventListener('keydown', function (event) {
    
        if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }
    });
});

//$(function (slide_Animation) {
//    TweenMax.to(".main-img", 10, {x:-20, y:-20,opacity:1, scaleX:1.25, scaleY:1.25,  transformOrigin:"center", ease:Power1.easeIn});
//    TweenMax.to(".cloud", 8, {x:50, y:-250,opacity:0.125, scaleX:0.75, scaleY:0.75,  transformOrigin:"center", ease:Power1.easeIn});
//    TweenMax.to(".bg-image", 12, {autoplay:true, opacity:0, ease:Power1.easeIn});

//});