// Tasty Crousty Clicker
// Début du script.
// Ce fichier est volontairement un squelette à compléter.

let tasty = 0;
let perClick = 1;
let perSecond = 0;

let totalClicks = 0;

let prestige = 0;

let upgrades = {};

function clickTasty(){
  tasty += perClick;
  updateUI();

  updateShop();
}

function updateUI(){
  const score=document.getElementById("score");
  if(score) score.textContent=tasty;
}

setInterval(()=>{
  tasty += perSecond;
  updateUI();
},1000);
