{
  alert("Personagem que ataca!");
  let nome1 = prompt("Qual nome do personagem 1 ?");
  let ataque = prompt("Qual dano do seu poder?");

  alert("Personagem que recebe dano!");
  let nome2 = prompt("Nome do segundo persoangem?");
  let vida = prompt("Qual quantidade de vida?");
  let defesa = prompt("Quanto de defesa?");
  let escudo = confirm("Possui escudo?");

  let dano = 0;

  // primeira regra sem escudo
  if (ataque > defesa && escudo === true) {
    dano = (ataque - defesa) / 2;

    console.log(ataque);
    console.log(defesa);
    console.log(escudo);
    console.log(dano);
  }
  //Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo,
  // o dano causado será igual a metade da diferença entre o ataque e a defesa.
  else if (ataque > defesa && escudo === false) {
    dano = ataque - defesa;
    console.log(ataque);
    console.log(defesa);
    console.log(escudo);
    console.log(dano);
  }
  //ataque menor que defesa
  else if (ataque <= defesa) {
    dano = 0;
  }

let danoCausado = vida - dano

  alert(`${nome1} causou ${dano} em ${nome2}`)
  alert(`${nome1} Poder de ataque ${ataque} `)
  alert(`${nome2} Poder de defesa ${defesa} e se posssui escudo ${escudo} e vida ${danoCausado}`)
}
//placar
