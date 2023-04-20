const nome = document.getElementById("nomeJogador");
const posicao = document.getElementById("escladaTime");
const camisa = document.getElementById("numeroCamisa");

function excluir() {
 const removerJog = document.getElementById("excluirjog").value
 const removendo = document.getElementById("jogador" + camisa)

 const confirmarExcluir = confirm("Deseja exluir jogador" + removendo + "?")

 if(confirmarExcluir){
  removendo.remove()
  removerJog.value = ""
 }
}

function escalar() {
  let confirmar = confirm("Deseja confirmar as informaçoes?");

  let ul = document.getElementById("itens");
  let newLiNome = document.createElement("li");
  let newLiposicao = document.createElement("li");
  let newLiCamisa = document.createElement("li");
  if (confirmar === true) {
    ul.appendChild(newLiNome).innerText = nome.value;
    ul.appendChild(newLiposicao).innerText = posicao.value;
    ul.appendChild(newLiCamisa).innerText = camisa.value;
    nome.value = "";
    posicao.value = "";
    camisa.value = "";
  } // caso a pessoa nao confirme, o input fica vazio
  else {
    nome.value = "";
    posicao.value = "";
    camisa.value = "";
  }
}
