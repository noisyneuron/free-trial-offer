Tone.Transport.bpm.value = 50;

/////////---------- SAMPLES --------------///////////////
let samples = {
  "A" : {sample: new Tone.Sampler({"C1": "samples/talk-to-your-doctor2.wav"}), text: "talk to your doctor"},
  "B" : {sample: new Tone.Sampler({"C1": "samples/ask-your-doctor3.wav"}), text: "ask your doctor"},
  "C" : {sample: new Tone.Sampler({"C1": "samples/my-doctor-did-say.wav"}), text: "my doctor did say"}, 
  "D" : {sample: new Tone.Sampler({"C1": "samples/dont-stop-taking.wav"}), text: "dont stop taking"}, 
  "E" : {sample: new Tone.Sampler({"C1": "samples/works-like-a-dream.wav"}), text: "works like a dream"}, 
  "F" : {sample: new Tone.Sampler({"C1": "samples/may-become-dependant.wav"}), text: "may become dependant"}, 
  "G" : {sample: new Tone.Sampler({"C1": "samples/millions-of-americans.wav"}), text: "millions of americans"}, 
  "H" : {sample: new Tone.Sampler({"C1": "samples/coma-or-death.wav"}), text: "coma or death"}, 
  "I" : {sample: new Tone.Sampler({"C1": "samples/free-trial-offer2.wav"}), text: "free trial offer"},
  "J" : {sample: new Tone.Sampler({"C1": "samples/i-feel-fine.wav"}), text: "i feel fine"}, 
  "K" : {sample: new Tone.Sampler({"C1": "samples/thoughts-of-suicide.wav"}), text: "thoughts of suicide"},
  "L" : {sample: new Tone.Sampler({"C1": "samples/i-got-my-first-prescription-free.wav"}), text: "i got my first presciption free"},
  "M" : {sample: new Tone.Sampler({"C1": "samples/heart-attack.wav"}), text: "heart attack"},
  "N" : {sample: new Tone.Sampler({"C1": "samples/unusual-changes-in-behaviour.wav"}), text: "unusual changes in behaviour"},
  "O" : {sample: new Tone.Sampler({"C1": "samples/depression.wav"}), text: "depression"},
  "P" : {sample: new Tone.Sampler({"C1": "samples/side-effects-may-include.wav"}), text: "side effects may include"},
  "Q" : {sample: new Tone.Sampler({"C1": "samples/confusion.wav"}), text: "confusion"},
  "R" : {sample: new Tone.Sampler({"C1": "samples/my-doctor-said.wav"}), text: "my doctor said"}, 
  "S" : {sample: new Tone.Sampler({"C1": "samples/serious-side-effects.wav"}), text: "serious side effects"},
  "T" : {sample: new Tone.Sampler({"C1": "samples/can-lead-to-coma-or-death.wav"}), text: "can lead to coma or death"}, 
  "U" : {sample: new Tone.Sampler({"C1": "samples/i-feel-better.wav"}), text: "i feel better"}, 
  "V" : {sample: new Tone.Sampler({"C1": "samples/impaired-judgement.wav"}), text: "impaired judgement"},
  "W" : {sample: new Tone.Sampler({"C1": "samples/increased-risk-of-death.wav"}), text: "increased risk of death"}, 
  "X" : {sample: new Tone.Sampler({"C1": "samples/lung-disease.wav"}), text: "lung disease"},
  "Y" : {sample: new Tone.Sampler({"C1": "samples/chest-pain.wav"}), text: "chest pain"},
  "Z" : {sample: new Tone.Sampler({"C1": "samples/they-can-help-you.wav"}), text: "they can help you"}, 
  "0" : {sample: new Tone.Sampler({"C1": "samples/tell-your-doctor2.wav"}), text: "tell your doctor"},
  "1" : {sample: new Tone.Sampler({"C1": "samples/headache.wav"}), text: "headache"}, 
  "2" : {sample: new Tone.Sampler({"C1": "samples/free-for-upto-one-year.wav"}), text: "free for upto one year"}
}


for(let s in samples) {
  samples[s].sample.toMaster();
  samples[s].sample.attack = 0;
  samples[s].sample.volume.value = 0;
}
/////////---------- ------------------- --------------///////////////


// let phrases = [
//   "ABC", 
//   "SST", 
//   "DGG", 
//   "PUU",
//   "XZV",
//   "BIW",
//   "DEF", 
//   "OUU", 
//   "UFF", 
//   "GOI", 
//   "JII", 
//   "JJV", 
//   "TUY", 
//   "LNW", 
//   "NWW", 
//   "RF5", 
//   "1F2", 
//   "ZST" 
// ];

// let seq = [
//   [0, 0, 0, 1, 1, 3, 3, 3],
//   [2, 1, 2, 2, 1, 3, 3, 2],
//   [4, 4, 4, 2, 2, 3, 3, 4]
// ]

// let constructString = function() {
//   let str = "";
//   let randomPhrase = getRandomPhrase();
//   for(let i in seq) {
//     let bar = seq[i];
//     for(let j in bar) {
//       let el = bar[j];
//       if(el == -1) {
//         str += randomPhrase;
//       } else {
//         str += phrases[el];
//       }
//     }
//   }
//   return str;
// }

// let getRandomPhrase = function() {
//   let all = Object.keys(samples).join('');
//   let r1 = Math.floor(Math.random() * all.length);
//   let r2 = Math.floor(Math.random() * all.length);
//   let r3 = Math.floor(Math.random() * all.length);
//   return all.charAt(r1) + all.charAt(r2) + all.charAt(r3);
// }

// let generateBarReplacementOrder = function() {
//   let order = [];
//   for(var i=0; i<20; i++) {
//     order.push(Math.floor(Math.random() * seq.length));
//   }
//   return order;
// }

let rules = {
  "A" : ["AB", "BC", ""],
  "B" : ["BC", "CD", ""],
  "C" : ["CD", "DE", ""],
  "D" : ["DE", "EF", ""],
  "E" : ["EF", "FG", ""],
  "F" : ["FG", "GH", ""],
  "G" : ["GH", "HI", ""],
  "H" : ["HI", "IJ", ""],
  "I" : ["IJ", "JK", ""],
  "J" : ["JK", "KL", ""],
  "K" : ["KL", "LM", ""],
  "L" : ["LM", "MN", ""],
  "M" : ["MN", "NO", ""],
  "N" : ["NO", "OP", ""],
  "O" : ["OP", "PQ", ""],
  "P" : ["PQ", "QR", ""],
  "Q" : ["QR", "RS", ""],
  "R" : ["RS", "ST", ""],
  "S" : ["ST", "TU", ""],
  "T" : ["TU", "UV", ""],
  "U" : ["UV", "VW", ""],
  "V" : ["VW", "WX", ""],
  "W" : ["WX", "XY", ""],
  "X" : ["XY", "YZ", ""],
  "Y" : ["YZ", "Z0", ""],
  "Z" : ["Z0", "01", ""],
  "0" : ["01", "12", ""],
  "1" : ["12", "2A3", ""],
  "2" : ["2A", "AB", ""],
  // "3" : ["3A", "AB", ""],
  // "4" : ["45", "5A", ""],
  // "5" : ["5A", "AB", ""]
}

let replace = function(str) {
  let strArray = str.split('');
  let newStr = "";
  for(let c of strArray) {
    let options = rules[c];
    console.log(options);
    newStr += options[ Math.floor(Math.random() * options.length )];
  }
  return newStr;
}

let playNote = function(str, strIndex) {
  let c = str.charAt(strIndex);
  console.log(c);
  samples[c].sample.triggerAttackRelease("C1", 1.8);
  console.log(samples[c].text);
  drawText(samples[c].text);
}

let str = "ABABCBCBCDCDCDEDEFDEFGHEFGHEFGHIHIHIJIJKJLKMLMNMN";
let strIndex = 0;

Tone.Transport.scheduleRepeat(function(time){
  playNote(str, strIndex);
  strIndex++;
  if(strIndex >= str.length) {
    str = replace(str);
    strIndex = 0;
    console.log(str);
  }
}, "8n");


setTimeout(function() {
  Tone.Transport.start();
  console.log("START");
}, 8000);




//////////////----------------- P5 ------------------//////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(0);
  strokeWeight(30);
  fill(255);
}

function drawText(str) {
  background(0, 5);
  textSize(random(48, 70));
  text(str, random(-0.1*width, 0.9*width), random(0, height));
}

