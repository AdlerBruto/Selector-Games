document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      name: "android",
      img: "./img/android.png",
    },
    {
      name: "chrome",
      img: "./img/chrome.png",
    },
    {
      name: "git",
      img: "./img/git.png",
    },
    {
      name: "stackoverflow",
      img: "./img/stackoverflow.png",
    },
    {
      name: "linux",
      img: "./img/linux.png",
    },
    {
      name: "github",
      img: "./img/github.png",
    },
    {
      name: "android",
      img: "./img/android.png",
    },
    {
      name: "chrome",
      img: "./img/chrome.png",
    },
    {
      name: "git",
      img: "./img/git.png",
    },
    {
      name: "stackoverflow",
      img: "./img/stackoverflow.png",
    },
    {
      name: "linux",
      img: "./img/linux.png",
    },
    {
      name: "github",
      img: "./img/github.png",
    },
  ];

  // Toggle Dark Mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  // Load Light or Dark Mode
  function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
      toggleDarkMode();
    }
  }

  loadTheme();

  // Embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random());

  // Recuperar elementos
  const board = document.querySelector(".board");
  const resultView = document.querySelector("#result");
  let cardsChosen = []; // Cartas escolhidas
  let cardsChosenId = []; // Ids das cartas para caso de click na mesma imagem
  let cardsWon = []; // Cartas combinadas

  // criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./img/board.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }

  //checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    //verificar clique na mesma imagem
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "./img/board.png");
      cards[optionTwoId].setAttribute("src", "./img/board.png");
      alert("Você clicou na mesma imagem");
    }
    //verificar combinação se click em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert("Você encontrou uma combinação");
      cards[optionOneId].setAttribute("src", "./img/check.png");
      cards[optionTwoId].setAttribute("src", "./img/check.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./img/board.png");
      cards[optionTwoId].setAttribute("src", "./img/board.png");
      alert("Errou, tente novamente");
    }
    cardsChosen = [];
    cardsChosenId = [];
    //mostrar placar
    resultView.textContent = "Pares Encontrados: " + cardsWon.length;
    if (cardsWon.length === cards.length / 2) {
      resultView.textContent =
        "Parabéns! Você conseguiu encontrar todas as cartas";
    }
  }

  // virar as cartas
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cards[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
