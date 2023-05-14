//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

// Endpoint GET /api/informations - Recuperar informações relacionadas ao projeto
exports.getInformations = (req, res) => {
    const informations = [
      { id: 1, title: 'NASA', description: 'Agência espacial americana.' },
      { id: 2, title: 'História da astronomia', description: 'Breve história da astronomia.' },
    ];
    res.json({ inputs: informations });
  };
  