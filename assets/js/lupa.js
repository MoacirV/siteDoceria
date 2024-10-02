const itens = [ 
    { nome: "Coxinha", preco: "R$ 3,00" },
    { nome: "Coxinha Charque", preco: "R$ 4,00" },
    { nome: "Coxinha Calabresa", preco: "R$ 4,00" },
    { nome: "Enroladinho", preco: "R$ 3,00" },
    { nome: "Risole", preco: "R$ 3,00" },
    { nome: "Empada Salgada Frango", preco: "R$ 3,00" },
    { nome: "Empada Salgada Calabresa", preco: "R$ 3,00" },
    { nome: "Empadão", preco: "R$ 12,00" }
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = ""; // Limpa o conteúdo antes de exibir os novos resultados
    if (data.length > 0) {
        data.forEach(e => {
            cardContainer.innerHTML += `
            <div class="card">
                <h3>${e.nome}</h3>    
                <p>${e.preco}</p>    
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
        const filteredItens = itens.filter(i => i.nome.toLowerCase().includes(searchValue));
        displayData(filteredItens);
    }
});

// Inicialmente oculta o container ao carregar a página
window.addEventListener("load", () => {
    cardContainer.style.display = "none";
});
