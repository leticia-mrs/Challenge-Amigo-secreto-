let amigos = [];

function adicionarAmigo() {
  const inputNomeAmigo = document.getElementById("nomeAmigo");
  const nomeAmigo = inputNomeAmigo.value;

  if (nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);
  inputNomeAmigo.value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultadoSorteio = document.getElementById("resultadoSorteio");
  resultadoSorteio.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

const botaoAdicionar = document.getElementById("adicionarAmigo");
botaoAdicionar.addEventListener("click", adicionarAmigo);

const botaoSortear = document.getElementById("sortearAmigo");
botaoSortear.addEventListener("click", sortearAmigo);