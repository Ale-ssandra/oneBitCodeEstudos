let menu;
let novaVaga = {}
let vagas = []
do {
  menu = prompt(
    "1- Mostrar vagas disponiveis \n 2- Criar nova vaga \n 3- Visualizar uma vaga \n 4- Candidatar-se a uma vaga \n 5- Excluir vaga \n 6- Sair"
  );
    switch (menu) {
        case "1":
         novaVaga = prompt("Qual seu nome")  
         vagas.push(novaVaga)
         console.log(vagas)
        case "2":
    
            break;
        case "3":
            
            break;
        case "4":
            
            break;
        case "5":
            
            break;
        case "6":
            alert("Saindo!")
            
            break;
    
        default:
            break;
    }


} while (menu !== "6");
