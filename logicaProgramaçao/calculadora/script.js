function calcular(num){

    let numero = document.getElementById('Visor').innerHTML;
    if(numero.toString().length >=16 ) return
    document.getElementById('Visor').innerHTML = numero + num ;
   
   
}
function apagar(){
let resultado = document.getElementById('Visor').innerHTML;
document.getElementById('Visor').innerHTML = resultado.substring(0, resultado.length -1)
}

function resetar(){
    document.getElementById('Visor').innerHTML = "";
}
function resultado(){
    var resultado = document.getElementById('Visor').innerHTML;
    if(resultado)
    {
        document.getElementById('Visor').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('Visor').innerHTML = "Nada..."
    }
    
}