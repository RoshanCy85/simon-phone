var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

function playSound(colour){
    var audio=new Audio(colour + ".mp3");
        audio.play();
    
}
var first=true; 
var level=0;

$(document).click(function() {
    
    if (first) {
        
        $("#level-title").text("Level " + level);
        nextSequence();

        first = false; // Update the flag to indicate nextSequence() has been called
    }
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
        {
            console.log("success");
            if(gamePattern.length===userClickedPattern.length)
                {
                    setTimeout(function () {
                        nextSequence();
                      }, 1000);
                }
        }
        else 
            {
                playSound("wrong")


                $("body").addClass("game-over");
                setTimeout(function(){
                    $("body").removeClass("game-over");
                },200);

                $("#level-title").text("Game Over, Press Any Key to Restart");
                startOver();


          
              }
        
}
function startOver(){
    level=0;
    gamePattern=[];
    first=true;
    
  }




function nextSequence(){

    userClickedPattern = [];
    level++;
       $("#level-title").text("Level "+level);
    
    var randomNumber=Math.floor(Math.random()*4)
    
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    

}
// nextSequence();
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

})
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed"); // Store the jQuery object in a variable

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed"); // Remove the "pressed" class after a delay
    }, 100);
}





