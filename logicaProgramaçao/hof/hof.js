function calcular(a,b, operacao){
    console.log("realizando uma operaçao")
    const resultado = operacao (a,b)
    return resultado
}
 function somar(x,y ){
    console.log("Realizando uma soma")
    return x + y 
 }
 function multiplicar(x , y){
    console.log("multiplicando")
    return x * y 

 }
 function subtracao(x , y){
    console.log("subtracao")
    return x - y 

 }
 function divisao(x , y){
    console.log("divisao")
    return x / y 

 }
  function resultado (a,b){
    console.log(calcular(a,b,somar))
    console.log  ( calcular(a,b,divisao))
    console.log (calcular(a,b,multiplicar))
    console.log (calcular(a,b,subtracao))
    
  }
  resultado(7,9)
  


// console.log(calcular(8,4, function (x,y)
// {
//     console.log("realizando uma subtraçao")
// return x - y 
// }))
