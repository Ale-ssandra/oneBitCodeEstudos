let menu;
let vagas = [];
do {
  menu = prompt(
    "1- Mostrar vagas disponiveis \n 2- Criar nova vaga \n 3- Visualizar uma vaga \n 4- Candidatar-se a uma vaga \n 5- Excluir vaga \n 6- Sair"
  );
  switch (menu) {
    case "1":
       for (let index = 0; index < vagas.length; index++) {
        console.log(index + 1 ,  vagas[index].nomeVaga )

       }
        break
    case "2":
      let novaVaga = { nomeVaga: "", descricao: "", data: "" };
        novaVaga.nomeVaga = prompt("Qual nome da vaga?");
        novaVaga.descricao = prompt("Fale um pouco da vaga:");
        novaVaga.data = prompt("Qual data limite: xx-xx-xxxx");
        vagas.push(novaVaga);
        console.log(vagas);
    
      break;
    case "3":
      break;
    case "4":
    //   let candidato = {nomeCandidato: "", indice: ""}
    //   candidato.nomeCandidato = prompt("Qual nome do candidato?")
    //  let numero = candidato.indice = prompt("informe indice")
    //   vagas.findIndex(numero) 

 // nao deu certo
      break;
    case "5":
      let indice = prompt("Qual posiçao de vaga voce quer?")
      parseInt(indice)
     console.log (vagas.indexOf(indice))
      break;
    case "6":
      alert("Saindo!");

      break;

    default:
      break;
  }
} while (menu !== "6");
