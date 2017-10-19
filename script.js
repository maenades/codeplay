$(document).ready(function(){

    $.getJSON("https://api.airtable.com/v0/appveB7kaqFJAZwvK/musics?sort%5B0%5D%5Bfield%5D=likes&sort%5B0%5D%5Bdirection%5D=desc&api_key=keynEUVsj4xIszwi2", function(data) {

            rang = 1;
            $.each( data.records, function(index, value) {
                $("#musiques").append("<div class='row'>\
                                  <div class='col-md-3'></div>\
                                  <div class='col-md-1 numero'>#"+rang+"</div>\
                                  <div class='col-md-4 spotify'>\
                                    <iframe src='https://open.spotify.com/embed?uri=" + value.fields.spotifylink + "' width='100%' height='100' frameborder='0' allowtransparency='true'></iframe>\
                                  </div>\
                                  <div class='col-md-1'>\
                                    <p><span class='label label-default'> "+ value.fields.likes + "</span></p>\
                                    <a href='#'><img class='fight center-block' src='images/fight.svg' width='50' ></a>\
                                  </div>\
                                  <div class='col-md-3'></div></div>");

              rang = rang + 1;
              });
        });


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
});
