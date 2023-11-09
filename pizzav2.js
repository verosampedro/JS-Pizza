const prompt = promptSync();


import promptSync from "prompt-sync";

import { elaborarMontaniesa, elaborarLaVeroQueso, precalentar, repartir, cocinarPizza } from "./pizzaapp.js";

function app(){

    const result = prompt("Pideme tu pizza ");


}
console.log("Bienvenido a Pizzas Pardo ¿Qué desea?");

console.log("Opción 1 - Pizza La montañesa ");
console.log("Opción 2 - Pizza La Vero Queso ");

const opcion = prompt("Elige una pizza :D ");


let pizzaElegida;

switch (opcion) {
    case '1':
        pizzaElegida = precalentar(); elaborarMontaniesa();  cocinarPizza(2);  repartir();
        break;

    case '2':
        pizzaElegida = precalentar(); elaborarLaVeroQueso();  cocinarPizza(2);  repartir();

    default:
        console.log("Error vuelve a seleccionar la pizza ");
        break;
    }