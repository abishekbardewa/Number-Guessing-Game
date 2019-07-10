let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
//Play Again Event Listner

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
       
        window.location.reload();
    }
   
});
//Guess Button Listner
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //console.log(guess);

    //Validation
    if(isNaN(guess) || guess < min || guess > max){
        
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }

    // Check If Won
    if(guess === winningNum){
        //Game Over - WIN

        //  Game Over Function for code Optimization

        gameOver(true,`${winningNum} is Correct,You Win!!`);

        // WithOut Using gameOver Function
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winningNum} is Correct,You Win!!`,'green');
    } else{
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //Game Over - LOST
            
            //  Game Over Function for code Optimization

            gameOver(false,`You Lost!, correct number was ${winningNum}`);
            
            // WithOut Using gameOver Function
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`You Lost!, correct number was ${winningNum}`,'red');

        } else{
            //Game Over - Continues....
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left` ,'red');
        }
    }
});

//Game Over

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    //Play Again 
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

   

}

function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
    

}
// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}