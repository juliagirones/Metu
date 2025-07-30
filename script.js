// script.js const scenes = [ { text: "Metu y Eka se adentran en el bosque, los árboles crujen bajo sus pasos.", choices: [ { text: "Seguir el canto de los cuervos", next: 1 }, { text: "Tomar el sendero del riachuelo", next: 2 } ] }, { text: "Los cuervos parecen guiar a Metu hasta un claro oscuro. Eka siente algo... raro.", choices: [ { text: "Explorar el claro", next: 3 }, { text: "Regresar con Eka", next: 2 } ] }, { text: "El riachuelo murmura secretos. Un pez con ojos humanos salta y los mira.", choices: [ { text: "Ignorar y seguir", next: 3 }, { text: "Intentar atraparlo", next: 4 } ] }, { text: "Ambos caminos los llevan al mismo lugar: la entrada de una caverna. El cielo se tiñe de rojo mientras anochece. Un sonido familiar...", choices: [ { text: "Escuchar con atención", next: 5 } ] }, { text: "El pez habla: 'No deberías estar aquí, Metu'. Eka lo pisa sin querer y desaparece en humo.", choices: [ { text: "Correr hacia la caverna", next: 3 } ] }, { text: "Una voz: 'Metu... soy yo, Juri'. Es imposible. Su hermana está a cientos de kilómetros. Una sombra se mueve rápida..."," + " antes de que puedas reaccionar, algo aparece detras de ella. [Jumpscare].", choices: [ { text: "Continuar...", next: null } ] } ];

let currentScene = 0;

function showScene(index) { const scene = scenes[index]; const textDiv = document.getElementById("scene-text"); const choicesDiv = document.getElementById("choices");

textDiv.textContent = scene.text; choicesDiv.innerHTML = "";

scene.choices.forEach(choice => { const button = document.createElement("button"); button.textContent = choice.text; button.onclick = () => { if (choice.next !== null) { showScene(choice.next); } else { textDiv.textContent = "[FIN DEL EPISODIO] ¿Continuar en el siguiente capítulo?"; choicesDiv.innerHTML = ""; } }; choicesDiv.appendChild(button); }); }

window.onload = () => showScene(currentScene);
