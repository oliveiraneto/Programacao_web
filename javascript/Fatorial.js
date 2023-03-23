//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 

// Função que calcula o fatorial de um número dado
// Parâmetro: n - número inteiro
// Retorno: o fatorial de n
function fatorial(n) {
    if (n == 0 || n == 1) { // se n for 0 ou 1, retorna 1
      return 1;
    } else { // caso contrário, calcula o fatorial usando recursividade
      return n * fatorial(n - 1);
    }
  }
  
  