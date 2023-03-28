function ola() {
  let data = new Date();
  let ano = data.getFullYear();
  console.log(ano)
  let nome = document.getElementById("nome");
  let sobrenome = document.getElementById("sobrenome");
  let area = document.getElementById("area");
  let anoNasc = document.getElementById("nascimento").value;
  console.log(anoNasc)
  anoNasc = parseFloat(anoNasc)
  ano = parseFloat(ano)
  let idade = parseFloat(ano) - parseFloat(anoNasc) ;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `ola ${nome.value} ${sobrenome.value}!
   Vejo que esteá no campos de estudo ${area.value} e que tem ${idade} anos.`;

}
