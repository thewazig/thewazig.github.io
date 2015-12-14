$(document).ready(function() {
    
    //slideMobile
    $(function() {
        var menuIn = {'transform': 'translate(0,0)', 'transition': '0.4s'},
            menuOut = {'transform': 'translate(-100vw, 0)', 'transition': '0.4s'}
        //MenuIn
        $('.navTrigger p').on('click tap', function(){
            $('nav').css(menuIn);
        })
        $(document).on("swiperight",function(){
            $('nav').css(menuIn);
        })
        
        //MenuOut
        $('nav').on('click tap', function(){
            $('nav').css(menuOut);
        })
        $(document).on("swipeleft",function(){
            $('nav').css(menuOut);
        })
    })
});