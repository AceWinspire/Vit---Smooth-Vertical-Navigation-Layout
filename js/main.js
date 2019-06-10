//hover tweenMax Sidebar
$(function (side_Nav_Animation) {
    var navAnim = new TimelineMax({ paused: true })
    navAnim.to("#navigation", 0.6, { x: 260, backgroundColor: "rgba(255, 255, 255, 1)", ease: SteppedEase.config(6) });
    var menuAnim = TweenMax.to("nav.active .nav-top", 1.6, { paused: true, opacity: 1, ease: Power1.easeIn });
    var topAnim = TweenMax.to("#top", 1.2, { paused: true, rotation: 45, ease: Elastic.easeInOut.config(1.2, 2) });
    var bottomAnim = TweenMax.to("#bottom", 1.2, { paused: true, y: -20, rotation: -45, ease: Elastic.easeInOut.config(1.2, 2) });
    var contOne = TweenMax.to(".one", 1.1, { paused: true, opacity: 1, ease: Power1.easeIn });
    var contTwo = TweenMax.to(".two", 1.2, { paused: true, opacity: 1, ease: Power1.easeIn });
    var contThree = TweenMax.to(".three", 1.3, { paused: true, opacity: 1, ease: Power1.easeIn });
    var contFour = TweenMax.to(".four", 1, { paused: true, opacity: 1, ease: Power1.easeIn });
    var contFive = TweenMax.to(".five", 1.2, { paused: true, opacity: 1, ease: Power1.easeIn });
    var contSix = TweenMax.to(".six", 1.3, { paused: true, opacity: 1, ease: Power1.easeIn });
    var logoBtn = document.querySelector('.logo');
    var sidebarBox = document.querySelector('.menuicon');
    var sidebarBtn = document.querySelector('#navigation');
    var mobileMenu = document.querySelector('nav');
    var pageWrapper = document.querySelector('#page-content');
    logoBtn = sidebarBtn;

    sidebarBtn.addEventListener('mouseenter', function (event) {


        if (this.classList.contains('active')) {

            this.classList.remove('active');
            sidebarBox.classList.remove('active');
        } else {
            navAnim.play();
            topAnim.play();
            bottomAnim.play();

            contOne.play();
            contTwo.play();
            contThree.play();
            contFour.play();
            contFive.play();
            contSix.play();
            menuAnim.play();
            this.classList.add('active');
            sidebarBox.classList.add('active');
            mobileMenu.classList.add('active');
        }
    });

    sidebarBtn.addEventListener('mouseleave',  function (event) {

        if (sidebarBox.classList.contains('active')) {
            navAnim.reverse();
            topAnim.reverse();
            bottomAnim.reverse();
            contOne.reverse();
            contTwo.reverse();
            contThree.reverse();
            contFour.reverse();
            contFive.reverse();
            contSix.reverse();
            menuAnim.reverse();
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    window.addEventListener('keydown', function (event) {

        if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }
    });
});

$(function (MobileFixClick) {
    $('.menuicon').on('click', function (event) {
        $("nav").hide();
    });
});