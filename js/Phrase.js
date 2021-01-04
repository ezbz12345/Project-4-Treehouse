 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
       
        }

        //creates and adds phrase to the DOM
        addPhraseToDisplay(){
             for(let i = 0 ;  i < this.phrase.length ; i++){
                var liMaker = document.createElement('li');
                var y = i;
                if(this.phrase.charAt(y) === " "){
                   liMaker.classList.add("space")
                   }else{liMaker.classList.add("letter")
                        liMaker.innerText = `${this.phrase.charAt(i)}`}
                phraseUl.appendChild(liMaker);}}
        //checks letter and adds classes for css styling for whether the guess was correct or not. also disables the guessed key. 
        checkLetter(letter){
              if(this.phrase.includes(letter)){
                 //lettersArray[i].classList.add("show");
                 for(let i = 0 ; i < qwertyKeys.length ; i++){
                  if (letter == qwertyKeys[i].textContent){
                     qwertyKeys[i].classList.add('chosen');
                     qwertyKeys[i].disabled = 'true';
                  }}
                 return true;
              }else{for(let i = 0 ; i < qwertyKeys.length ; i++){
                  if (letter == qwertyKeys[i].textContent){
                     qwertyKeys[i].classList.add('wrong');
                     qwertyKeys[i].disabled = 'true';
              }}
           }}
        //removes the veil in front of mystery letter by adding .show -> see css class. 
        showMatchedLetter(letter){
          let phraseArray = document.querySelectorAll('.letter'); 
          if(this.checkLetter(letter) === true){ 
           for(let i = 0; i<phraseArray.length ; i++){
             if(letter == phraseArray[i].textContent){
           phraseArray[i].classList.add('show');
        }}
                   

     }}}
 