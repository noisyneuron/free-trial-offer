

Tone.Transport.bpm.value = 50;

let env = {
attack  : 0 ,
release  : 1 ,
decay: 1,
sustain: 1
}

let talk1 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor.wav"});
let talk2 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor2.wav"});
let talk3 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor3.wav"});
let talk4 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor4.wav"});
talk4.envelope = env;

let problems = [
  new Tone.Sampler({"C1": "samples/acide-reflux-disease.wav"}),
  new Tone.Sampler({"C1": "samples/adult-add.wav"}),
  new Tone.Sampler({"C1": "samples/chest-pain.wav"}),
  new Tone.Sampler({"C1": "samples/chronic-bhronchitis.wav"}),
  new Tone.Sampler({"C1": "samples/constipation.wav"}),
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
  new Tone.Sampler({"C1": "samples/stomach-conditions.wav"})
];

let sideEffects = [
  new Tone.Sampler({"C1": "samples/side-effects.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-include.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-include2.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-may-include.wav"}),
  new Tone.Sampler({"C1": "samples/side-effects-may-include2.wav"})
]

let firstFree = new Tone.Sampler({"C1": "samples/i-got-my-first-prescription-free.wav"});
// firstFree.envelope = env;
let yearFree = new Tone.Sampler({"C1": "samples/free-for-upto-one-year.wav"});

talk1.toMaster();
talk2.toMaster();
talk3.toMaster();
talk4.toMaster();

for(let p of problems) {
  p.toMaster();
}

for(let s of sideEffects) {
  s.toMaster();
}
firstFree.toMaster();
yearFree.toMaster();


////////////////////


let rules = {
  "A" : "BB",
  "B" : "DAE",
  "C" : "AC",
  "D" : "DB",
  "E" : "CA"
}

let str = "ABAB";

let replaceStr = function() {
  let strArray = str.split('');
  let newStr = "";
  for(let c of strArray) {
    newStr += rules[c];
  }
  str = newStr;
  console.log(str);
}

let strIndex = 0;

let playNote = function( ) {
  let c = str.charAt(strIndex);
  switch(c) {
    case "A" :
      talk4.triggerAttackRelease("C1", 1.8);
      break;
    case "B" :
      firstFree.triggerAttackRelease("C1", 1.8);
      break;
    case "C" :
      let r = Math.floor(Math.random() * problems.length);
      problems[r].triggerAttackRelease("C1", 1.8);
      break;
    case "D" :
      sideEffects[1].triggerAttackRelease("C1", 1.8);
      break;
    case "E" :
      yearFree.triggerAttackRelease("C1", 1.8);
      break;
    default:
      break;
  }
  strIndex++;
  if(strIndex >= str.length) {
    replaceStr();
    strIndex = 0;
  }
}

Tone.Transport.scheduleRepeat(function(time){
  console.log(time);
  playNote();
}, "8n");




setTimeout(function() {

  Tone.Transport.start();
  console.log("START");


}, 1000);





// setTimeout(function() {


//   Tone.Transport.start();

//   Tone.Transport.scheduleRepeat(function(time){
//     console.log('here');
//     sampler.triggerAttack("A1");
//   }, "2t");

//   Tone.Transport.scheduleRepeat(function(time){
//     console.log('here');
//     let notes = ["A1", "C1", "E1"];
//     let note = notes[Math.floor(Math.random() * notes.length)];
//     sampler2.triggerAttack(note);
//   }, "2n");
  


// }, 2000);


