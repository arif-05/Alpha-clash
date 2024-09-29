// function play(){
//    //step-1: hide the home screen. To hide the screen add hidden class
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)


//     //step-2: show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
    
//     // console.log(playgroundSection.classList)

// }   

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    // stop game if player press esc
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,currentAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);


        // ............... bikolpo .......................
        // console.log('You get a point');
        // update score
        // 1.get the current score
        // 2.increase the score
        // 3.updated score
        // const currnetScoreElement = document.getElementById('current-score');
        // const currentScoreText = currnetScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore);
        // const newScore = currentScore + 1;
        // currnetScoreElement.innerText = newScore;
        // ..........................................

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }



        // ........................................
        // 1. get the current life
        // 2. reduce the life count
        // 3. display the updated life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        // ........................................

    }
}


// capture key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}



function play(){
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

    // clear the last alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}