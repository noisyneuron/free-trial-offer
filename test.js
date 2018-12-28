Tone.Transport.bpm.value = 50;

let env = {
  attack  : 10 ,
  release  : 0.5
}

let talk1 = new Tone.Sampler({"C1": "samples/ask-your-doctor.wav"});

talk1.attack = 0;
talk1.release = 0.2;
talk1.volume.value = -6;

talk1.toMaster();


setTimeout(function() {
  Tone.Transport.start();
  
  talk1.triggerAttackRelease("C1", 3);
}, 1000);