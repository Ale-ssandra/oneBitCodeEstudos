let menu;
let imoveis = [];
do {
  
    alert("Total de imoveis cadastrados:" + imoveis.length)
  menu = prompt(
    " 1-Cadastrar um imovel \n 2-Mostrar imoveis cadastrados \n 3-Sair"
  );
  switch (menu) {
    case "1":
      let imovel = {};
      imovel.nomeProprietario = prompt("Qual nome do proprietário?");
      imovel.qntQuartos = prompt("Qual quantidades de quartos?");
      imovel.qntBanheiros = prompt("Quantidade de banheiros?");
      imovel.garagem = prompt(" Possui garagem? s/n");

      imoveis.push(imovel);

      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        console.log(imoveis[i]);
      }
      break;
    case "3":
      console.log("Encerrando!");
    default:
      break;
  }
} while (menu !== "3");
{
}
