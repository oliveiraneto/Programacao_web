//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 

function palavraMaisLonga(str) {
    // Separa as palavras da string em um array
    var palavras = str.split(" ");
    // Inicializa a variável para armazenar a palavra mais longa
    var maisLonga = "";
    // Loop pelas palavras do array
    for (var i = 0; i < palavras.length; i++) {
      // Verifica se a palavra atual é mais longa do que a palavra mais longa atual
      if (palavras[i].length > maisLonga.length) {
        maisLonga = palavras[i];
      }
    }
    // Retorna a palavra mais longa
    return maisLonga;
  }
  