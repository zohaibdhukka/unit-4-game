// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 



// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

var crystal = [10,7,3,4];
var addScore;
var addUp = 0;
var win = 0;
var loose = 0;
//    * The player will be shown a random number at the start of the game.
$(document).ready(function (){

    
    //    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    //      * Your game will hide this amount until the player clicks a crystal.
    var rndNumber = Math.floor (Math.random() * 121) ;
    $("#rndNumber").text(rndNumber);
    
    $(".crystal").on("click", function(){
        
        
        addScore = ($(this).attr("data-crystal"));
        addScore = parseInt(addScore);

        addUp += addScore;
        $("#score").text(addUp);

        if(addUp === rndNumber)
        {
            // alert("You Win");
            addUp = 0;
            $("#score").text(addUp);
            rndNumber = Math.floor (Math.random() * 121) ;
            $("#rndNumber").text(rndNumber);
            win++;
        }
        else if (addUp >= rndNumber)
        {
            addUp = 0;
            $("#score").text(addUp);
            rndNumber = Math.floor (Math.random() * 121) ;
            $("#rndNumber").text(rndNumber);
            loose++;
        }
        document.getElementById("win").innerHTML = "Win: " + win;
        document.getElementById("loose").innerHTML = "Loose: " + loose;
    });
    
    
   $("button").on("click", function(){

       var win = 0;
       var loose = 0;
       document.getElementById("win").innerHTML = "Win: " + win;
       document.getElementById("loose").innerHTML = "Loose: " + loose;

        rndNumber = Math.floor (Math.random() * 121);
        $("#rndNumber").text(rndNumber);
        addUp = 0;
        $("#score").text(addUp);
        console.log(addUp);
        console.log(rndNumber);

   }); 
   
});
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.