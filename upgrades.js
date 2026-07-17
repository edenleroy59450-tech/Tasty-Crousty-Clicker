// ======================================
// TASTY CROUSTY CLICKER - UPGRADES.JS
// ======================================

let upgrades = [

{
    id:0,
    name:"🍔 Restaurant",
    description:"+1 Tasty Crousty / seconde",
    price:25,
    cps:1,
    owned:0
},

{
    id:1,
    name:"👨‍🍳 Employé",
    description:"+5 / seconde",
    price:100,
    cps:5,
    owned:0
},

{
    id:2,
    name:"🔥 Cuisine Pro",
    description:"+20 / seconde",
    price:500,
    cps:20,
    owned:0
},

{
    id:3,
    name:"🍟 Friteuse XXL",
    description:"+75 / seconde",
    price:2500,
    cps:75,
    owned:0
},

{
    id:4,
    name:"🚚 Camion de livraison",
    description:"+250 / seconde",
    price:10000,
    cps:250,
    owned:0
},

{
    id:5,
    name:"🏢 Deuxième Restaurant",
    description:"+1000 / seconde",
    price:50000,
    cps:1000,
    owned:0
},

{
    id:6,
    name:"🤖 Robot Cuisinier",
    description:"+5000 / seconde",
    price:250000,
    cps:5000,
    owned:0
},

{
    id:7,
    name:"🏭 Usine Tasty",
    description:"+20000 / seconde",
    price:1000000,
    cps:20000,
    owned:0
},

{
    id:8,
    name:"🌍 Franchise",
    description:"+100000 / seconde",
    price:10000000,
    cps:100000,
    owned:0
}

];

// ==========================

function updateShop(){

    const shop=document.getElementById("shop");

    if(!shop) return;

    shop.innerHTML="";

    upgrades.forEach((u)=>{

        const div=document.createElement("div");

        div.className="shopItem";

        div.innerHTML=`
        <h3>${u.name}</h3>
        <p>${u.description}</p>
        <p>Prix : ${u.price}</p>
        <p>Acheté : ${u.owned}</p>
        `;

        div.onclick=()=>buyUpgrade(u.id);

        shop.appendChild(div);

    });

}

// ==========================

function buyUpgrade(id){

    const u=upgrades[id];

    if(tasty<u.price){

        return;

    }

    tasty-=u.price;

    perSecond+=u.cps;

    u.owned++;

    u.price=Math.floor(u.price*1.15);

    updateUI();

    updateShop();

}
