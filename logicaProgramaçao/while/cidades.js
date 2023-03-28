let  nome = prompt('Qual é seu nome ?')
let cidades = ""
let contador = 0

let visitou = confirm('Voce ja visitou alguma cidade ?')

while(visitou === true){
 let  cidade = prompt('Qual nome da cidade?')
    cidades += "-" + cidade + "\n"
    contador ++
    visitou = confirm('Voce ja visitou mais alguma cidade ?')
  
}
alert(`Turista ${nome}\n Quantidade de cidades visistadas: ${contador} \n Cidades visistadas: ${cidades}`)