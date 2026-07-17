// ========================================
// TASTY CROUSTY CLICKER - SAVE.JS
// ========================================

const SAVE_KEY = "TastyCroustySave";

// Sauvegarder
function saveGame() {

    const save = {

        tasty: tasty,
        perClick: perClick,
        perSecond: perSecond,

        upgrades: upgrades,

        totalClicks: totalClicks,

        prestige: prestige

    };

    localStorage.setItem(SAVE_KEY, JSON.stringify(save));

    console.log("Jeu sauvegardé");

}

// Charger
function loadGame() {

    const save = JSON.parse(localStorage.getItem(SAVE_KEY));

    if(!save) return;

    tasty = save.tasty || 0;

    perClick = save.perClick || 1;

    perSecond = save.perSecond || 0;

    upgrades = save.upgrades || {};

    totalClicks = save.totalClicks || 0;

    prestige = save.prestige || 0;

    updateUI();

    updateShop();

    console.log("Sauvegarde chargée");

}

// Supprimer la sauvegarde
function resetGame(){

    if(confirm("Supprimer votre partie ?")){

        localStorage.removeItem(SAVE_KEY);

        location.reload();

    }

}

// Sauvegarde automatique toutes les 10 secondes
setInterval(saveGame,10000);

// Sauvegarder avant de quitter la page
window.addEventListener("beforeunload",saveGame);

// Charger automatiquement au démarrage
window.addEventListener("load",loadGame);
