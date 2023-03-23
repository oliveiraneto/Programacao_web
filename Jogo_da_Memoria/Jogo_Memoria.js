// Define o número de pares de cartas
const numPairs = 8;

// Cria um array com as imagens para as cartas
const cardImages = [
  "sol.jpg",
  "terra.jpg",
  "marte.jpg",
  "Jupiter.jpg",
  "saturno.jpg",
  "urano.jpg",
  "netuno.jpg",
  "lua.jpg",
];

// Duplica as imagens para criar pares de cartas
const cardPairs = cardImages.slice(0, numPairs).concat(cardImages.slice(0, numPairs));

// Embaralha as cartas
const shuffledCards = shuffle(cardPairs);

// Cria as cartas na grade do jogo
const gameGrid = document.querySelector(".game-grid");

for (let i = 0; i < numPairs * 2; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.cardIndex = i;
  gameGrid.appendChild(card);

  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardFront.style.backgroundImage = `url(images/${shuffledCards[i]})`;
  card.appendChild(cardFront);

  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  card.appendChild(cardBack);

  // Adiciona um event listener para o clique na carta
  card.addEventListener("click", handleCardClick);
}

// Variáveis para manter o estado do jogo
let firstCard = null;
let secondCard = null;
let canClick = true;
let numMatches = 0;
let numAttempts = 0;
let timerId = null;
let timeLeft = 60; // Tempo em segundos

// Inicia o contador regressivo
timerId = setInterval(updateTimer, 1000);

// Função para embaralhar as cartas
function shuffle(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

// Função para lidar com o clique na carta
function handleCardClick(event) {
// Se o jogador não pode clicar (porque as cartas estão animando, por exemplo), retorna sem fazer nada
if (!canClick) {
return;
}

const card = event.currentTarget;

// Não faz nada se a carta já estiver virada para cima ou se duas cartas já estiverem viradas para cima
if (card.classList.contains("flipped") || secondCard) {
return;
}

// Anima a carta virando para cima
card.classList.add("flipped");

if (!firstCard) {
// Se esta for a primeira carta virada para cima, guarda a referência para ela na variável firstCard
firstCard = card;
} else {
// Se esta for a segunda carta virada para cima, guarda a referência para ela na variável secondCard
secondCard = card;
// Incrementa o número de tentativas
numAttempts++;

// Verifica se as cartas são iguais
if (firstCard.dataset.cardIndex === secondCard.dataset.cardIndex) {
  // Se forem iguais, incrementa o número de pares encontrados
  numMatches++;

  // Anima as cartas removendo a classe "flipped"
  setTimeout(() => {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    // Reseta as variáveis firstCard e secondCard
    firstCard = null;
    secondCard = null;
  }, 1000);
} else {
  // Se não forem iguais, anima as cartas virando para baixo novamente
  canClick = false; // Impede que o jogador clique em outras cartas enquanto as animações estão ocorrendo
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    // Reseta as variáveis firstCard e secondCard
    firstCard = null;
    secondCard = null;
    canClick = true; // Permite que o jogador clique em outras cartas novamente
    }, 1000);
    }
    
    // Verifica se o jogo acabou
    if (numMatches === numPairs) {
    clearInterval(timerId); // Para o contador regressivo
    setTimeout(() => {
    alert(`Parabéns, você ganhou em ${numAttempts} tentativas e ${60 - timeLeft} segundos!`);
    }, 500);
    }
    }
    
    // Função para atualizar o contador regressivo
    function updateTimer() {
    timeLeft--;
    const timer = document.querySelector(".timer");
    timer.textContent = `Tempo restante: ${timeLeft}s`;
    
    if (timeLeft === 0) {
    clearInterval(timerId); // Para o contador regressivo
    setTimeout(() => {
    alert("Acabou o tempo! Tente novamente.");
    }, 500);
    }
    }
    }
}
