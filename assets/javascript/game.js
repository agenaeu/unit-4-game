//on load function
$(document).ready(function() {
    
    // global variables
    var score = 0;
    var wins = 0;
    var losses = 0;
    // sets random numbers for crystal
    var amethystNum = Math.floor((Math.random()*12)+1);
    var sapphireNum = Math.floor((Math.random()*12)+1);
    var emeraldNum = Math.floor((Math.random()*12)+1);
    // sets random number to try and reach
    var randomNum = Math.floor((Math.random()*102)+19);
    // makes the crystals unable to = the same number as each other
    if (amethystNum === sapphireNum || amethystNum === emeraldNum) {
        sapphireNum = Math.floor((Math.random()*12)+1);
        emeraldNum = Math.floor((Math.random()*12)+1);  
    }
    if (sapphireNum === emeraldNum) {
        emeraldNum = Math.floor((Math.random()*12)+1);  
    }
    // resets the score and crystal hidden values
    var resetGame = function() {
         score = 0;
         amethystNum = Math.floor((Math.random()*12)+1);
         
         sapphireNum = Math.floor((Math.random()*12)+1);
        
         emeraldNum = Math.floor((Math.random()*12)+1);
         
         randomNum = Math.floor((Math.random()*102)+19);
         $("#randomNum").html("<h3>Random Number: " + randomNum + "</h3>");
         $("#score").html("<h4>Your total score: " + score + "</h4>");
    };
    
    // writes the score you are trying to reach to the HTML
    $("#randomNum").html("<h3>Random Number: " + randomNum + "</h3>");
    // click function for the amethyst
    $("#amethyst").click(function(){
        /* alert("you clicked amethyst"); */
        score += amethystNum;
        
        $("#score").html("<h4>Your total score: " + score + "</h4>");
        if (score === randomNum) {
            wins++;
            $("#wins").html("<h6>Wins: " + wins + "</h6>");
            resetGame();
            
        }
        if (score > randomNum) {
            losses++;
            $("#losses").html("<h6>Losses: " + losses + "</h6>");
            resetGame();
            
        }
    });
    // click function for the sapphire
    $("#sapphire").click(function(){
        
      newScore = score += sapphireNum;
      
        $("#score").html("<h4>Your total score: " + score + "</h4>");
        if (score === randomNum) {
            wins++;
            $("#wins").html("<h6>Wins: " + wins + "</h6>");
            resetGame();
        }
        if (score > randomNum) {
            losses++;
            $("#losses").html("<h6>Losses: " + losses + "</h6>");
            resetGame();
        }
    });
    // click function for emerald
    $("#emerald").click(function(){
       
        newScore = score += emeraldNum;
   
        $("#score").html("<h4>Your total score: "  + score + "</h4>"); 
        if (score === randomNum) {
            wins++;
            $("#wins").html("<h6>Wins: " + wins + "</h6>");
            resetGame();
        }
        if (score > randomNum) {
            losses++;
            $("#losses").html("<h6>Losses: " + losses + "</h6>");
            resetGame();
        }  
    });



    

});