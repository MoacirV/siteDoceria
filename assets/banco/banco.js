const URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

async function chamarApi() {
    try {
        const resp = await fetch(URL); // Aguarda a resposta da API
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`); // Lida com erros HTTP
        }
        const data = await resp.json(); // Converte a resposta para JSON
        console.log(data); // Exibe os dados no console
    } catch (error) {
        console.error('Erro ao chamar a API:', error); // Lida com erros na chamada
    }
}

chamarApi();
