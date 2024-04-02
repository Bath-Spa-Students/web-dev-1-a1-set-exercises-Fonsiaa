function textToAudio() {
  // let - support a variable
  let msg = document.getElementById("text-to-speech").value;
  let speech = new SpeechSynthesisUtterance(); //interface
  speech.lang = "en-US"; //the langauge it will be spoken in
  speech.text = msg;
  speech.volume = 1; //volume of the voice
  speech.rate = 1;
  speech.pitch = 20;
  window.speechSynthesis.speak(speech);
  }

var mp3 = document.getElementsByClassName('mp3');
  Array.prototype.forEach.call(mp3, function(element) {
      element.addEventListener('click', function () {
          var audioSrc = this.getAttribute('data-src');
          play(audioSrc); 
      });
  });


function play(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.playbackRate = 1.8; // Set the playback rate
  audio.play();
}  

var soundPlayer = new Audio();

function playLowerNote(audioSrc) {
  soundPlayer.src = audioSrc; // Use the provided audio source
  soundPlayer.mozPreservesPitch = false;
  soundPlayer.play();
}

playLowerNote();

