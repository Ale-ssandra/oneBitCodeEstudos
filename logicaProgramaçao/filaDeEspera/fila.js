var pacientes = ["Paulo" , "Marcus", "Antonio", "Jessica", "Alma", "Debora"]
for (let index = 0; index < pacientes.length ; index++) {
    const element = pacientes[index];   
    console.log(`Pacientes: ${index + 1} ${pacientes[index]}`)
    
}
let menu;
do{
     menu = prompt(`1- Novo paciente \n 2-  Consultar paciente \n 3- sair `)

    switch(menu){
        case "1":
     let nome = prompt("Qual seu nome") 
     pacientes.push(nome)
     break
        case "2":
        let consultado =  pacientes.shift()
        console.log(consultado)
    break
       case "3":
        alert("Saindo do aplicativo...")
        break
    }
} while( menu !== "3"){
    alert("Saindo do aplicativo...")
}
   
