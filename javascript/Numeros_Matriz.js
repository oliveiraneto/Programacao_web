//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 

function sumArray(arr) {
    // inicializa a variável 'sum' como zero
    var sum = 0;
    // itera pelo array 'arr'
    for (var i = 0; i < arr.length; i++) {
        // verifica se o elemento atual é um número
        if (typeof arr[i] === 'number') {
            // se for um número, adiciona o valor de 'arr[i]' à variável 'sum'
            sum += arr[i];
        }
    }
    // retorna a soma dos números do array
    return sum;
}
