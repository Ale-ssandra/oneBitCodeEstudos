let vagas = []
let posiçao = 1;
let addVagas={}
const candidatos = []
function listarVagas() {
    for (let i = 0; i < vagas.length; i++) {
      posiçao++
     
      
    }
    console.log(vagas)
}
function criarVaga (){
    const addVagas = {
      posiçao: posiçao,
      nome: prompt("Nome da vaga"),
      descriçao: prompt("Qual descrição da vaga:"),
      data: prompt("Data (dd/mm/aaaa)")
    };
    
    vagas.push(addVagas);
    posiçao++;
    console.log(vagas);
  }
  function addCandidado(){
    let candidato = {nomeCandidato: "",posiçao}
    candidato.nomeCandidato = prompt("Qual nome do candidato?")
    
    vagas[posiçao] = prompt("Qual numero da vaga?")
    candidatos.push(candidato)
    vagas.push(candidatos)
    
    
  }

function menu(){
  do {
    menu = prompt("1-vagas disponiveis \n 2-criar vaga \n 3-visualizar vaga \n 4- inscrever candidato \n 5-Excluir vaga \n 6- sair ")
    	 switch (menu) {
        case "1":
         listarVagas() 
          break;
        case "2":
          criarVaga()
          break;
        case "3":
          
          break;
        case "4":
        addCandidado()
          break;
        case "5":
          
          break;
        case "6":
          
          break;
       
        default:
          console.log("Opçao invalida")
          break;
       }


    
  } while (menu !== "6");
    console.log("saindo")

} menu()