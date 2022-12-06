let pizza = {
    tipoCorteza:null,
    tipoSalsa:null,
    quesos:null,
    salsas:null,
}

console.log(pizza);

function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas) {
    let pizza = {}
    pizza.tipoCorteza=tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.quesos=quesos;
    pizza.salsas=salsas;

    return pizza
}

let pizza1 = pizzaOven ("corteza delgada", "salsa de tomate",["mozzarella"],["pepperoni", "salchichas"])
let pizza2 = pizzaOven ("borde de queso", "salsa BBQ", ["pepperoni" "carne"], ["champiñones, choclo"])
let pizza3 = pizzaOven ("masa pan", "ketchup", ["parmesano", "chedar"], ["choricillo", "tocino"], ["piña, tomate"]) 
let pizza4 = pizzaOven ("corteza delgada", "salsa de tomate", ["extra queso", "chedar", "jamon"], ["tomate","pimineto verde","cebolla"])
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
        let tipoCorteza= ["corteza delgada", "borde de queso", "masa pan"],
        let tipoSalsa= ["salsa de tomate", "salsa BBQ" "ketchup"],
        let queso= ["extra queso", "chedar", "parmesano", "mozzarella"],
        let salsas= [["champiñones, choclo"],["pepperoni", "salchichas"],["tomate","pimineto verde","cebolla"]["piña", "tomate"]]

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
