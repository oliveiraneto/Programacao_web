//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 -->
function bubbleSort(arr) {
    // armazena o comprimento do array em uma variável
    var len = arr.length;
    // loop externo que percorre todo o array
    for (var i = 0; i < len; i++) {
    // loop interno que percorre o array até o penúltimo elemento não ordenado
    for (var j = 0; j < len-i-1; j++) {
    // compara o elemento atual com o próximo elemento
    if (arr[j] > arr[j+1]) {
    // se o elemento atual for maior que o próximo elemento, troca de posição
    var temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
    }
    }
    }
    // retorna o array ordenado
    return arr;
    }
  