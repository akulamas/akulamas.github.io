jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }

});

$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });

$(function() {
  menu_top = $('.butt_m,.butt_r,.butt_p,.butt_t,.butt_a,.butt_c').offset().top;
  $(window).scroll(function (){
    if ($(window).scrollTop() > menu_top) {
      if ($('.menu').css('position') != 'fixed') {
        $('.menu').css('position','fixed');
          $('.menu').css('margin','0 auto');
        $('.menu,.butt_m,.butt_r,.butt_p,.butt_t,.butt_a,.butt_c').css('top','0');
           $('.menu').css('background','#5FB6D0');
        $('.content').css('margin-top','0%');
      }
    } else {
      if ($('.menu').css('position') == 'fixed') {
     $('.menu,.butt_m,.butt_r,.butt_p,.butt_t,.butt_a,.butt_c').css('position','');
        $('.menu,.butt_m,.butt_r,.butt_p,.butt_t,.butt_a,.butt_c').css('top','');
          $('.menu').css('margin','0 auto'); $('.menu,.butt_m,.butt_r,.butt_p,.butt_t,.butt_a,.butt_c').css('background','none');
        $('.content').css('margin-top','');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
      const slider = new ChiefSlider('.slider', {
        loop: false
      });
    });
