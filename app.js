//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação
// . Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos secretos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    // Validar a entrada: se estiver vazio, exibir alerta
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Adicionar o nome ao array de amigos
    amigos.push(nome);
    
    // Limpar o campo de entrada
    input.value = '';
    
    // Atualizar a lista de amigos na tela
    atualizarLista();
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = '';
    
    // Percorrer o array e adicionar cada nome como <li>
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validar se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    
    // Gerar um índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    let sorteado = amigos[indice];
    
    // Mostrar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${sorteado}</li>`;
}

