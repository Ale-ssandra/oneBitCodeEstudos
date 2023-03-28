// let dinheiro = parseInt(prompt(`Quanto de dinheiro voce possui?`));

// do {
  
//   let menu =  prompt(`menu: \n 1 - Somar \n 2 - Subtrair \n 3 - sair`);

//   switch (menu) {
//     case "1":
//       let soma = parseInt(prompt("Quanto quer adicionar?"));
//       alert(dinheiro + soma);
//       break;
//     case "2":
//       let subtrair = parseInt(prompt("Quanto quer subtrair??"));
//       alert(dinheiro - subtrair);
//       break;
//     case "3":
//       alert("saindo");
//       break;
//     default:
//       alert(`opçao invalida`);
//       break;
//   }
// } while (menu !== "3");
let dinheiro = parseInt(prompt("Quanto de dinheiro voce possui?"));

let menu 

do {

   menu = prompt("menu: \n 1 - Somar \n 2 - Subtrair \n 3 - sair");

  switch (menu) {
    case "1":
      let soma = parseInt(prompt("Quanto quer adicionar?"));
      alert(dinheiro + soma);
      break;
    case "2":
      let subtrair = parseInt(prompt("Quanto quer subtrair??"));
      alert(dinheiro - subtrair);
      break;
    case "3":
      alert("saindo");
      break;
    default:
      alert("opçao invalida");
      break;
  }
} while (menu !== "3");