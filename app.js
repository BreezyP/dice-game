/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {

    var dice = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    //update the roundScore if the rolled number was not 1

    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        //set the scores to 0
        scores[activePlayer] = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        document.getElementById('score-' + activePlayer).textContent = 0;

        nextPlayer();

    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    //update the actual score of the player who pressed to hold the round
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    nextPlayer();

});

function nextPlayer()
{
    //reset the round score
    roundScore = 0;

    //update the active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //set the new players visuals
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //remove the dice image when the next player starts their turn
    document.querySelector('.dice').style.display = 'none';
}


// document.querySelector('#current-' + activePlayer).textContent = dice;