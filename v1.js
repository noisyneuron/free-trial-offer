

Tone.Transport.bpm.value = 50;


let talk1 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor.wav"});
let talk2 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor2.wav"});
let talk3 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor3.wav"});
let talk4 = new Tone.Sampler({"C1": "samples/talk-to-your-doctor4.wav"});

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

let firstFree = new Tone.Sampler({"C1": "samples/i-got-my-first-prescription-free.wav"});
let yearFree = new Tone.Sampler({"C1": "samples/free-for-upto-one-year.wav"});

talk1.toMaster();
talk2.toMaster();
talk3.toMaster();
talk4.toMaster();

for(let p of problems) {
  p.toMaster();
}

firstFree.toMaster();
yearFree.toMaster();



let seq1 = new Tone.Sequence(function(time, note){
  console.log(note);
  talk1.triggerAttack(note);
}, ["C1", "C1", "E1", "C1"]);


let seq2Count = 0;
let seq2 = new Tone.Sequence(function(time, note){
  if(seq2Count % 2 == 0) {
    let r = Math.floor(Math.random() * problems.length);
    problems[r].triggerAttack(note);
  }
  seq2Count ++;
}, ["E1"]);



let seq3Count = 0;
let seq3 = new Tone.Sequence(function(time, note){
  if(seq3Count % 4 == 1) {
    yearFree.triggerAttack(note);
  } 
  if(seq3Count % 8 == 2) {
    firstFree.triggerAttack(note);
  }
  seq3Count++;
}, ["C1"]);






setTimeout(function() {

  Tone.Transport.start();
  console.log("START");
  
  seq1.start();
  seq2.start();
  seq3.start();

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


