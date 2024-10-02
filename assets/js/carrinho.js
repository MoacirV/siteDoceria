// Função para adicionar item ao carrinho
function adicionarAoCarrinho(itemId) {
    // Verifica se já existe um carrinho no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o item já está no carrinho
    let itemNoCarrinho = carrinho.find(item => item.id === itemId);

    if (itemNoCarrinho) {
        // Se o item já estiver no carrinho, incrementa a quantidade
        itemNoCarrinho.quantidade += 1;
    } else {
        // Se não estiver, adiciona o novo item ao carrinho com quantidade 1
        carrinho.push({ id: itemId, quantidade: 1 });
    }

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza o contador de itens no carrinho
    atualizarContadorCarrinho();
}

// Função para atualizar o contador de itens no carrinho
function atualizarContadorCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    // Exibe o total de itens no contador do carrinho (supondo que haja um elemento com ID "contador-carrinho")
    document.getElementById('contador-carrinho').innerText = totalItens;
}

// Função para carregar os itens no carrinho na página carrinho.html
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Supondo que haja uma div ou lista com ID 'lista-carrinho' onde os itens serão exibidos
    let listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; // Limpa a lista antes de exibir

    if (carrinho.length > 0) {
        carrinho.forEach(item => {
            // Aqui você pode personalizar como exibir cada item no carrinho
            let itemHtml = `<div class="item-carrinho">
                                <p>ID do Produto: ${item.id}</p>
                                <p>Quantidade: ${item.quantidade}</p>
                            </div>`;
            listaCarrinho.innerHTML += itemHtml;
        });
    } else {
        listaCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    }
}

// Chame essa função sempre que a página carregar para manter o contador atualizado
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);

// Exemplo de como redirecionar para a página carrinho.html
document.getElementById('ver-carrinho').addEventListener('click', () => {
    window.location.href = 'carrinho.html';
});
