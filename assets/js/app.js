
const pizzas = [
    {
      nombre: "4 Quesos",
      ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Ricotta"]
    },
    {
      nombre: "Pepperoni",
      ingredientes: ["Mozzarella", "Pepperoni", "Tomate"]
    },
    {
      nombre: "Hawaiana",
      ingredientes: ["Mozzarella", "Jamón", "Piña"]
    }
  ];

  const pizzaSelect = document.getElementById("pizzaSelect");
  const resultado = document.getElementById("resultado");

  pizzas.forEach(pizza => {
    const option = document.createElement("option");
    option.value = pizza.nombre;
    option.textContent = pizza.nombre;
    pizzaSelect.appendChild(option);
  });

  function mostrarIngredientes() {
    const selectedPizzaName = pizzaSelect.value;
    const selectedPizza = pizzas.find(pizza => pizza.nombre === selectedPizzaName);
    if (selectedPizza) { //html
      resultado.innerHTML = `<h2>Ingredientes de ${selectedPizza.nombre}:</h2><ul>${selectedPizza.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}</ul>`;
    } else {
      resultado.innerHTML = "";
    }
  }


  function prepararPizza() {
    const selectedPizzaName = pizzaSelect.value;
    const selectedPizza = pizzas.find(pizza => pizza.nombre === selectedPizzaName);
    if (selectedPizza) {
      resultado.innerHTML = `<h2>Preparación de ${selectedPizza.nombre}:</h2>`;
      resultado.innerHTML += "<p> Extender la masa</p>";
      resultado.innerHTML += "<p> Agregar la salsa de tomate</p>";
      resultado.innerHTML += "<p> Agregar el queso mozzarella</p>";

      selectedPizza.ingredientes.forEach(ingrediente => {
        resultado.innerHTML += `<p> Agregar ${ingrediente}</p>`;
      });

      resultado.innerHTML += "<p> Hornear la pizza</p>";
    } else {
      resultado.innerHTML = "";
    }
  }