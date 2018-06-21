//Criando um "vetor" para as palavras. Para adicionar palavras é só colocar a palavra desejada: ( "palavra", )
var palavras = ["carro", "queijo", "jogo", "tigela", "batata", "janela", "parede"];

//Esoclhendo uma palavra aleatória, dentre as opções da variável "palavras" 
var palavra = palavras[Math.floor(Math.random() * palavras.length)];

//Vetor para resposta
//Usando "_" indicando quantas letras a palavra possui, como no jogo da forca tradicional.
var resposta = [];
for (var i = 0; i < palavra.length; i++) {
  resposta[i] = "_";
}

var letrasRestantes = palavra.length;

//Loop do jogo
function game() {
  console.log(palavra);

  

  //Prompt para o jogador adivinhar 
  var adivinhar = document.getElementById("word").value;

  if (adivinhar.length >= 2) {
    alert("Adivinhe uma letra por vez.");
    return;
  }
  //Atualizar rodada com um palpite
  for (var j = 0; j < palavra.length; j++) {
    if (palavra[j] === adivinhar) {
      resposta[j] = adivinhar;
      letrasRestantes--;
    }
  }
  //Mostrar progresso do jogador
  document.getElementById("output").innerText =
    "Quantidade de letras restante:\n" + resposta.join(" ");
  // Parabeniza o usuário caso a palavra esteja correta
  if (!resposta.includes("_")) {
    document.getElementById("win").innerText =
      "Correto! A palavra é: " + palavra + "!";
  }
}
game();
