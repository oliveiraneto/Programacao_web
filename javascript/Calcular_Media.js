//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 
// Função que calcula a média dos elementos de um array
function calcularMedia(arr) {
    // Variável para armazenar a soma dos elementos do array
    var soma = 0;
    
    // Loop para percorrer todos os elementos do array e somá-los
    for (var i = 0; i < arr.length; i++) {
    soma += arr[i];
    }
    
    // Retorna a média dos elementos do array
    return soma / arr.length;
    }