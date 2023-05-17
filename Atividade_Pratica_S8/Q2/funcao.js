//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 17/05/2023 -->

function adicionarItem() { // Define a função "adicionarItem"
    var input = document.getElementById("item"); // Obtém o elemento de entrada de texto com o ID "item"
    var lista = document.getElementById("lista"); // Obtém a lista com o ID "lista"
    var novoItem = document.createElement("li"); // Cria um novo elemento "li"
    novoItem.innerText = input.value; // Define o texto do novo elemento como o valor do elemento de entrada de texto
    lista.appendChild(novoItem); // Adiciona o novo elemento à lista
    input.value = ""; // Limpa o valor do elemento de entrada de texto
    } // Fim da função "adicionarItem"