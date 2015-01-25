var ready;
ready = function() {

  $(".p1").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g1').toggleClass('active');
 
    });

  $(".p2").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g2').toggleClass('active');
 
    });

  $(".p3").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g3').toggleClass('active');
 
    });

  $(".p4").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g4').toggleClass('active');
 
    });

  $(".p5").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g5').toggleClass('active');
 
    });

  $(".p6").click(function () {

  	  $('.active').removeClass('active');
 
	  $('.g6').toggleClass('active');
 
    });

};




$(document).ready(ready);
$(document).on('page:load', ready);

// http://carlosbecker.com/posts/turbolinks/ turbolinks fix

var reloadImages = function() {
  var styles, style, url, _i, _len, _el;
  styles = Array.prototype.slice.call(document.body.querySelectorAll('[style]'));
  for (_i = 0, _len = styles.length; _i < _len; _i++) {
    _el = styles[_i]
    style = _el.getAttribute('style');
    if (!(style.indexOf('url(') > -1)) {
      continue;
    }
    url = style.match(/url\((.*)\)/)[1];
    _el.style.backgroundImage = 'url(' + url + ')';
  }
}
$(document).on('page:load', function() {
  reloadImages();
});