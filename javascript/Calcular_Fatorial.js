//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 
// Função que calcula o fatorial de um número n
function factorial(n) {
    // Condição de parada: fatorial de 0 é igual a 1
    if (n === 0) {
    return 1;
    } else {
    // Caso contrário, calcula o fatorial de n recursivamente
    return n * factorial(n - 1);
    }
    }