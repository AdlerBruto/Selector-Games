// Variáveis
const changeThemeBtn = document.querySelector("#change-theme");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

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

// Verificar caracteres do nome
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

// Função Entrar
function entrar() {
  if (validNome) {
    var valor = document.getElementById("nome").value;

    localStorage.setItem("listaUser", valor);

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.innerHTML = "";
    msgError.setAttribute("style", "display: none");

    setTimeout(() => {
      window.location.href = "../Seletor/index.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}
