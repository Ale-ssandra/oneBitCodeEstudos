let menu;

do {
  menu = prompt(
    `MENU: \n 1 - um \n 2 - dois \n 3 - tres \n 4 - quatro \n 5 - sair `
  );

  switch (menu) {
    case "1":
      alert(`voce escolheu a opção numero 1`);
      break;
    case "2":
      alert(`voce escolheu a opção numero 2`);

      break;
    case "3":
      alert(`voce escolheu a opção numero 3`);

      break;
    case "4":
      alert(`voce escolheu a opção numero 4`);
      break;
      case "5":
        alert(`encerrando`)
        break
        default: 
        alert(`opçao invalida`)
  }
} while (menu !== "5");
