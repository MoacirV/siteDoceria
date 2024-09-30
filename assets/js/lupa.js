const professions = [
    {
      title: "Engenheiro de Software",
      description: "Responsável por projetar, desenvolver e manter sistemas de software complexos."
    },
    {
      title: "Médico",
      description: "Profissional da saúde que diagnostica e trata doenças, além de promover a saúde geral."
    },
    // ... outros objetos
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = ""; // Limpa o conteúdo antes de exibir os novos resultados
    if (data.length > 0) {
        data.forEach(e => {
            cardContainer.innerHTML += `
            <div class="card">
                <h3>${e.title}</h3>    
                <p>${e.description}</p>    
            </div>`;
        });
        cardContainer.style.display = "flex"; // Exibe o container quando há resultados
    } else {
        cardContainer.style.display = "none"; // Oculta o container se não houver resultados
    }
};

searchInput.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    
    if (searchValue === "") {
        cardContainer.style.display = "none"; // Oculta o container se o campo de pesquisa estiver vazio
    } else {
        const filteredProfessions = professions.filter(i => i.title.toLowerCase().includes(searchValue));
        displayData(filteredProfessions);
    }
});

// Inicialmente oculta o container ao carregar a página
window.addEventListener("load", () => {
    cardContainer.style.display = "none";
});
