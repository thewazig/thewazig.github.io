$(document).ready(function () {
   //Smooth Scroll
    $(function () {
      $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
            var target = $(this.hash);
          $('html, body').stop().animate({
              'scrollTop': target.offset().top
          }, 500, 'swing', function () {
              window.location.hash= none;
          });
      });
    })
    //UpButton
    $(function () {
        $(window).on('scroll', function () {
           var wScroll = $(this).scrollTop();
            
        //up button
            
        if(wScroll > $('#aboutMe').offset().top -1){
            $('.up').fadeIn('slow');
        } else {
            $('.up').fadeOut('slow');
        }
        })
    })
    //MenuScroll
    $(function () {
        var didScroll,
            navHeight = $('nav').outerHeight(),
            scrollTop = $(window).scrollTop();
        $(window).on('scroll', function () {
            didScroll = true;
        });
        setInterval(function () {
            if(didScroll){
                hadScroll();
                didScroll = false;
            }
        }, 250);
        
        function hadScroll () {
            var currentScroll = $(window).scrollTop();
            if(currentScroll > scrollTop && currentScroll > navHeight){
                $('nav').addClass('hidden');
            } else {
                $('nav').removeClass('hidden');
            }
            scrollTop = currentScroll;       
        }
        
    })
    //Paralax
    $(function(){
        $(window).on('scroll', function () {
            var ScrollTop = $(this).scrollTop(),
                wHeight = 600;
            
            if(ScrollTop > $('#servicesWrapper').offset().top - 400){
                $('.articles').css({
                    'animation': 'servicesDown 1.2s ease-in-out forwards'
                });
                
                $('.design .servImg, .developement .servImg').css({
                    'animation': 'imageServices 0.8s ease-in-out 1.2s forwards'
                });
            
                $('.social .servImg, .more .servImg').css({
                    'animation': 'imageServices 0.8s ease-in-out 1.4s forwards'
                });
            }
            
            if(ScrollTop > $('.briefing').offset().top - wHeight){
                $('.briefing').css({
                    'animation': 'howLeft 1.1s ease-in-out forwards'
                });
                $('.briefing .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
            if(ScrollTop > $('.planning').offset().top - wHeight){
                $('.planning').css({
                    'animation': 'howRight 1.1s ease-in-out forwards'
                });
                $('.planning .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
            if(ScrollTop > $('.formalizing').offset().top - wHeight){
                $('.formalizing').css({
                    'animation': 'howLeft 1.1s ease-in-out forwards'
                });
                $('.formalizing .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
            if(ScrollTop > $('.creating').offset().top - wHeight){
                $('.creating').css({
                    'animation': 'howRight 1.1s ease-in-out forwards'
                });
                $('.creating .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
            if(ScrollTop > $('.developing').offset().top - wHeight){
                $('.developing').css({
                    'animation': 'howLeft 1.1s ease-in-out forwards'
                });
                $('.developing .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
            if(ScrollTop > $('.finishing').offset().top - wHeight){
                $('.finishing').css({
                    'animation': 'howRight 1.1s ease-in-out forwards'
                });
                $('.finishing .elipse').css({
                    'animation' : 'elipse 0.8s ease-in-out 0.8s forwards'
                });
            }
                
        })
    })
    //footer
    $(function () {
        var date = new Date().getFullYear();
        $('footer p').html('© ' + date + ' Washington Ferreira all rights reserved');
    })
})
