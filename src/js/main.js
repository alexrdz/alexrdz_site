// put your code here
// remember, you can use modules with browserify
$(function() {
  

  var windowHeight = window.innerHeight;
  var scrollArea = 1000 - windowHeight;
  var nav = $('nav');

  $(window).on('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;

    nav.css('margin-top', '-' + (scrollPercent*window.innerHeight/6) + 'px');
  });
  
});