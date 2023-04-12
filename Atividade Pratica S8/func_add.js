//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA: 11/04/2023

function adicionarItem() {
    var input = document.getElementById("item");
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.innerText = input.value;
    lista.appendChild(novoItem);
    input.value = "";
  }