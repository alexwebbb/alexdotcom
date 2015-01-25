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
