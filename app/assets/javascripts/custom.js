var ready;
ready = function() {

	var c1 = "#4bff8b";
	var c5 = "#ff65ab";
	var c5l = "#ffa3cd";
	var c5xl = "#ffd1e6";
	var c6 = "#fff849";


	var shadowChange = function(x) {

	  var active = $('.gallery').find('.active');

  	  TweenLite.to(active, 0.5, {
        boxShadow:"10px 10px 5px " + c6
        });

  	  $('.active').removeClass('active');

      TweenLite.to(x, 0.5, {
        boxShadow:"3px 3px 0px " + c1
        });

	};

    var boxEffectIn = function () {
  
      if(!$(this).hasClass('active')) {
        TweenLite.to($(this), 0.5, {
          boxShadow:"10px 10px 0px " + c1
        });
      }
    };

    var boxEffectOut = function () {
  
      if(!$(this).hasClass('active')) {
        TweenLite.to($(this), 0.5, {
          boxShadow:"10px 10px 5px " + c6
        });
      }
    };

//    var bgcEffectIn = function () {
//  
//      if(!$(this).hasClass('active')) {
//        TweenLite.to($(this), 0.5, {
//          backgroundColor: c5x1
//        });
//      }
//    }
//
//    var bgcEffectOut = function () {
//  
//      if(!$(this).hasClass('active')) {
//        TweenLite.to($(this), 0.5, {
//          backgroundColor: c5l
//        });
//      }
//    }
   
  
    $(".xl-button").click(function () {
  
   
  	  $('.home-top').toggleClass('switch');
  
    });


    $('.gallery img').on('mouseenter', boxEffectIn).on('mouseleave', boxEffectOut);

//    $('.xl-button').on('mouseenter', bgcEffectIn).on('mouseleave', bgcEffectOut);
  
    $(".p1").click(function () {
  
        var select = $(this);
      
        shadowChange(select);
   
  	  $('.g1, .p1').toggleClass('active');
  
    });
  
    $(".p2").click(function () {
  
    	  var select = $(this);
      
        shadowChange(select);
   
  	  $('.g2, .p2').toggleClass('active');
   
      });
  
    $(".p3").click(function () {
  
    	  var select = $(this);
      
        shadowChange(select);
   
  	  $('.g3, .p3').toggleClass('active');
   
      });

    $(".p4").click(function () {
  
    	  var select = $(this);
      
        shadowChange(select);
   
  	  $('.g4, .p4').toggleClass('active');
   
      });
  
    $(".p5").click(function () {
  
    	  var select = $(this);
      
        shadowChange(select);
   
  	  $('.g5, .p5').toggleClass('active');
   
      });
  
    $(".p6").click(function () {
  
    	  var select = $(this);
      
        shadowChange(select);
   
  	  $('.g6, .p6').toggleClass('active');
   
    });

};




$(document).ready(ready);
$(document).on('page:load', ready);

