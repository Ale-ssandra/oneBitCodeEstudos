let menu;
do {
  menu = prompt(
    "Escolha uma opção para calcular: \n 1- Área triângulo \n 2- Área retângulo \n 3- Área quadrado \n 4- Área trapézio \n 5- Área do cícurlo \n 6- Sair"
  );
  switch (menu) {
    case "1":
      function triangulo(base, altura) {
        base = prompt("Informe a base :");
        altura = prompt("Informe a altura :");
        return console.log(
          "Valor da área do triângulo calculada: " + (base * altura) / 2
        );
      }
      triangulo();
      break;
    case "2":
      function retangulo(base, altura) {
        base = prompt("Informe o valor da base :")
        altura = prompt("Informe o valor da altura: ")
        return console.log("Valor da área do retângulo: " + base*altura)
    }
    retangulo()

      break;
    case "3":
        function quadrado (lado){
            lado = prompt("Informe tamanho do lado do quadrado:")
            return console.log("Área do quadradro é : " + lado*lado )
        }
        quadrado()
      break;
    case "4":
        function trapezio(baseMaior, baseMenor, altura) {
            baseMaior =parseFloat( prompt("Informe a base maior do trapézio:"))
            baseMenor =parseFloat ( prompt("Informe a base menor do trapézio:"))
            altura = parseFloat( prompt("Informe o valor da altura : "))
            return console.log("Valor calculado do trapézio: " + (baseMaior+baseMenor) * altura /2)
            
        }
        trapezio()
      break;
    case "5":
        function circulo (raio , pi = 3.14){
            raio = prompt("Informe o valor do raio :")
            return console.log("Valor área do círculo: " + (raio * raio)* pi)
        }
        circulo()
      break;
    case "6":
      alert("Saindo...");
      break;

    default:
        alert("Opção invalida.")
      break;
  }
} while (menu !== "6");
