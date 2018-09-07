$(function(){
  $(".pusher").css("min-height",$(window).outerHeight()-65);
  $(window).resize(function(){
    $(".pusher").css("min-height",$(window).outerHeight()-65);
  });
});
