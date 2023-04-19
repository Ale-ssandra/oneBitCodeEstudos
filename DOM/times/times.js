function escalar() {
  const nome = document.getElementById("nomeJogador");
  const posicao = document.getElementById("escladaTime");
  const camisa = document.getElementById("numeroCamisa");

  let ul = document.getElementById("itens");
  let newLiNome = document.createElement("li");
  let newLiposicao = document.createElement("li");
  let newLiCamisa = document.createElement("li");
   
    ul.appendChild(newLiNome).innerText = nome.value
    ul.appendChild(newLiposicao).innerText = posicao.value
    ul.appendChild(newLiCamisa).innerText = camisa.value
}
