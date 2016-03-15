/*
 *Author: Matt Campagnola
 */
$(document).ready(function(){
    //Hide game mode buttons and display next options on soloGame click
    $(document.getElementsByName('soloGame')).click(function (){
        $(this).hide();
        $("#challengeGameBtn").hide();
         $('#gamesInProgressBtn').hide();
    });
    
    //Hide game mode buttons and display next options on challengeGame click
    $(document.getElementsByName('challengeGame')).click(function (){
        //Hide current buttons
        $(this).hide();
        $("#soloGameBtn").hide();
        $('#gamesInProgressBtn').hide();
        
        //Reveal next buttons
         $(document.getElementsByName('friendChallenge')).removeClass('hidden');
         $(document.getElementsByName('randomChallenge')).removeClass ('hidden');
         
         //Reveal challenge header title
         $(document.getElementById('challengeHeader')).removeClass('hidden');
    });
    
});