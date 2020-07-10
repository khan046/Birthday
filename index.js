alert("Access this site in Desktop for better Visibility")
// $(document).keypress(function(){
//
// })


$(".btn").click(function(){
  var choosenButton = $(this).attr("id");
   playSound(choosenButton);
   animatePress(choosenButton);
})

function playSound(name){
  var audioElement = new Audio("sounds/"+ name +".mp3");
  audioElement.play();
}


function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
  },100);
}
