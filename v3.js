Tone.Transport.bpm.value = 50;

/////////---------- SAMPLES --------------///////////////
let talk = [
  new Tone.Sampler({"C1": "samples/talk-to-your-doctor.wav"}),
  new Tone.Sampler({"C1": "samples/talk-to-your-doctor2.wav"}),
  new Tone.Sampler({"C1": "samples/talk-to-your-doctor3.wav"}),
  new Tone.Sampler({"C1": "samples/talk-to-your-doctor4.wav"})
];

let ask = [
  new Tone.Sampler({"C1": "samples/ask-your-doctor.wav"}),
  new Tone.Sampler({"C1": "samples/ask-your-doctor2.wav"}),
  new Tone.Sampler({"C1": "samples/ask-your-doctor3.wav"}),
  new Tone.Sampler({"C1": "samples/ask-your-doctor4.wav"}),
  new Tone.Sampler({"C1": "samples/ask-your-doctor5.wav"})
];

let tell = [
  new Tone.Sampler({"C1": "samples/tell-your-doctor.wav"}),
  new Tone.Sampler({"C1": "samples/tell-your-doctor2.wav"}),
  new Tone.Sampler({"C1": "samples/tell-your-doctor3.wav"}),
  new Tone.Sampler({"C1": "samples/tell-your-doctor4.wav"})
]

let problems = [
  new Tone.Sampler({"C1": "samples/acide-reflux-disease.wav"}),
  new Tone.Sampler({"C1": "samples/adult-add.wav"}),
  new Tone.Sampler({"C1": "samples/chest-pain.wav"}),
  new Tone.Sampler({"C1": "samples/chronic-bhronchitis.wav"}),
  new Tone.Sampler({"C1": "samples/constipation.wav"}),
  new Tone.Sampler({"C1": "samples/confusion.wav"}),
  new Tone.Sampler({"C1": "samples/diarrheoa.wav"}),
  new Tone.Sampler({"C1": "samples/dry-mout.wav"}),
  new Tone.Sampler({"C1": "samples/fungal-infection.wav"}),
  new Tone.Sampler({"C1": "samples/headache.wav"}),
  new Tone.Sampler({"C1": "samples/heart-attack.wav"}),
  new Tone.Sampler({"C1": "samples/insomnia.wav"}),
  new Tone.Sampler({"C1": "samples/lung-disease.wav"}),
  new Tone.Sampler({"C1": "samples/menstrual-cramps.wav"}),
  new Tone.Sampler({"C1": "samples/problems-urinating.wav"}),
  new Tone.Sampler({"C1": "samples/sexual-side-effects.wav"}),
  new Tone.Sampler({"C1": "samples/stomach-conditions.wav"}),
  new Tone.Sampler({"C1": "samples/thyroid-cancer.wav"}),
  new Tone.Sampler({"C1": "samples/thoughts-of-suicide.wav"}),
  new Tone.Sampler({"C1": "samples/depression.wav"})
];

let sideEffects = [
  new Tone.Sampler({"C1": "samples/side-effects.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-include.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-include2.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-may-include.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-may-include2.wav"})
]

let free = [
  new Tone.Sampler({"C1": "samples/i-got-my-first-prescription-free.wav"}),
  new Tone.Sampler({"C1": "samples/free-for-upto-one-year.wav"}),
  new Tone.Sampler({"C1": "samples/free-trial-offer.wav"}),
  new Tone.Sampler({"C1": "samples/free-trial-offer2.wav"})
]

for(let s of talk) {
  s.toMaster();
  s.volume.value = -2;
}

for(let s of ask) {
  s.toMaster();
  s.volume.value = -2;
}

for(let s of tell) {
  s.toMaster();
  s.volume.value = -2;
}

var chorus = new Tone.Chorus(4, 2.5, 0.5);
for(let s of problems) {
  s.toMaster();
  s.volume.value = 0;
  // s.volume.value = 3;
  // s.connect(chorus);
  // chorus.toMaster();
}

for(let s of sideEffects) {
  s.toMaster();
  s.volume.value = 0;
}

for(let s of free) {
  s.toMaster();
  s.volume.value = 0;
}
/////////---------- ------------------- --------------///////////////


let replaceStr = function(str, chunkSize) {
  let strArray = str.split('');
  let newStr = "";
  for(let c of strArray) {
    newStr += rules[c];
  }
  return newStr;
}









let playNote = function(str, strIndex) {
  let c = str.charAt(strIndex);
  let r;
  switch(c) {
    case "A" :
      talk[1].triggerAttackRelease("C1", 1.8);
      break;
    case "B" :
      ask[2].triggerAttackRelease("C1", 1.8);
      break;
    case "C" :
      tell[1].triggerAttackRelease("C1", 1.8);
      break;
    case "D" :
      r = Math.floor(Math.random() * sideEffects.length);
      sideEffects[3].triggerAttackRelease("C1", 1.8);
      break;
    case "E" :
      r = Math.floor(Math.random() * free.length);
      free[3].triggerAttackRelease("C1", 1.8);
      break;
    case "F" :
      r = Math.floor(Math.random() * problems.length);
      problems[r].triggerAttackRelease("C1", 1.8);
      break;
    default:
      break;
  }
  
}

let rules = {
  "A" : "BB",
  "B" : "DAE",
  "C" : "AC",
  "D" : "DB",
  "E" : "CA"
}

let str = "ABCABCABCABCABCABCABC";
let strIndex = 0;

let str2 = "ABCABCABCDEFDEFABCABCDEF";
let strIndex2 = 0;


// Tone.Transport.scheduleRepeat(function(time){
//   playNote(str, strIndex);
//   strIndex++;
//   if(strIndex >= str.length) {
//     // str = replaceStr(str, 1);
//     strIndex = 0;
//   }
// }, "8n");

Tone.Transport.scheduleRepeat(function(time){
  playNote(str2, strIndex2);
  strIndex2++;
  if(strIndex2 >= str2.length) {
    // str = replaceStr(str, 1);
    strIndex2 = 0;
  }
}, "8n");


setTimeout(function() {
  Tone.Transport.start();
  console.log("START");
}, 3000);

