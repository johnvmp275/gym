export default function initLoadPage() {
  const gridContainer = document.querySelector(".grid-container");
  const container = document.getElementById("container");
  const homeLink = document.getElementById("homeLink");
  const aboutLink = document.getElementById("aboutLink");
  const programsLink = document.getElementById("programsLink");
  const recipesLink = document.getElementById("recipesLink");
  const storeLink = document.getElementById("storeLink");
  const loader = document.querySelector(".loader");

  // Função para carregar a página inicial
  function loadHomePage() {
    container.innerHTML = `
  <section class="banner">
  <div>
      <p class="title">make your
          <span class="title_bold">BODY SHAPE</span>
      </p>
      <p>Being physically active can improve your brain health,
          help manage weight, reduce the risk of disease, strengthen bones and muscles,
          and improve your ability to do everyday activities. Adults who si</p>
      <button class="btn_banner" type="submit">Get Started</button>
  </div>
  <img class="banner_home" src="./img/risen.png">
</section>
<section class="banner">
</section>
<section class="workoutPrograms">
  <h2 class="titile_programs">Free Workout Programs</h2>
  <div class="programs">
      <div class="trainer">
          <div class="hover_image">
              <img src="./img/logan.png">
              <div class="black_over">
              </div>
              <span>Beginner Friendly</span>
          </div>
          <button class="btn_banner" type="submit">Start Today</button>
      </div>
      <div class="trainer">
          <div class="hover_image">
              <img src="./img/grup5.png">
              <div class="black_over">
              </div>
              <span>Moderate to Advanced</span>
          </div>
          <button class="btn_banner" type="submit">Start Today</button>
      </div>
      <div class="trainer">
          <div class="hover_image">
              <img src="./img/clem.png">
              <div class="black_over">
              </div>
              <span>Weight Loss</span>
          </div>
          <button class="btn_banner" type="submit">Start Today</button>
      </div>
      <div class="trainer">
          <div class="hover_image">
              <img src="./img/clem.png">
              <div class="black_over">
              </div>
              <span>No Equipment</span>
          </div>
          <button class="btn_banner" type="submit">Start Today</button>
      </div>
      <div class="trainer">
          <div class="hover_image">
              <img src="./img/clem.png">
              <div class="black_over">
              </div>
              <span>Strength Training</span>
          </div>
          <button class="btn_banner" type="submit">Start Today</button>
      </div>
  </div>
</section>
<section class="">
  <div class="merch">
      <h2>/// GET OUR MERCH</h2> <button class="btn_banner btn_view" type="submit">View All Products</button>
  </div>
  <div class="cards-merch">
      <div class="card">
          <div class="card-hover">
              <img src="./img/sacola.png" alt="">
              <div class="background-gray">          
              <p>Bag</p>
              </div>
          </div>
      </div>
      <div class="card">
      <div class="card-hover">
          <img src="./img/camiseta.png" alt="">
          <div class="background-gray">         
          <p>Bag</p>
          </div>
      </div>
  </div>
  <div class="card">
  <div class="card-hover">
      <img src="./img/garrafa.png" alt="">
      <div class="background-gray">
      <p>Bag</p>
      </div>
  </div>
</div>
<div class="card">
<div class="card-hover">
    <img src="./img/camiseta.png" alt="">
    <div class="background-gray">   
    <p>Bag</p>
    </div>
</div>
</div>
  </div>
  
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
    gridContainer.style.display = "none";
    loader.style.display = "flex";
    setTimeout(() => {
      // colocar como display block aqui para que apareça
      loader.style.display = "none";
      gridContainer.style.display = "block";
      //quando ele acabar ficara como display none para sair o loader
    }, 1700);
  }

  // Define eventos de clique para os links
  homeLink.addEventListener("click", function (event) {
    loaderTimer();
    event.preventDefault(); // Evita que o link redirecione
    loadHomePage();
  });

  aboutLink.addEventListener("click", function (event) {
    loaderTimer();
    event.preventDefault();
    loadAboutPage();
  });

  programsLink.addEventListener("click", function (event) {
    loaderTimer();
    event.preventDefault();
    loadProgramsPage();
  });

  recipesLink.addEventListener("click", function (event) {
    loaderTimer();
    event.preventDefault();
    loadRecipesPage();
  });

  storeLink.addEventListener("click", function (event) {
    loaderTimer();
    event.preventDefault();
    loadStorePage();
  });
}
