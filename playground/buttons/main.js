

function btnClick(col) {
    document.getElementById("result").innerHTML = col+" was clicked for some reason";
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function getPattern(n) {
    return "1223";
}

function beep(freq) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
  
    duration=400;

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    gainNode.gain.value = 0.5;
    oscillator.frequency.value = freq;
    oscillator.type = "sine";
  
    oscillator.start();
  
    setTimeout(
      function() {
        oscillator.stop();
      },
        duration
    );
  };


async function flash(col,colCodes = ["#4CAF50","#008CBA","#f44336","#f6fa08"]) {
    console.log("Col="+String(col));    
    /* await sleep(1000); */
    document.getElementById("button"+col).style.backgroundColor = colCodes[col-1];
    beep(500+(col*250));
    await sleep(800);
    document.getElementById("button"+col).style.backgroundColor = "#1D1E13";
}



async function startGame() {

    audioCtx = new(window.AudioContext || window.webkitAudioContext)();

    pattern = getPattern(10);

    /* colCodes = ["#4CAF50","#1D1E13","#f44336","#f6fa08"]; */

    for (var i = 0; i < pattern.length; i++) {
        flash(pattern[i]);
        await sleep(1000);
      }
    
}