$('#sec-1').addClass("active");
$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#main").offset().top-66
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#about").offset().top-112
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#contactus").offset().top-112
    }, 1000);
 return false;
});

$("#sec-4").click(function() {
 $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#courses").offset().top-112
    }, 1000);
 return false;
});
$('#about').waypoint(function() {
      
    $(".container ul li").children().removeClass("active");
    $("#sec-2").addClass("active");
    
  }, { offset: 101 });
  
  
  $('#contactus').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-3").addClass("active");
  }, { offset: 101 });
  
  $('#courses').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-4").addClass("active");
  }, { offset: 101 });
  
  $('#main').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-1").addClass("active");
  }, { offset: 0 });