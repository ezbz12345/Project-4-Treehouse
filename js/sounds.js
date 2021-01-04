class soundEffect {
    constructor(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }}

const win = new soundEffect("soundFX/dixie-horn_daniel-simion.mp3");
const lose = new soundEffect("soundFX/tolling-bell_daniel-simion.mp3");
const guessHit = new soundEffect("soundFX/service-bell_daniel_simion.mp3");
const guessMiss = new soundEffect("soundFX/Tires Squealing 1-SoundBible.com-847455988.mp3");