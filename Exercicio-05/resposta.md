# 5) Qual a diferença entre as propriedades textContent, innerText e innerHTML dos elementos HTML? Cite exemplos.

A principal diferença entre essas três propriedades reside em como elas interpretam e retornam o conteúdo de um elemento HTML.

- textContent: Retorna todo o conteúdo de texto de um nó e seus descendentes, incluindo o texto dentro de tags ``<script>`` e ``<style>``, sem qualquer formatação HTML.

- innerText: Retorna o texto "renderizado" na tela. Isso significa que ele não inclui o texto de elementos ocultos por CSS (como display: none;) e respeita a formatação do texto, como quebras de linha.

- innerHTML: Retorna todo o conteúdo dentro de um elemento, incluindo as tags HTML. Permite não apenas ler, mas também inserir HTML no documento, o que pode ser uma vulnerabilidade de segurança se não for usado com cuidado.

Exemplo:

## HTML

```HTML
<div id="exemplo">
    <p style="display: none;">Texto oculto.</p>
    Olá, <strong>Mundo!</strong>
</div>
```

## JavaScript

```JavaScript
var elemento = document.getElementById("exemplo");

console.log(elemento.textContent); // " Texto oculto. Olá, Mundo! "
console.log(elemento.innerText);   // "Olá, Mundo!"
console.log(elemento.innerHTML);   // ' <p style="display: none;">Texto oculto.</p> Olá, <strong>Mundo!</strong> '
```