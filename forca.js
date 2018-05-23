//Criando um "vetor" para as palavras. Para adicionar palavras é só colocar a palavra desejada: ( "palavra", )
var words = ["carro", "queijo", "jogo", "tigela", "batata", "janela", "parede"];

//Esoclhendo uma palavra aleatória, dentre as opções da variável "palavras"
var palavra = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavra);

//Vetor para resposta
//Usando "_" indicando quantas letras a palavra possui, como no jogo da forca tradicional.
var resposta = [];
for (var i = 0; i < palavra.length; i++) {
  resposta[i] = "_";
}

var letrasRestantes = palavra.length;

//Loop do jogo
function game() {
  while (letrasRestantes > 0) {
    //Mostrar progresso do jogador

    alert("Quantidade de letras restante:\n" + resposta.join(" "));

    //Prompt para o jogador adivinhar  
    var adivinhar = prompt("Adivinhe uma letra ou clique em 'Cancelar' para parar o jogo.");
    if (adivinhar === null) {
      //Sair do jogo
      break;
    } else if (adivinhar.length !== 1) {
      // Caso não digite nada
      alert("Adivinhe uma letra por vez.");
    } else {
      //Atualizar rodada com um palpite
      for (var j = 0; j < palavra.length; j++) {
        if (palavra[j] === adivinhar) {
          resposta[j] = adivinhar;
          letrasRestantes--;
        }
      }
    }
    //Fim do loop de jogo
    document.getElementById('win').innerText = "Parabens! A palavra eh:" + palavra + "!";

  }
}
game();
