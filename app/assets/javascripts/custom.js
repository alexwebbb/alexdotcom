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

// Fix for turbolinks

var reloadImages = $('.images').loop(function(e) {
  var url;
  if (!(e.attr('style') && e.attr('style').indexOf("url(") > -1)) {
    return;
  }
  url = e.attr('style').match(/url\((.*)\)/)[1];
  e.css('backgroundImage', "url(" + url + ")");
  return console.log("fixed bg image", url);
});



$(document).ready(ready);
$(document).on('page:load', ready);
$(document).on('page:change', reloadImages);
