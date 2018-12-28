Tone.Transport.bpm.value = 40;

/////////---------- SAMPLES --------------///////////////
let samples = {
  "A" : {sample: new Tone.Sampler({"C1": "samples/talk-to-your-doctor2.wav"}), text: "talk to your doctor"},
  "B" : {sample: new Tone.Sampler({"C1": "samples/ask-your-doctor3.wav"}), text: "ask your doctor"},
  "C" : {sample: new Tone.Sampler({"C1": "samples/tell-your-doctor2.wav"}), text: "tell your doctor"},
  "D" : {sample: new Tone.Sampler({"C1": "samples/side-effects-may-include.wav"}), text: "side effects may include"},
  "E" : {sample: new Tone.Sampler({"C1": "samples/free-trial-offer2.wav"}), text: "free trial offer"},
  "F" : {sample: new Tone.Sampler({"C1": "samples/thoughts-of-suicide.wav"}), text: "thoughts of suicide"},
  "G" : {sample: new Tone.Sampler({"C1": "samples/can-lead-to-coma-or-death.wav"}), text: "can lead to coma or death"}, 
  "H" : {sample: new Tone.Sampler({"C1": "samples/serious-side-effects.wav"}), text: "serious side effects"},
  "I" : {sample: new Tone.Sampler({"C1": "samples/i-feel-better.wav"}), text: "i feel better"}, 
  "J" : {sample: new Tone.Sampler({"C1": "samples/i-feel-fine.wav"}), text: "i feel fine"}, 
  "K" : {sample: new Tone.Sampler({"C1": "samples/impaired-judgement.wav"}), text: "impaired judgement"},
  "L" : {sample: new Tone.Sampler({"C1": "samples/increased-risk-of-death.wav"}), text: "increased risk of death"}, 
  "M" : {sample: new Tone.Sampler({"C1": "samples/injectible-prescription-medicine.wav"}), text: "injectible prescription medicine"}, 
  "N" : {sample: new Tone.Sampler({"C1": "samples/millions-of-americans.wav"}), text: "millions of americans"}, 
  "O" : {sample: new Tone.Sampler({"C1": "samples/my-doctor-said.wav"}), text: "my doctor said"}, 
  "P" : {sample: new Tone.Sampler({"C1": "samples/my-doctor-did-say.wav"}), text: "my doctor did say"}, 
  "Q" : {sample: new Tone.Sampler({"C1": "samples/chest-pain.wav"}), text: "chest pain"},
  "R" : {sample: new Tone.Sampler({"C1": "samples/they-can-help-you.wav"}), text: "they can help you"}, 
  "S" : {sample: new Tone.Sampler({"C1": "samples/works-like-a-dream.wav"}), text: "works like a dream"}, 
  "T" : {sample: new Tone.Sampler({"C1": "samples/may-become-dependant.wav"}), text: "may become dependant"}, 
  "U" : {sample: new Tone.Sampler({"C1": "samples/dont-stop-taking.wav"}), text: "dont stop taking"}, 
  "V" : {sample: new Tone.Sampler({"C1": "samples/unusual-changes-in-behaviour.wav"}), text: "unusual changes in behaviour"}, 
  "W" : {sample: new Tone.Sampler({"C1": "samples/coma-or-death.wav"}), text: "coma or death"}, 
  "X" : {sample: new Tone.Sampler({"C1": "samples/i-got-my-first-prescription-free.wav"}), text: "i got my first presciption free"},
  "Y" : {sample: new Tone.Sampler({"C1": "samples/free-for-upto-one-year.wav"}), text: "free for upto one year"},
  "Z" : {sample: new Tone.Sampler({"C1": "samples/depression.wav"}), text: "depression"},
  "0" : {sample: new Tone.Sampler({"C1": "samples/sexual-side-effects.wav"}), text: "sexual side effects"},
  "1" : {sample: new Tone.Sampler({"C1": "samples/headache.wav"}), text: "headache"},
  "2" : {sample: new Tone.Sampler({"C1": "samples/heart-attack.wav"}), text: "heart attack"},
  "3" : {sample: new Tone.Sampler({"C1": "samples/confusion.wav"}), text: "confusion"},
  "4" : {sample: new Tone.Sampler({"C1": "samples/adult-add.wav"}), text: "adult add"},
  "5" : {sample: new Tone.Sampler({"C1": "samples/insomnia.wav"}), text: "insomnia"},
  "6" : {sample: new Tone.Sampler({"C1": "samples/lung-disease.wav"}), text: "lung disease"}
}


for(let s in samples) {
  samples[s].sample.toMaster();
  samples[s].sample.volume.value = 0;
}
/////////---------- ------------------- --------------///////////////


let phrases = [
  "ABC", 
  "DEF", 
  "SOJ", 
  "UUP", 
  "SST", 
  "SGG", 
  "GOI", 
  "JII", 
  "JJV", 
  "BIW", 
  "XZ3", 
  "JKM", 
  "TUY", 
  "LNW", 
  "NWW", 
  "UFF", 
  "RF5", 
  "1F2", 
  "ZST" 
];

let seq = [
  [0, 0, 2, 2],
  [4, 2, 4, 2],
  [14, 3, 3, 14],
  [1, 4, 1, 4] 
]

let constructString = function() {
  let str = "";
  let randomPhrase = getRandomPhrase();
  for(let i in seq) {
    let bar = seq[i];
    for(let j in bar) {
      let el = bar[j];
      if(el == -1) {
        str += randomPhrase;
      } else {
        str += phrases[el];
      }
    }
  }
  return str;
}

let getRandomPhrase = function() {
  let all = Object.keys(samples).join('');
  let r1 = Math.floor(Math.random() * all.length);
  let r2 = Math.floor(Math.random() * all.length);
  let r3 = Math.floor(Math.random() * all.length);
  return all.charAt(r1) + all.charAt(r2) + all.charAt(r3);
}

let generateBarReplacementOrder = function() {
  let order = [];
  for(var i=0; i<20; i++) {
    order.push(Math.floor(Math.random() * seq.length));
  }
  return order;
}

let replace = function(barIndex) {
  let bar = seq[barIndex];
  console.log(bar);
  let elementToReplace = bar[Math.floor(Math.random() * bar.length)];
  console.log("replace this guy: " + elementToReplace);
  let isRandomPhrase = Math.random() < 0.3;
  let randomPhraseIndex = elementToReplace;
  while(bar.includes(randomPhraseIndex)) {
    randomPhraseIndex = Math.floor(Math.random() * phrases.length);
  }

  for(let i in bar) {
    if(bar[i] == elementToReplace) {
      if(isRandomPhrase < 0.3) {
        bar[i] = -1;
      } else {
        bar[i] = randomPhraseIndex;
      }
    }
  }
  console.log(seq);
}

let playNote = function(str, strIndex) {
  let c = str.charAt(strIndex);
  console.log(c);
  samples[c].sample.triggerAttackRelease("C1", 1.8);
  console.log(samples[c].text);
  drawText(samples[c].text);
}

let str = constructString();
let strIndex = 0;
let replacementIndex = 0;
let replacementOrder = generateBarReplacementOrder();

console.log(seq);

Tone.Transport.scheduleRepeat(function(time){
  playNote(str, strIndex);
  strIndex++;
  if(strIndex >= str.length) {
    console.log("replacing bar " + replacementIndex);
    replace(replacementOrder[replacementIndex]);
    replacementIndex++;
    replacementIndex = replacementIndex >= replacementOrder.length ? 0 : replacementIndex;
    str = constructString();
    strIndex = 0;
    console.log(str);
  }
}, "8n");


setTimeout(function() {
  Tone.Transport.start();
  console.log("START");
}, 4000);



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  textSize(32);
  fill(255);
}

function draw() {
}

function drawText(str) {
  background(0, 100);
  text(str, random(0.1*width, 0.6*width), random(0.4*height, 0.8*height));
}

