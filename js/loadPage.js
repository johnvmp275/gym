const gridContainer = document.querySelector('.grid-container')
const container = document.getElementById('container');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const programsLink = document.getElementById('programsLink');
const recipesLink = document.getElementById('recipesLink');
const storeLink = document.getElementById('storeLink');
const loader = document.querySelector('.loader');

// Função para carregar a página inicial
function loadHomePage() {
  container.innerHTML = `
       <section class="banner">
       <div>
       <p class="title">make your 
       <span class="title_bold">BODY SHAPE</span></p>
       <p>Being physically active can improve your brain health, 
       help manage weight, reduce the risk of disease, strengthen bones and muscles, 
       and improve your ability to do everyday activities. Adults who si</p>
       <button class="btn_banner" type="submit">Get Started</button>
       </div>
       <div>
       <img class"banner_home" src="./img/risen.png">
       </div>
       </section>
       <section class="banner">
       </section>
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

//simula um loader de 5s para poder apresentar o site
loaderTimer();
// Carrega a página inicial quando a aplicação inicia
loadHomePage();

//
function loaderTimer() {
  gridContainer.style.display = 'none';
  loader.style.display = 'flex';
  setTimeout(() => {
    // colocar como display block aqui para que apareça
    loader.style.display = 'none';
    gridContainer.style.display = 'block';
    //quando ele acabar ficara como display none para sair o loader
  }, 1700);

}

// Define eventos de clique para os links
homeLink.addEventListener('click', function (event) {
  loaderTimer();
  event.preventDefault(); // Evita que o link redirecione
  loadHomePage();
});

aboutLink.addEventListener('click', function (event) {
  loaderTimer();
  event.preventDefault();
  loadAboutPage();
});

programsLink.addEventListener('click', function (event) {
  loaderTimer();
  event.preventDefault();
  loadProgramsPage();
});

recipesLink.addEventListener('click', function (event) {
  loaderTimer();
  event.preventDefault();
  loadRecipesPage();
});

storeLink.addEventListener('click', function (event) {
  loaderTimer();
  event.preventDefault();
  loadStorePage();
});
