// Variáveis
const changeThemeBtn = document.querySelector("#change-theme");
const btn_sair = document.querySelector("#btn_exit");
const menu = document.querySelector("#menu");
const span = document.querySelector("span");
const btn_home = document.querySelector("#btn_home");
const btn_jogo1 = document.querySelector("#btn_jogo1");
const btn_jogo2 = document.querySelector("#btn_jogo2");
const btn_jogo3 = document.querySelector("#btn_jogo3");
const btn_jogo4 = document.querySelector("#btn_jogo4");
const principal = document.querySelector("#principal");
let nome_user = localStorage.getItem("listaUser");

span.textContent = nome_user;

// Funções
btn_sair.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Confirmação de saída",
      text: `${nome_user}, Deseja sair dessa página?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: "#008000",
      cancelButtonColor: "#ff0000",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Saindo...",
          icon: "success",
        });
        localStorage.removeItem("listaUser");
        window.location.href = "../../$Login/index.html";
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        sairDaPagina();
      }
    });
});

function sairDaPagina() {
  let timerInterval;
  Swal.fire({
    title: "",
    html: "Voltando para a página anterior em <b></b> milissegundos.",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

btn_home.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "./home/home.html");
});

btn_jogo1.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "../Jogos/game1/jogo_da_velha.html");
});

btn_jogo2.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "../Jogos/game2/Jogo_da_memoria.html");
});

btn_jogo3.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "../Jogos/game3/Jogo_da_Cobrinha.html");
});

btn_jogo4.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "../Jogos/game4/Quiz.html");
});

btn_jogo5.addEventListener("click", (evt) => {
  carregarJogo();
  abrirPagina(evt.target, "../Jogos/game5/pedra_papel_tesoura.html");
});

const abrirPagina = (el, url) => {
  const abas = [...document.querySelectorAll(".aba")];
  abas.forEach((e) => {
    e.classList.remove("abaSelecionada");
  });
  el.classList.add("abaSelecionada");
  carregarJogo();
  window.open(url, "if_principal");
};

function carregarJogo() {
  let timerInterval;
  Swal.fire({
    title: "",
    html: "Abrindo página em <b></b> milissegundos.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

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

// Change Dark Mode
changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode on LocalStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
