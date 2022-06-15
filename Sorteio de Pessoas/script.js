let elementoInput = document.getElementById("elementoInput");
let buttonElement = document.getElementById("buttonElement");
let ulElement = document.getElementById("ulElement");

let participantes = [];

function mostraParticipantes() {
  ulElement.innerHTML = "";

  for (participante of participantes) {
    let criarlista = document.createElement("li");
    let textolista = document.createTextNode(participante);

    let elementoLink = document.createElement("a");
    let pos = participantes.indexOf(participante);

    let linkTexto = document.createTextNode("X");
    elementoLink.appendChild(linkTexto);

    elementoLink.setAttribute("href", "#");
    elementoLink.setAttribute("onclick", `deletaParticipante(${pos})`);

    criarlista.appendChild(textolista);
    ulElement.appendChild(criarlista);
    criarlista.appendChild(elementoLink);
  }
}

mostraParticipantes();

function addParticipantes() {
  let conteudoInput = elementoInput.value;
  if (conteudoInput.length <= 1) {
    alert("Digite um nome");
    elementoInput.value = "";
  } else {
    participantes.push(conteudoInput);
    elementoInput.value = "";
  }
  mostraParticipantes();
}

function deletaParticipante(pos) {
  participantes.splice(pos, 1);
  mostraParticipantes();
}

function sortear() {
  let participante = participantes.length;
  if (participante == 0) {
    alert("Primeiro Digite os Participantes");
  } else {
    let sorteio = Math.floor(Math.random() * participante);
    document.getElementById("sorteado").innerHTML = participantes[sorteio];
    document.getElementById("resu").innerText = "Resultado"
}

}
