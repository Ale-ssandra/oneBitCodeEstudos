let palavra = prompt('Informe uma palvra:')
let palavrainvert = ""
for (let i = palavra.length -1 ; i >= 0 ; i--){
    palavra += palavra[i]
}
if (palavra === palavrainvert){
    alert("É um palindromo")
}else {
    alert( "nao é palindromo " + palavra + "\n " + palavrainvert)}