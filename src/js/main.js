var swiper = new Swiper ('.swiper', {
  loop: false,
  allowTouchMove: true,
  effect: 'fade',
  speed: 300,
  autoplay: {
    delay: 5000,
  }
})        

var swiperProducts = new Swiper ('.swiper-products', {
  loop: false,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

$(document).ready(function(){
    $('.none a').click(function(e){
      e.preventDefault();
      var id = $(this).attr('href');
      var targetOffset = $(id).offset().top;

      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000);
      
    })

    // MENU
    $(function(){   
      var nav = $('header');   
      $(window).scroll(function () { 
          if ($(this).scrollTop() > 150) { 
              nav.addClass("sticky");
              $('.cakes').css('padding-top', 70);
          } else { 
              nav.removeClass("sticky"); 
              $('.cakes').css('padding-top', 0);
          } 
      });  
    });

    $('.mobile-nav-icon').click(function(){
      var nav = $('.main');
      nav.slideToggle(200);
    });
});