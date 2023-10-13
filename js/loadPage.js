const container = document.getElementById('container');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');

// Função para carregar a página inicial
function loadHomePage() {
    container.innerHTML = `
    <h1> qeqergqer </h1>
    `;
}

// Função para carregar a página de contato
function loadAboutPage() {
    container.innerHTML = `
       <h1>er </h1>
    `;
}

// Carrega a página inicial quando a aplicação inicia
loadHomePage();

// Define eventos de clique para os links
homeLink.addEventListener('click', function(event) {

    setTimeout(() => {
        // colocar como display block aqui para que apareça
    }, 5000);
    ///quando ele acabar ficara como display none para sair o loader
    event.preventDefault(); // Evita que o link redirecione
    loadHomePage();

});

aboutLink.addEventListener('click', function(event) {

    setTimeout(() => {
        // colocar como display block aqui para que apareça
    }, 5000);
    ///quando ele acabar ficara como display none para sair o loader
    event.preventDefault();
    loadAboutPage();

});