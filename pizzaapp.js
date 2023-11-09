let ingredienteMasa = 200;
let ingredienteTomate = 200;
let ingredienteMozzarella = 200;
let ingredientePicadillo = 200;
let ingredienteCabrales = 200;
let ingredienteTorreznos = 200;
let ingredienteArzua = 200;

let masa = "masa";
let tomate = "tomate";
let mozzarella = "mozzarella";
let picadillo = "picadillo";
let cabrales = "cabrales";
let torreznos = "torreznos";
let Arzua = "arzua";


//  function app (){
//     elaborar();
//     precalentar();
//     cocinarPizza(5);
//     repartir ();
// }

function comprar() {
  console.log("vamos a ir a hacer la compra:");
  ingredienteMasa = 1;
  ingredienteTomate = 1;
  ingredienteMozzarella = 1;
  ingredientePicadillo = 1;
  ingredienteCabrales = 1;
  ingredienteTorreznos = 1;

  console.log("he comprado " + ingredienteMasa + " masa");
  console.log("he comprado " + ingredienteTomate + " tomate");
  console.log("he comprado " + ingredienteMozzarella + " mozarella");
  console.log("he comprado " + ingredientePicadillo + " picadillo");
  console.log("he comprado " + ingredienteCabrales + " cabrales");
  console.log("he comprado " + ingredienteTorreznos + " bandeja de torreznos");
}


export function elaborarMontaniesa() {
  console.log("Vamos a elaborar la pizza:");

  if (ingredienteMasa >= 1) {
    console.log("Sacar la " + masa + " de la caja y extenderla.");
  } if (ingredienteMasa <1) {
    console.log("No tienes " + masa + ". Vete a comprarla.");
  }

  if (ingredienteTomate >= 1) {
    console.log("Abrir el bote de " + tomate + " y echarlo sobre la masa.");
  } if (ingredienteTomate <1) {
    console.log("No tienes " + tomate + ". Vete a comprarlo.");
  }

  if (ingredienteMozzarella >= 1) {
    console.log("Abrir el paquete de " + mozzarella + " y espolvorearla por la pizza.");
  } if (ingredienteMozzarella <1) {
    console.log("No tienes " + mozzarella + ". Compra más.");
  }

  if (ingredientePicadillo >= 1) {
    console.log("Pasar el " + picadillo + " por la sartén y quitar el exceso de grasa.");
  } if(ingredientePicadillo <1) {
    console.log("No tienes " + picadillo + ". Vete a comprarlo.");
    }

    if (ingredientePicadillo >= 1) {
      console.log("Una vez frito el " + picadillo + " extenderlo sobre la pizza.");
    } if(ingredientePicadillo <1) {
      console.log("Si no pones el " + picadillo + ". No saldrá igual de rica.");
    }

    if (ingredienteCabrales >= 1) {
      console.log("Desmigar el " + cabrales);
    } if(ingredienteCabrales<1) {
      console.log("Sin " + cabrales + ". El sabor será más suave.");
    }

    if (ingredienteTorreznos >=1) {
        console.log("Cocinar los  " + torreznos);
    } if (ingredienteTorreznos <1) {
        console.log("Si no pones " + masa + ". Borja no cena porque la quiere con ellos.");
    }
  }


  export function elaborarLaVeroQueso() {
    console.log("Vamos a elaborar la pizza:");
  
    if (ingredienteMasa >= 1) {
      console.log("Sacar la " + masa + " de la caja y extenderla.");
    } if (ingredienteMasa <1) {
      console.log("No tienes " + masa + ". Vete a comprarla.");
    }
  
    if (ingredienteTomate >= 1) {
      console.log("Abrir el bote de " + tomate + " y echarlo sobre la masa.");
    } if (ingredienteTomate <1) {
      console.log("No tienes " + tomate + ". Vete a comprarlo.");
    }
  
    if (ingredienteMozzarella >= 1) {
      console.log("Abrir el paquete de " + mozzarella + " y espolvorearla por la pizza.");
    } if (ingredienteMozzarella <1) {
      console.log("No tienes " + mozzarella + ". Compra más.");
    }

      if (ingredienteCabrales >= 1) {
        console.log("Desmigar el " + cabrales);
      } if(ingredienteCabrales<1) {
        console.log("Sin " + cabrales + ". El sabor será más suave.");
      }

      if (ingredienteArzua >= 1) {
        console.log("Desmigar el " + Arzua);
      } if(ingredienteArzua<1) {
        console.log("Sin " + Arzua + ". El sabor será más suave.");
      }


    }
  




export function precalentar() {

    if (ingredienteMasa >=1) {
        console.log("Precalentamos el horno 20 minutos a 200 grados e introducimos la bandeja con la pizza.");
    } if (ingredienteMasa <1) {
        console.log("Si no precalientas el horno la " + masa + ", tardará más en cocinarse.");
    }
}


export function cocinarPizza(segundos) {
    let contador = segundos;
    const intervalo = setInterval(function() {
      if (contador === 0) {
        clearInterval(intervalo);
        console.log("ñeeeeee ñeeeeee ñeeeeeee...");
        console.log("¡Pizza preparada! ¡Borja está salivando!");
      } else {
        console.log(contador);
        contador--;
      }
    }, 1000);
  }


 export function repartir() {
    if (ingredienteMasa >=1) {
        console.log("Cuando la pizza esté lista, sacarla del horno, meterla en su caja y enviarsela a Borja.");
    } if (ingredienteMasa <1) {
        console.log("Si a Borja le envías la pizza con la masa " + masa + ", se pondrá triste y solo comerá los " + torreznos);
    }
}