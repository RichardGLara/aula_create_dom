let corpo = document.getElementsByTagName("body")[0];
let titulo = document.createElement("h1")
let descricao = document.createElement("p")
let foto = document.createElement("a")

titulo.innerText = "Vende-se Carburador de Satélite"
titulo.id = "titulo"

descricao.innerText = "Carburador de satélite praticamente novo, pouquíssimo uso. Nunca passou por tempestade solar ou impacto de jato de massa coronal. Pintura com poucas marcas. Um pequeno amassado no módulo de supressão iônica, mas não afeta o funcionamento. Passou por uma revisão a pouco tempo, somente pra garantir a estabilidade e eficácia das funções."
descricao.id = "descricao"

foto.innerHTML = `
<img src="satelite.jpg" style="width: 400px">
`

corpo.appendChild(titulo);
corpo.appendChild(descricao);
corpo.appendChild(foto);

console.log(titulo);
console.log(corpo);
console.log(descricao);
console.log(foto);