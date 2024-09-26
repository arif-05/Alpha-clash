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

function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}