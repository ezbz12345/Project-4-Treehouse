 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
       
        }
        addPhraseToDisplay(){
             
             for(let i = 0 ;  i < this.phrase.length ; i++){
                var liMaker = document.createElement('li');
                var y = i;
                if(this.phrase.charAt(y) === " "){
                   liMaker.classList.add("space")
                  // liMaker.innerText = " "
                   }else{liMaker.classList.add("letter")
                        liMaker.innerText = `${this.phrase.charAt(i)}`}
                //liMaker.textContent = this.phrase.charAt(y);
                phraseUl.appendChild(liMaker);}}
        checkLetter(letter){
           //let wordPart = e.target.textContent; do it their way
           
           //for(let  i = 0; i<lettersArray.length ; i++){ cancel to do it their way
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
        
        showMatchedLetter(letter){
          let phraseArray = document.querySelectorAll('.letter'); 
          if(this.checkLetter(letter) === true){ 
           for(let i = 0; i<phraseArray.length ; i++){
             if(letter == phraseArray[i].textContent){
           phraseArray[i].classList.add('show');
        }}
                   

     }}}
 