let horas = document.querySelector('div.horas')
let data = new Date()
let dia = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
horas.innerHTML = `${data.getHours()}:${data.getMinutes()} - ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} - ${dia[data.getDay()]}`

function abrirPop() {
    open("pop_produtos.html", "_blank", "width=800,height=700")
    
    document.querySelectorAll(".caixa").forEach(produto => {
        const desc = produto.getElementById("caixaDesc").innerHTML;
        const img = produto.getElementById("caixaImg").innerHTML;
        const preco = produto.getElementById("caixaPreco").innerHTML;

        const dados = {
            desc, img, preco
        };

        const encoded = encodeURIComponent(JSON.stringify(dados));

        location.href = `produtos.html?data=${encoded}`;
    })
}
// DESCOBRIR O ERRO!!!!!!!!!!!!!!!!!!!!!!!!
function carregarPop() {
    const params = new URLSearchParams(location.search);
    const data = params.get("data");

    const produto = JSON.parse(decodeURIComponent(data));

    document.getElementById("desc-produto").innerHTML = produto.desc;
    document.getElementById("img-produto").innerHTML = produto.img;
    document.getElementById("preco").innerHTML = produto.preco;
}