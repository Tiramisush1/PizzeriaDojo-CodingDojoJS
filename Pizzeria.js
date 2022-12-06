let pizza = {
    tipoCorteza:null,
    tipoSalsa:null,
    quesos:null,
    salsas:null,
}

console.log(pizza);

function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas) {
    let pizza = {}
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;

    return pizza
}

let pizza1 = pizzaOven("corteza delgada","salsa tradicional",["mozzarella"],["pepperoni","salchicha"])
let pizza2 = pizzaOven("borde de queso" , "salsa BBQ" , ["mozzarella"], ["champiñones", "aceitunas", "cebollas"])
let pizza3 = pizzaOven("pan" , "ketchup" , ["mozzarella", "parmesano"], ["champiñones", "piña"])
let pizza4 = pizzaOven("pan" , "salsa BBQ" , ["mozzarella", "chedar"], ["champiñones", "cebollas"])

console.log(pizza1);

console.log(pizza2);

console.log(pizza3);

console.log(pizza4);


//random

const pizzaRandom = function() {
    let pizza = {
            tipoCorteza:null,
            tipoSalsa:null,
            quesos:null,
            salsas:null,
        }

        let tipoCorteza=["corteza delgada","borde de queso","pan"],
        tipoSalsa=["salsa tradicional","salsa BBQ","ketchup"],
        quesos=[["mozzarella"],["mozzarella"],["mozzarella", "parmesano"],["mozzarella", "chedar"]],
        salsas=[["pepperoni","salchicha"],["champiñones", "aceitunas", "cebollas"],["champiñones", "piña"],["champiñones", "cebollas"]];

        let randomTipoCorteza= Math.round(Math.random()*2),
            randomTipoSalsa=Math.round(Math.random()*2),
            randomQuesos=Math.round(Math.random()*3),
            randomSalsas=Math.round(Math.random()*3);

            console.log(randomTipoCorteza);
            console.log(randomTipoSalsa);
            console.log(randomQuesos);
            console.log(randomSalsas);
            


    pizza.tipoCorteza=tipoCorteza[randomTipoCorteza];
    pizza.tipoSalsa=tipoSalsa[randomTipoSalsa];
    pizza.quesos=quesos[randomQuesos];
    pizza.salsas=salsas[randomSalsas];

    
    return pizza
}

console.log("Pizza random",pizzaRandom()); 
