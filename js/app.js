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
let game;

//start game button makes instance of Game class, calls startGame()  on that instance
//sets that instance to the value for 'game' (global scope)
startGameButton.addEventListener('click', ()=>{
    const activeGame = new Game();
    activeGame.startGame()
    game = activeGame;});

//add the guess event (handle interaction) to each onscreen key. 
qwertyDiv.addEventListener('click', (e)=>{
    const keyText = e.target.textContent;
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(keyText)
    }
})

//add the guess event (handling interaction) to the keyboard. It behaves like psuedo click so we keep it simple. 
document.addEventListener('keydown', (e)=>{
    let keyFind = e.key;
   
    qwertyKeys.forEach(item =>{ 
        if(keyFind == item.innerHTML){
            item.click();
            }
        })
    })
