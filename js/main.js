//hover tweenMax Sidebar
$(function (side_Nav_Animation) {

    var navAnim = new TimelineMax({ paused: true })
    navAnim.to("#navigation", 0.6, { x: 460, backgroundColor: "rgba(255, 255, 255, 1)", ease: SteppedEase.config(6) });
    
   
    var topAnim =  TweenMax.to("#top", 1.2, {paused:true, rotation:45, ease: Elastic.easeInOut.config(1.2, 2)});
    var bottomAnim =  TweenMax.to("#bottom", 1.2, {paused:true, y:-20, rotation:-45,  ease: Elastic.easeInOut.config(1.2, 2)});
    

    
    
    
    var sidebarBox = document.querySelector('.menuicon');
    var sidebarBtn = document.querySelector('#navigation');
    var pageWrapper = document.querySelector('#page-content');
    
    sidebarBtn.addEventListener('mouseenter', function (event) {
    
    
        if (this.classList.contains('active')) {
    
            this.classList.remove('active');
            sidebarBox.classList.remove('active');
        } else {
            navAnim.play();
            topAnim.play();
            bottomAnim.play();
            this.classList.add('active');
            sidebarBox.classList.add('active');
        }
    });
    
    sidebarBtn.addEventListener('mouseleave', function (event) {
    
        if (sidebarBox.classList.contains('active')) {
            navAnim.reverse();
            topAnim.reverse();
            bottomAnim.reverse();
            
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

