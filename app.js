$(document).ready(function() {

  $("body").fadeIn(2000);

  $("p").mouseenter(function(){
    $(this).css("background-color", "yellow");
  });
  $("p").mouseleave(function(){
    $(this).css("background-color", "white");
  });

  $("h2").on("click", function(){
    $(this).animate({
      "opacity": ".25",
      "margin-left": "20px"
    } , 4000, function(){
      //after it's complete
      $(this).css("opacity", ".5");
    });
  });



$("#switcher-large").on("click", function(){
    $("body").css("font-size", "+=5px");
  });

  $("#switcher-small").on("click", function(){
    $("body").css("font-size", "-=5px");
  });

  $("#switcher-default").on("click", function(){
    $("body").css("font-size", "62%");
  });

// $(document).keydown, function()

    });
