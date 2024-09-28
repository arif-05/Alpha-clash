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


    // get the expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,currentAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        console.log('you have correctly pressed',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');
    }
}

// capture key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet);

    // set alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}