/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         //properties
         this.missed = 0,
         this.phrases = [ new Phrase("when pigs fly"),
                        new Phrase("reliable as putty ruler"),
                        new Phrase( "death and taxes"),
                        new Phrase("he is beginning to believe"),
                        new Phrase("one fish two fish")],
         this.activePhrase = null;
     }
    
     //methods
    startGame(){  
         curtain.style.display = "none"; //hides screen overlay
         let gamePhrase = this.getRandomPhrase(); //container for grabbed phrase
         gamePhrase.addPhraseToDisplay(); //puts phrase on the dom hidden
         this.activePhrase = gamePhrase; 
        }
    getRandomPhrase(){
        var whichP = Math.floor(this.phrases.length*Math.random());
        return this.phrases[whichP];
        }
    //shows letters, disables key buttons including keyboard, updates life total, ends game if over, AND makes fun sounds. 
    handleInteraction(letter){        
        if(this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            guessHit.play(); // sound effect for good guess
            for(let i = 0 ; i < qwertyKeys.length ; i++){
                if (letter == qwertyKeys[i].textContent){
                   qwertyKeys[i].classList.add('chosen');
                   qwertyKeys[i].disabled = 'true';
                }}
            if(this.checkForWin()){
                this.gameOver("win")
                }
        }else{
            guessMiss.play() // sound effect for whiffing on your guess
            for(let i = 0 ; i < qwertyKeys.length ; i++){
                if (letter == qwertyKeys[i].textContent){
                   qwertyKeys[i].classList.add('wrong');
                   qwertyKeys[i].disabled = 'true';
            }}
            this.removeLife();
        }
        }
    removeLife(){ //replaces heart icon with empty heart outline, then checks for a loss. 
        lifeTotal[this.missed].childNodes[0].src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver("lose");
        }
        }
    checkForWin(){//shows the letter(s) in the phrase, then checks for a win
        var lettersAll = document.querySelectorAll('.letter');
        var lettersGot = document.querySelectorAll('.show');
        if(lettersAll.length === lettersGot.length){return true;}
        }
    gameOver(winOrLose){ 
        if(winOrLose  === "lose"){
            endMsgContainer.innerHTML = 'Your letter guessing life force hath been vanquished...';
            curtain.classList.remove('win');
            curtain.style.display = 'flex';
            curtain.classList.add('lose');
            lose.play(); //somber bell sound for sad embarassing failure
        }else if(winOrLose === "win"){
            endMsgContainer.innerHTML = 'Winner Winner Chicken Dinner!';
            curtain.classList.remove('lose');
            curtain.style.display = 'flex';
            curtain.classList.add('win');
            win.play(); // happy fun clown honk honk for big win celebrate
        }
        
        while(phraseUl.firstChild){
            phraseUl.removeChild(phraseUl.firstChild);
        }
        
        for(let i = 0 ; i<qwertyKeys.length ; i++){
            qwertyKeys[i].classList.remove('wrong');
            qwertyKeys[i].classList.remove('chosen');
            qwertyKeys[i].disabled  = false;}
        while(this.missed !== 0){
            lifeTotal[(this.missed - 1)].childNodes[0].src = "images/liveHeart.png";
            this.missed -= 1;
        }
        startGameButton.innerText = "Play Again?";
    }
    }
     

