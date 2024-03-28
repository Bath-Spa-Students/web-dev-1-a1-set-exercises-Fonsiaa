function textToAudio() {
    // let - support a variable
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance(); //interface
    speech.lang = "en-US"; //the langauge it will be spoken in
    speech.text = msg;
    speech.volume = 1; //volume of the voice
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    }