$(function() {
  

  // Desktop Navigation
  /*----------------------------------------------------------------*/  
  var windowHeight = window.innerHeight;
  var scrollArea = 1000 - windowHeight;
  var nav = $('nav');

  if(windowHeight > 600) {
    $(window).on('scroll', function() {
      var scrollTop = window.pageYOffset || window.scrollTop;
      var scrollPercent = scrollTop/scrollArea || 0;

      nav.css('margin-top', '-' + (scrollPercent*window.innerHeight/8) + 'px');
    });
  }


  // Responsive Navigation
  /*----------------------------------------------------------------*/  
  var $body = $('body'),
      $trigger = $('.js-nav-trigger');

  $trigger.on('click', function() {
    ($trigger, $body).toggleClass('is-active'); 
  });



  // Scroll to About
  /*----------------------------------------------------------------*/  
  var aboutnav = $('.about'),
      target = $('#about');

  aboutnav.on('click', function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
  });




  
});