let cartas = []
let menu;

do{ menu = prompt('1 Add carta \n 2 Puxar carta \n 3 sair')

switch (menu) {
    case "1":
       let addCarta = prompt('Adicione uma carta:')
        cartas.push(addCarta)
        alert(cartas)
        console.log(cartas)

        break;

    case "2":
      let remover =  cartas.pop()
      if(remover){
          alert(remover)
          console.log(remover)
      }
      else{
        alert("sem cartas!")
      }
    break
    case"3":
    alert("saindo")
    break
    default:
        alert("Opção invalida")
        break;
}
}while(menu !== "3"){
  
}





