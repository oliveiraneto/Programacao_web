//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 

function primo(n) {
  // Verifica se n é menor ou igual a 1, que não é considerado um número primo
  if (n <= 1) {
    return false;
  }
  // Percorre todos os números de 2 até a raiz quadrada de n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // Se o resto da divisão de n por i for igual a zero, n não é primo
    if (n % i == 0) {
      return false;
    }
  }
  // Se n não foi divisível por nenhum número entre 2 e a raiz quadrada de n, então é primo
  return true;
}
