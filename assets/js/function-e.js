// Função auto execultavel
$(function() {
// Execulta a função testBubbleClick()
  testBubbleClick();
  setInterval(function() {articleTada();}, 4000);
  startArticles();
//caso o tamanho da janela seja maior que 640px
  if($(window).width() > 640){
// execulta a função mentWideStart();
    mentWideStart();
//caso não seja maior que 640px
  }else{
// Execulta a função mentNarroeStar();
    mentNarroeStar();
  }
});

function mobileNav(){
  $('.mobile-nav-toggle').on('click', function() {
    var status = $(this).hasClass('is-open');
    if(status){$('.mobile-nav-toggle, .mobileNav').removeClass('is-open');}
    else{
      $('.mobile-nav-toggle, .mobileNav').addClass('is-open');
    };
  });
}

// better way to do a   self-invoking function on Jquery

(function ($) {
  "use strict"
    var $mobileNavToggleBtn = $('.mobile-nav-toggle'),
        $blankATags = $('a[href^="#"]')
        $body = $('html, body')
        settings = {
          duration: 300
        };

  $(document).ready(function() {

// Nav Toggle Click
    $mobileNavToggleBtn.on('click', function() {
      var $this = $(this),
          $selectors = $('mobileNav');
          // toggleClass() = addClass() and removeClass() at the same time
      $this.toggleClass('is-open');
      $selectors.toggleClass('is-open');
    }); // Closing $mobileNavToggleBtn.on('click', function() {});

// Smooth Scroll
    $blankATags.on('click', function(event) {
      var $this = $(this),
          href = $this.attr('href'),
          $target = $(href);

      if ($target.length > 0){
          event.preventDefault();
          $body.animate({
            scrollTop: target.offset().top
          }, settings.duration);
      }
    }); // Closing $blankATags.on('click', function() {});

  }) // Closing $('document').ready

})(jQuery);




function articleTada(){
// Procura os itens com a classe .thumb e repassa os valores dos mesmos
// aleatóriamente
  var randNum = Math.floor(Math.random()*$('.article-thumb').length)+1
// Pega os valores aleatéios e adiciona a classe que fará a animação acontecer
  $('.article-thumb').eq(randNum).addClass('is-emph')
// Seleciona os outros itens e remove a classe de animação para que apenas um
// deles seja capaz de gerar a animação por vez
    .siblings().removeClass('is-emph');
}

function designBgStuff(){
// Assim qu o mouse passar em cima de .design-img-link
('.design-img-link').hover(function() {
// Acha a cor e aplica ela no fundo (html = data-color="#{color}")
  $(this).parent().parent().css('background-color', $(this).data('color'));
}, function() {
// reseta a cor padrão quando o mouse sai de cima de .design-img-link
// (html = data-orig-color="#{color}") mixin
  $(this).parent().parent().css('background-color', $(this).data('orig-color'));
});
}


// Fade in dos article-thumb
function startArticles() {
  var wScroll = $(window).scrollTop();
// Caso a section.articles seja menor que o top da div menos o tamanho total da janela
  if($('section.articles').offset().top - $(window).height()/2 < wScroll){
// cria uma função para cada um dos itens de (.article-thumb)
    $('.article-thumb').each(function(i) {
// cria um temporizador que vai disparar a cada 200ms * o numero do thumb em questão
// primeiro: 200*1, segundo: 200*2 ...
      setTimeout(function() {
        $('.article-thumb').eq(i).addClass('is-visible')
      }, 200 * i);
    });
  }
}

// on click
function testBubbleClick() {
// Assim que uma fac receber o evento (click)
  $(".face").on('click', function () {
// Variaveis
//Coloca (.face) em uma variavel, para que o código só precise carrega-la 1x
    var $this = $(this),
// Diferente do offset().top que pega os valores do topo da janela do navegador
// position().top pega os valores do topo do elemento selecionado
        faceTop = $this.position().top,
// a intenção desse cálculo é fazer com que a face clicada fique exatamente
// no meio da janela, para isso é preciso pegar a posição da mesma em relação
// ao topo da div a qual ela faz parte e calcular a distancia
// cada face tem 80px de altura e 35px de margin-bottom, somando 115px
        vertMath = -1*(faceTop - 230);
// Padrões similares aos de cima, mas dessa vez posicionados pela esquerda
        faceLeft = $this.position().left,
        horzMath = 0 - faceLeft;
// Caso a tela seja maior que 640px
    if($(window).width() > 640){
// Assim que a face é clicada, o código usa a versão negativa da vertMath
//para mover a div parent, posicionando-a no centro da sessão
      $this.parent().css('top', + vertMath + 'px');
// Caso não
    }else{
// Procura se a classe (.face) tem a classe (.backButton) ligada a ela
      if($this.hasClass('backButton')){
// Em caso positivo, ele chama a função que reseta as posições do container
        mentNarroeStar();
// Caso ele nao ache a classe (.backButton) integrada a (.face)
      }else{
// Execulta o comando de reposicionamento do container  de acordo com a posição
// da face clicada no eixo horizontal
        $this.parent().css('left', + horzMath + 'px');
      }
    };
// Caso a classe (.face) não tenha a classe (.backButton) interligada a ela
    if(!$this.hasClass('backButton')){
// Adiciona a classe (.hasBubbleOpen), deixando visivel a classe (.bubble)
          $this.addClass('hasBubbleOpen')
// más ao clicar em uma outra face o codigo seleciona os outros elementos que
// dividem o mesmo (parent) e removem a classe, fechando assim a (.bubble)
            .siblings().removeClass('hasBubbleOpen');

    }
  });
}

//on Scroll
$(window).on('scroll', function() {
  startArticles();
//colocando o Window em uma variavel
  var $this = $(this),
// pegando os valores de scroll a partir do topo da página
      wScroll = $this.scrollTop();
// Se o topo da sessão -metade do tamanho da página, for menor que o valor de scroll
      if($('section.mentoring').offset().top - $(window).height()/2 < wScroll){
// Caso a janela seja maior que 640px
        if($(window).width() > 640 ){
// Adiciona a classe lauched que retorna a posição de (.faces) para (top: 0)
          $('.faces').addClass('lauched');
// Caso nao haja nenhuma bubble aberta....
          if(!$('.face').hasClass('hasBubbleOpen')){
// Abre uma .bubble automática na terceira face.(face do meio nesse caso)
// após um timeout de 500 milisegundos
            setTimeout(function() {
              $('.face:nth-child(3)').addClass('hasBubbleOpen');
            }, 500);
          };
// Caso a janela nao seja maior que 640px
        }else{
          mentNarroeStar();
        }

      };
});
// este comando vai assistir a todas tentativas de redimencionamento da janela
$(window).resize(function() {
//caso o tamanho da janela seja maior que 640px
  if($(window).width() > 640){
// execulta a função mentWideStart();
    mentWideStart();
//caso não seja maior que 640px
  }else{
// Execulta a função mentNarroeStar();
    mentNarroeStar();
  }
});
// função que será chamada quando a janela for menor que 640px
function mentNarroeStar() {
// Muda os parametros do css
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  // Quando em mobile a bubble aberta mudará automaticamente para a primeira
  //ao invez da terceira
  $('.face').first().addClass('hasBubbleOpen').siblings().removeClass('hasBubbleOpen');
};
// função que será chamada quando a janela for maior que 640px
function mentWideStart(){
// Muda os parametros do css
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
// Volta para os padrões de tela grande, onde a bubble é aberta na terceira face
  $('.face:nth-child(3)').first().addClass('hasBubbleOpen').siblings().removeClass('hasBubbleOpen');
};
