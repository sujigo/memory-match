'use strict';

const cardImage1 = document.getElementById('card1');
const cardImage2 = document.getElementById('card2');
const cardImage3 = document.getElementById('card3');
const cardImage4 = document.getElementById('card4');
const cardImage5 = document.getElementById('card5');
const cardImage6 = document.getElementById('card6');
const cardImage7 = document.getElementById('card7');
const cardImage8 = document.getElementById('card8');
const cardImage9 = document.getElementById('card9');
const cardImage10 = document.getElementById('card10');
const cardImage11 = document.getElementById('card11');
const cardImage12 = document.getElementById('card12');
const cardImage13 = document.getElementById('card13');
const cardImage14 = document.getElementById('card14');
const cardImage15 = document.getElementById('card15');
const cardImage16 = document.getElementById('card16');

const player0Name = document.querySelector('#player--0--name');
const player1Name = document.querySelector('#player--1--name');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const endGameMessageEl = document.querySelector('.end-game-message');
const endGameTieMessageEl = document.querySelector('.end-game-message-tie')
const playerWinEl = document.querySelector('.palyer--win');
const instructionEl = document.querySelector('.instruction')
const btnNew = document.querySelector('.btn--new');
const btnInstruction = document.querySelector('.btn--instruction');
const btnCloseInstruction = document.querySelector('.btn---closeInstruction')
const overlay = document.querySelector('.overlay');

const cardBackPath = "resources/images/cardback.jpeg";

/// User Name
const player0 = window.prompt("Enter the FIRST PLAYER's name: ", "Player 1");
const player1 = window.prompt("Enter the SECOND PLAYER's name: ", "Player 2");

player0Name.innerHTML = player0;
player1Name.innerHTML = player1;

if (!player0 && !player1) {
    player0Name.innerHTML = "Player 1";
    player1Name.innerHTML = "Player 2";
} else if (!player0) {
    player0Name.innerHTML = "Player 1";
} else if (!player1) {
    player1Name.innerHTML = "Player 2";
};


/// generate 16 image path in array
let cardSet = []
for (let i=1;i<9;i++) {
    cardSet.push(`resources/images/img${i}.jpeg`)
    cardSet.push(`resources/images/img${i}.jpeg`)
}

// suffle 16 cards in array
const shuffledSet = cardSet.sort( () => .5 - Math.random() );

let cardClicked = 0;
let clicked2Cards = [];
let activePlayer = 0;
let scores = [0,0];
let playing = true;
let cardBackToBack = true;

const isClicked = (card) => {
    if (card.getAttribute("src") === cardBackPath) {
        return false;
    } else {
        return true;
    };
};

const clickCard = (card) => {
    cardClicked++;
    if (cardClicked === 1) {
        clicked2Cards.push(card);
    } else if (cardClicked === 2) {
        clicked2Cards.push(card);
        isMatching(clicked2Cards[0],clicked2Cards[1]);    
    };
};

const win = (activePlayer) => {
    playing = false;
    setTimeout(() => {
        if (activePlayer === 'tie') {
            playerWinEl.textContent = "It's a tie !!"
        } else {
            if(activePlayer === 0){
                playerWinEl.textContent = `${player0} won !!`
            } else{
                playerWinEl.textContent = `${player1} won !!`
            }
            
        }
        endGameMessageEl.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }, 700);
}

const isMatching = (card1,card2) => {
    if (card1.src === card2.src) {
        // add score
        scores[activePlayer] += 1;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        clicked2Cards.splice(0,clicked2Cards.length);
        if (scores[0] === 4 && scores[1] === 4) {
            win('tie');
        } else if (scores[activePlayer] === 5) {
            win(activePlayer);
        }
    } else {
        cardBackToBack = false;
        setTimeout(() => {
            clicked2Cards[0].src = cardBackPath;
            clicked2Cards[1].src = cardBackPath;
            clicked2Cards.splice(0,clicked2Cards.length);
            switchPlayer();
            cardBackToBack = true;
        }, 1000);
    };
    cardClicked = 0;  
};

const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

cardImage1.onclick = () => {
    console.log(cardImage1.getAttribute("src"));
    if (cardBackToBack && playing && !isClicked(cardImage1)){
        cardImage1.src = `${shuffledSet[0]}`;
        clickCard(cardImage1);
    }
};
cardImage2.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage2)){
        cardImage2.src = `${shuffledSet[1]}`;
        clickCard(cardImage2);
    }
};
cardImage3.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage3)){
        cardImage3.src = `${shuffledSet[2]}`;
        clickCard(cardImage3);
    }
};
cardImage4.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage4)){
        cardImage4.src = `${shuffledSet[3]}`;
        clickCard(cardImage4);
    }
};
cardImage5.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage5)){
        cardImage5.src = `${shuffledSet[4]}`;
        clickCard(cardImage5);
    }
};
cardImage6.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage6)){
        cardImage6.src = `${shuffledSet[5]}`;
        clickCard(cardImage6);
    }
};
cardImage7.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage7)){
        cardImage7.src = `${shuffledSet[6]}`;
        clickCard(cardImage7);
    }
};
cardImage8.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage8)){
        cardImage8.src = `${shuffledSet[7]}`;
        clickCard(cardImage8);
    }
};
cardImage9.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage9)){
        cardImage9.src = `${shuffledSet[8]}`;
        clickCard(cardImage9);
    }
};
cardImage10.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage10)){
        cardImage10.src = `${shuffledSet[9]}`;
        clickCard(cardImage10);
    }
};
cardImage11.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage11)){
        cardImage11.src = `${shuffledSet[10]}`;
        clickCard(cardImage11);
    }
};
cardImage12.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage12)){
        cardImage12.src = `${shuffledSet[11]}`;
        clickCard(cardImage12);
    }
};
cardImage13.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage13)){
        cardImage13.src = `${shuffledSet[12]}`;
        clickCard(cardImage13);
    }
};
cardImage14.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage14)){
        cardImage14.src = `${shuffledSet[13]}`;
        clickCard(cardImage14);
    }
};
cardImage15.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage15)){
        cardImage15.src = `${shuffledSet[14]}`;
        clickCard(cardImage15);
    }
};
cardImage16.onclick = () => {
    if (cardBackToBack && playing && !isClicked(cardImage16)){
        cardImage16.src = `${shuffledSet[15]}`;
        clickCard(cardImage16);
    }
};


btnNew.addEventListener('click', function () {
    location.reload();
});

btnInstruction.addEventListener('click', function () {
    instructionEl.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseInstruction.addEventListener('click', function () {
    instructionEl.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
    instructionEl.classList.add('hidden');
    overlay.classList.add('hidden');
});

