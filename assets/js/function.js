$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick() {
  $('.face').on('click',function() {
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath = -1 *(faceTop - 230);
        faceLeft = $this.position().left,
        horzMath = 0 - faceLeft;

    if($(window).width() > 640){
      $this.parent().css('top', + vertMath + 'px');
      }else{
        if($this.hasClass('backButton')){
          narrowStart();
        }else {
          $this.parent().css('left', + horzMath + 'px');
        }
      }
      if(!$this.hasClass('backButton')){
        $this.addClass('hasBubbleOpen').siblings().removeClass('hasBubbleOpen');
      }
    });
}

// Scroll Functions

$(window).scroll(function() {
  startMentoring();
})

function startMentoring() {
  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - 600 < wScroll){
    if($(window).width() > 640){
      $('.faces').addClass('lauched');
        if(!$('.face').hasClass('hasBubbleOpen')){
          setTimeout(function() {
            $('.face:nth-child(3)').addClass('hasBubbleOpen');
          }, 300)
        };
    }else {
      narrowStart()
    }
  };
};

function narrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0'
  });
  $('.face').first().addClass('hasBubbleOpen').siblings().removeClass('hasBubbleOpen');
};

function wideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0'
  });
  $('.face:nth-child(3)').addClass('hasBubbleOpen').siblings().removeClass('hasBubbleOpen');
};

$(window).resize(function(){
  if($(window).width() > 640){
    wideStart();
  }else{
    narrowStart();
  }
});
