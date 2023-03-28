let metros = prompt('Digite o valor em metros?')

let unidade = prompt(
    "Qual unidade deseja converter" +
"\n1. milimetros (mm)"+
"\n2. centímetros (cm)"+
"\n3. decímetros (dm)"+
"\n4. decâmetros (dam)"+
"\n5. hectômetros (hm) "+
"\n6. quilômetros (km)"
)
switch(unidade){

    case "1":
        alert(metros*1000)
        break

    case "2":
        alert(metros*100)
        break
    case "3":

        alert(metros*10)
        break
    case "4":
    
        alert(metros/10)
        break
    case "5":
      
        alert(metros/100)
        break
    case "6":
        alert(metros/1000)
        break
 default:('opçao invalida')

}