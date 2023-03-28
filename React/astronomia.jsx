//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 28/03/2023

import React from "react";
import './style.css';

function App() {
  // Definição do título da página
  document.title = "Astronomia React App";

  // Definição de um array de planetas
  const planetas = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
  ];

  // Função para exibir uma lista de planetas
  function exibirPlanetas() {
    // Mapeando o array de planetas para criar um item de lista para cada planeta
    const listaPlanetas = planetas.map((planeta) => <li key={planeta}>{planeta}</li>);
    // Retornando a lista de planetas dentro de uma tag <ul>
    return <ul>{listaPlanetas}</ul>;
  }

  return (
    // Elementos JSX para renderizar na tela
    <div className="App">
      <header>
        <h1>Astronomia React App</h1>
      </header>
      <main>
        <section>
          <h2>Planetas do Sistema Solar</h2>
          {/* Chamando a função exibirPlanetas() para renderizar a lista de planetas */}
          {exibirPlanetas()}
        </section>
        <section>
          <h2>Imagem da Galáxia de Andrômeda</h2>
          <img
            src="https://www.spacetelescope.org/static/archives/images/publicationjpg/heic1502a.jpg"
            alt="Galáxia de Andrômeda"
          />
          <p>
            Esta é uma imagem da Galáxia de Andrômeda, uma das galáxias mais próximas da nossa Via Láctea.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
