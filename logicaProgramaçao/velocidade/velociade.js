let carro1 = prompt('digite nome do carro 1?')
let velocidade1 = prompt('Digite sua velocidade?')
let carro2 = prompt('digite nome do carro 2?')
let velocidade2 = prompt('Digite sua velocidade?')


if(velocidade1 > velocidade2){
    alert(`O carro com maior velociade é ${carro1}`)
}else if(velocidade2> velocidade1){
    alert(`O carro com maior velocidade é: ${carro2}`)

} else if (velocidade1 == velocidade2){
    alert(`Estão na mesma velocidade!`)

}