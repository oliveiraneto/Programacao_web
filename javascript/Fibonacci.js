//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 23/03/2023 

// Função que retorna a sequência de Fibonacci até o enésimo termo n
// Recebe um parâmetro n, que é o número de termos desejado
function fibonacci(n) {
    // Inicializa o array com os primeiros dois termos da sequência
    var fibo = [0, 1];
    // Loop para gerar os próximos termos da sequência
    for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    }
    // Retorna o array com a sequência completa até o termo n
    return fibo;
    }