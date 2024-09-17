const superContainer = document.querySelector(".super-container");
const body = document.querySelector("body");

const buttonContainer = document.createElement("div");
const button = document.createElement("button");
button.textContent = "Cambiar Cuadrícula";
buttonContainer.appendChild(button);

buttonContainer.classList.add("button-container");
body.insertBefore(buttonContainer, superContainer);

function createGrid(size) {
  superContainer.innerHTML = ""; // Limpia el contenedor

  for (let i = 0; i < size; i++) {
    const container = document.createElement("div");
    container.classList.add("grid-row");

    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-cell");
      container.appendChild(div);
    }

    superContainer.appendChild(container);
  }
}

// Crear cuadrícula inicial 4x4
createGrid(4);

button.addEventListener("click", function () {
  let number = prompt(
    "Introduce el número de cuadrados por lado que quieres para tu nueva cuadrícula (no más de 100)"
  );
  number = parseInt(number);
  if (number > 0 && number <= 100) {
    createGrid(number);
  } else {
    alert("Por favor, introduce un número entre 1 y 100.");
  }
});
