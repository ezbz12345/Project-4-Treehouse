/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //all the 
const curtain = document.getElementById('overlay');
const endMsgContainer = document.getElementById('game-over-message');
const keysArray = document.querySelectorAll('.key'); //maybe don't need
const qwertyDiv  = document.getElementById('qwerty');
const startGameButton = document.getElementById('btn__reset');
const lifeTotal = document.getElementsByClassName('tries');
const qwertyKeys = document.querySelectorAll('.key');  
const phraseUl =  document.getElementById('phrase_ul');
const lifeTotalParent = lifeTotal.parent;
let game;// = new Game();
//theKeysAreAlive(game);
// function initializeGame(){
//     let game = new Game();
//     game.startGame();
   
//     return game;
// }; all trash

//start game button makes instance of Game class, calls startGame()  on that instance
//sets that instance to the value for 'game' (global scope)
startGameButton.addEventListener('click', ()=>{
    const activeGame = new Game();
    activeGame.startGame()
    game = activeGame;});

//add the guess event to each key. 
qwertyDiv.addEventListener('click', (e)=>{
    const keyText = e.target.textContent;
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(keyText)
    }
})

document.addEventListener('keydown', (e)=>{
    let keyFind = e.key;
   
    qwertyKeys.forEach(item =>{ 
        if(keyFind == item.innerHTML){
            item.click();
            }
        })
    })

//function theKeysAreAlive(game){
    // for(i=0 ; i<keysArray.length ; i++){
    //     keysArray[i].addEventListener('click', game.handleInteraction);
    //     }
    // }
    
    // undefined
    // function handleThis(e){
    //     let keyed = e.target.textContent;
    //     if(bigTimeCheck.checkLetter(keyed)===true){
    //         bigTimeCheck.showMatchedLetter(keyed)}}

// function letTheKeysLive(){
//     for(i=0 ; i<keysArray.length ; i++){
//         keysArray[i].addEventListener('click', checkLetter);
//     }
    
// }
// function seeIfWorks(e){
//     let ass = e.target.textContent;
//     let beenus = document.querySelectorAll('.letter')[0];
//     if(ass ==  beenus.textContent){beenus.classList.add('.show')}
//     console.log(ass)};