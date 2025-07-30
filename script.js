const startButton = document.getElementById("start-button");
const intro = document.getElementById("intro");
const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");
const options = document.getElementById("options");
const jumpscare = document.getElementById("jumpscare");

startButton.addEventListener("click", () => {
  intro.style.display = "none";
  storyContainer.style.display = "block";
  showScene("intro");
});

const scenes = {
  intro: {
    text: "Es medianoche. Estás sola en casa con tu gemela, Juri. De repente escuchan un golpe en la puerta principal. Juri te mira, confundida.",
    choices: [
      { text: "Ir tú a revisar", next: "you_check" },
      { text: "Decirle a Juri que revise", next: "juri_checks" }
    ]
  },
  you_check: {
    text: "Caminas hacia la puerta. Afuera no hay nadie, pero ves una nota que dice 'Ya entré'.",
    choices: [
      { text: "Cerrar con llave rápidamente", next: "lock_door" },
      { text: "Buscar a Juri corriendo", next: "find_juri" }
    ]
  },
  juri_checks: {
    text: "Juri va a revisar. Pasa un minuto... no regresa.",
    choices: [
      { text: "Ir a buscarla", next: "find_juri" },
      { text: "Cerrar con llave y esconderte", next: "hide" }
    ]
  },
  lock_door: {
    text: "Cierras con llave, pero al girarte... Juri está parada detrás de ti, con los ojos completamente negros.",
    choices: [
      { text: "Hablarle", next: "talk_to_juri" },
      { text: "Correr", next: "run" }
    ]
  },
  find_juri: {
    text: "Buscas a Juri por la casa. La encuentras en la cocina, pero hay otra Juri en las escaleras.",
    choices: [
      { text: "¿Cuál es la real?", next: "which_juri" }
    ]
  },
  hide: {
    text: "Te escondes en el armario. Oyes pasos... pero no sabes si es Juri... o 'la otra'.",
    choices: [
      { text: "Salir del armario", next: "exit_closet" },
      { text: "Quedarte callada", next: "stay_hidden" }
    ]
  },
  which_juri: {
    text: "Ambas Juri dicen: ¡Soy la verdadera! ¡No le creas a ella!",
    choices: [
      { text: "Preguntar algo que solo tu gemela sabría", next: "question" },
      { text: "Correr sin confiar en ninguna", next: "run" }
    ]
  },
  question: {
    text: "La Juri falsa responde mal... sus ojos se vuelven negros. ¡Grita y corre hacia ti!",
    choices: [
      { text: "Cerrar los ojos", next: "end_jumpscare" },
      { text: "Enfrentarla", next: "end_jumpscare" }
    ]
  },
  exit_closet: {
    text: "Sales del armario... y una figura idéntica a ti te observa desde el espejo.",
    choices: [
      { text: "Tocar el espejo", next: "end_jumpscare" },
      { text: "Romperlo", next: "end_jumpscare" }
    ]
  },
  stay_hidden: {
    text: "Te quedas callada... hasta que escuchas: 'Te encontré' justo detrás de ti.",
    choices: [
      { text: "Gritar", next: "end_jumpscare" },
      { text: "Correr", next: "end_jumpscare" }
    ]
  },
  talk_to_juri: {
    text: "Intentas hablarle... pero ella sonríe y dice: 'Ya no soy Juri'.",
    choices: [
      { text: "Retroceder", next: "end_jumpscare" },
      { text: "Abrazarla", next: "end_jumpscare" }
    ]
  },
  run: {
    text: "Corres, pero no importa cuánto corras... siempre terminas en la misma habitación.",
    choices: [
      { text: "Gritar", next: "end_jumpscare" },
      { text: "Cerrar los ojos", next: "end_jumpscare" }
    ]
  },
  end_jumpscare: {
    text: "",
    choices: []
  }
};

function showScene(sceneKey) {
  const scene = scenes[sceneKey];
  if (sceneKey === "end_jumpscare") {
    storyContainer.style.display = "none";
    jumpscare.style.display = "block";
    jumpscare.textContent = "¡AAAAAAAAAAAH!";
    return;
  }

  storyText.textContent = scene.text;
  options.innerHTML = "";
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => showScene(choice.next));
    options.appendChild(button);
  });
}
