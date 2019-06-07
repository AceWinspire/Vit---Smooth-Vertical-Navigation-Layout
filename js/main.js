//hover tweenMax Sidebar
$(function (side_Nav_Animation) {


});
var tl = new TimelineMax({ paused: true })
tl.to("nav", 0.35, { x: 280, backgroundColor: "rgba(255, 255, 255, 1)", ease: SteppedEase.config(6) });



var sidebarBox = document.querySelector('.menuicon');
var sidebarBtn = document.querySelector('nav');
var pageWrapper = document.querySelector('#page-content');

sidebarBtn.addEventListener('mouseenter', function (event) {


    if (this.classList.contains('active')) {

        this.classList.remove('active');
        sidebarBox.classList.remove('active');
    } else {
        tl.play();
        this.classList.add('active');
        sidebarBox.classList.add('active');
    }
});

sidebarBtn.addEventListener('mouseleave', function (event) {

    if (sidebarBox.classList.contains('active')) {
        tl.reverse();
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
