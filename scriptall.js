$(document).ready(function(){

    
    // API
    
    $.getJSON("https://api.airtable.com/v0/appveB7kaqFJAZwvK/musics?api_key=keynEUVsj4xIszwi2", function(data) {

            $.each( data.records, function(index, value) {
                $("#musiques").append("<div class='row'>\
                                  <div class='col-md-3'></div>\
                                  <div class='col-md-5 spotify'>\
                                    <iframe src='https://open.spotify.com/embed?uri=" + value.fields.spotifylink + "' width='100%' height='100' frameborder='0' allowtransparency='true'></iframe>\
                                  </div>\
                                  <div class='col-md-1'>\
                                    <p><span class='labelvote label label-default center-block'> "+ value.fields.likes + "</span></p>\
                                    <a href='#' class='voteImg'><img class='plus center-block' src='images/fight.svg' width='50' ></a>\
                                  </div>\
                                  <div class='col-md-3'></div></div>");

                
              });
        });


    // L'ANIMATION DE LA SOURIS
    
var mousePos = {};

function getRandomInt(min, max) {
return Math.round(Math.random() * (max - min + 1)) + min;
 }

 $(window).mousemove(function(e) {
   mousePos.x = e.pageX;
   mousePos.y = e.pageY;
 });

  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });

  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){

      var range = 40;

      var color = "background: #ffffff;";

      var sizeInt = getRandomInt(3, 10);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";

      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;";

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('body').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();});
    }
  }, 1);
    
    
    // L'ANIMATION DU LIKE
    
    $(".fight").hide();

$("#musiques").on("click", ".voteImg img", function(){
    $(".fight").fadeIn(30);
    $(".fight").animate({height: '+=30%'});
    $(".fight").animate({height: '-=30%'});
    $(".fight").fadeOut(30);
});
    
    
    
});
