// Seleciona o primeiro botão usando o método getElementById
var botao = document.getElementById("botao");

// Seleciona o parágrafo usando o método getElementById
var paragrafo = document.getElementById("paragrafo");

// Adiciona um evento de clique ao primeiro botão
botao.addEventListener("click", function() {
    // Altera o texto do parágrafo [cite: 6]
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

// Seleciona o segundo botão (limpar)
var botaoLimpar = document.getElementById("limpar");

// Adiciona um evento de clique ao botão de limpar
botaoLimpar.addEventListener("click", function() {
    // Limpa o conteúdo do texto do parágrafo
    paragrafo.textContent = "";
});