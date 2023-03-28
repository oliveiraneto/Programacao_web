// selecionando elementos da página HTML
const form = document.querySelector('#form-medicamentos');
const input = document.querySelector('#input-medicamento');
const lista = document.querySelector('#lista-medicamentos');

// array que armazenará os medicamentos adicionados
let medicamentos = [];

// função para renderizar a lista de medicamentos na página
function renderizarMedicamentos() {
  lista.innerHTML = '';

  // percorrendo o array de medicamentos e criando os elementos na página
  medicamentos.forEach((medicamento, index) => {
    const item = document.createElement('li');
    item.innerText = medicamento;
    
    // botão para remover o medicamento, que chama a função removerMedicamento
    const btnRemover = document.createElement('button');
    btnRemover.innerHTML = '&times;';
    btnRemover.addEventListener('click', () => {
      removerMedicamento(index);
    });

    item.appendChild(btnRemover);
    lista.appendChild(item);
  });
}

// função para adicionar um medicamento no array e renderizar a lista
function adicionarMedicamento(medicamento) {
  medicamentos.push(medicamento);
  renderizarMedicamentos();
}

// função para remover um medicamento do array e renderizar a lista
function removerMedicamento(index) {
  medicamentos.splice(index, 1);
  renderizarMedicamentos();
}

// evento de submissão do formulário
form.addEventListener('submit', event => {
  event.preventDefault();
  const medicamento = input.value.trim();

  // verificando se o campo está vazio
  if (medicamento === '') {
    alert('Por favor, digite um medicamento');
    return;
  }

  // adicionando o medicamento no array e limpando o campo
  adicionarMedicamento(medicamento);
  input.value = '';
});
