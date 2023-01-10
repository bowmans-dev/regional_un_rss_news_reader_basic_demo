const voice = window.speechSynthesis.getVoices()[17];

function speak() {

  var msg = new SpeechSynthesisUtterance();

  msg.text = document.querySelector("output").textContent;
  msg.voice = window.speechSynthesis.getVoices()[17];
  msg.rate = 0.8;
  window.speechSynthesis.speak(msg);      
}

function cancelVoice() {
    
  window.speechSynthesis.cancel();
}