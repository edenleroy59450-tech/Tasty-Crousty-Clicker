// Tasty Crousty Clicker
// Début du script.
// Ce fichier est volontairement un squelette à compléter.

let tasty = 0;
let perClick = 1;
let perSecond = 0;

function clickTasty(){
  tasty += perClick;
  updateUI();
}

function updateUI(){
  const score=document.getElementById("score");
  if(score) score.textContent=tasty;
}

setInterval(()=>{
  tasty += perSecond;
  updateUI();
},1000);
