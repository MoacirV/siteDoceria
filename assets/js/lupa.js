const salgados = [
    { nome: "Coxinha", preco: "R$ 7.90" },
    { nome: "Pão de Queijo", preco: "R$ 7.90" },
    { nome: "Empada de Frango", preco: "R$ 7.90" },
    { nome: "Pastel de Carne", preco: "R$ 7.90" },
    { nome: "Quiche de Alho-Poro", preco: "R$ 7.90" },
    { nome: "Bolinho de Bacalhau", preco: "R$ 7.90" },
    { nome: "Mini Pizzas", preco: "R$ 7.90" },
    { nome: "Iscas de Frango Empanadas", preco: "R$ 7.90" },
    { nome: "Tábua de Frios", preco: "R$ 7.90" },
    { nome: "Canapés Variados", preco: "R$ 7.90" }
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
        const filteredSalgados = salgados.filter(i => i.nome.toLowerCase().includes(searchValue));
        displayData(filteredSalgados);
    }
});

// Inicialmente oculta o container ao carregar a página
window.addEventListener("load", () => {
    cardContainer.style.display = "none";
});
