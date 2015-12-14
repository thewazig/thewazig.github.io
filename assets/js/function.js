$(document).ready(function() {
    //slideMobile
    $(function() {
        //MenuIn
        $('.navTrigger p').on('click tap', function(){
            $('nav').css({
                'transform': 'translate(0, 0)',
                'transition': '0.4s'
            });
        })
        $('html, body').on('swiperight', function(){
            alert('hi');
        })
        //MenuOut
        $('nav').on('click tap', function(){
            $('nav').css({
                'transform': 'translate(-100vw, 0)',
                'transition': '0.4s'
            });
        })
        $('html, body').on('swipeleft', function(){
            $('nav').css({
                'transform': 'translate(-100vw, 0)',
                'transition': '0.4s'
            });
        })
    })
});