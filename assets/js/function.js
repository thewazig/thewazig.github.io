$(document).ready(function(){
    $(function(){$('a[href^="#"]').on('click',function(e){e.preventDefault();var target=$(this.hash);$('html, body').stop().animate({'scrollTop':target.offset().top},500,'swing',function(){window.location.hash=none;});});})

    $(function(){$(window).on('scroll',function(){var wScroll=$(this).scrollTop();if(wScroll>$('#aboutMe').offset().top-1){$('.up').fadeIn('slow');}else{$('.up').fadeOut('slow');}})})

    $(function(){
        var didScroll,
        navHeight=$('.navTrigger').outerHeight(),
        scrollTop=$(window).scrollTop();
        
        $(window).on('scroll',function(){
            didScroll=true;});
        
        setInterval(function(){
            if(didScroll){
                hadScroll();
                didScroll=false;
            }},250);
        
        function hadScroll(){
            var currentScroll=$(window).scrollTop();
            if(currentScroll>scrollTop){
                $('.navTrigger').css({
                    'top' : '-10em',
                    'transition' : '0.3s'
                });
            }else{
                $('.navTrigger').css({
                    'top' : '2em',
                    'transition' : '0.3s'
                });
            }
            scrollTop=currentScroll;
        }})
    
    $(function (){
        $('.navTrigger ').on('click', function (){
            $('nav').css({
                'left' : '0',
                'transition' : '0.5s'
            });
        });
        $('nav').on('click', function (){
            $('nav').css({
                'left' : '-100vw',
                'transition' : '0.8s'
            });
        });
    })

    $(function () {
        var date = new Date().getFullYear();
        $('footer p').html('© '+date+' Washington Ferreira. All rights reserved');
    })

})