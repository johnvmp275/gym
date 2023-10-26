const container = document.getElementById("container");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const programsLink = document.getElementById("programsLink");
const recipesLink = document.getElementById("recipesLink");
const storeLink = document.getElementById("storeLink");

// Função para carregar a página inicial
function loadHomePage() {
  container.innerHTML = `
       <h1>loadHomePage </h1>
    `;
}

// Função para carregar a página de contato
function loadAboutPage() {
  container.innerHTML = `
       <h1>loadAboutPager </h1>
    `;
}

function loadProgramsPage() {
  container.innerHTML = `
       <h1>loadProgramsPage</h1>
    `;
}

function loadRecipesPage() {
  container.innerHTML = `
       <h1>loadRecipesPage</h1>
    `;
}

function loadStorePage() {
  container.innerHTML = `
       <h1>loadStorePage</h1>
    `;
}

// Carrega a página inicial quando a aplicação inicia
loadHomePage();

// Define eventos de clique para os links
homeLink.addEventListener("click", function (event) {
  setTimeout(() => {
    // colocar como display block aqui para que apareça
  }, 5000);
  ///quando ele acabar ficara como display none para sair o loader
  event.preventDefault(); // Evita que o link redirecione
  loadHomePage();
});

aboutLink.addEventListener("click", function (event) {
  setTimeout(() => {
    // colocar como display block aqui para que apareça
  }, 5000);
  ///quando ele acabar ficara como display none para sair o loader
  event.preventDefault();
  loadAboutPage();
});

programsLink.addEventListener("click", function (event) {
  setTimeout(() => {
    // colocar como display block aqui para que apareça
  }, 5000);
  ///quando ele acabar ficara como display none para sair o loader
  event.preventDefault();
  loadProgramsPage();
});

recipesLink.addEventListener("click", function (event) {
  setTimeout(() => {
    // colocar como display block aqui para que apareça
  }, 5000);
  ///quando ele acabar ficara como display none para sair o loader
  event.preventDefault();
  loadRecipesPage();
});

storeLink.addEventListener("click", function (event) {
  setTimeout(() => {
    // colocar como display block aqui para que apareça
  }, 5000);
  ///quando ele acabar ficara como display none para sair o loader
  event.preventDefault();
  loadStorePage();
});
