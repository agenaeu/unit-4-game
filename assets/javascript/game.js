//on load function
$(document).ready(function() {
    
        
    var score = 0;
    var wins = 0;
    var losses =0;
    var amethystNum = Math.floor((Math.random()*12)+1);
    var sapphireNum = Math.floor((Math.random()*12)+1);
    var emeraldNum = Math.floor((Math.random()*12)+1);
    var randomNum = Math.floor((Math.random()*102)+19);
    console.log(randomNum);
    console.log(score);
    if (amethystNum === sapphireNum || amethystNum === emeraldNum) {
        sapphireNum = Math.floor((Math.random()*12)+1);
        emeraldNum = Math.floor((Math.random()*12)+1);  
    }
    if (sapphireNum === emeraldNum) {
        emeraldNum = Math.floor((Math.random()*12)+1);  
    }
    
    
    $("#randomNum").html("<h3>Random Number: " + randomNum + "</h3>");
    
    $("#amethyst").click(function(){
        /* alert("you clicked amethyst"); */
        score += amethystNum;
        /* console.log(score); */
        $("#score").html("<h4>Your total score: " + score + "</h4>");
        /* if (score === randomNum) {
            wins++;
            alert("You win!");
        } */

        
    });
    $("#sapphire").click(function(){
        /* alert("you clicked sapphire"); */
      newScore = score += sapphireNum;
        /* console.log(score); */
        $("#score").html("<h4>Your total score: " + score + "</h4>");
    });
    $("#emerald").click(function(){
        /* alert("you clicked emerald!"); */
        newScore = score += emeraldNum;
        /* console.log(score); */
        $("#score").html("<h4>Your total score: "  + score + "</h4>");   
    });

    /* console.log(newScore);
    if (newScore === randomNum) {
    alert("You win!");
    wins++;   
    $("#wins").html("<h6>Wins: " + wins + "</h6>");
    randomNum();
    }
    else if (newScore > randomNum){
    alert("You lose!");
    losses++;
    $("#losses").html("<h6>Losses: " + losses + "</h6>");
    } */


    

});