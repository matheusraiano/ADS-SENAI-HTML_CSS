let horas = document.querySelector('div.horas')
let data = new Date()
let dia = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
horas.innerHTML = `${data.getHours()}:${data.getMinutes()} - ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} - ${dia[data.getDay()]}`

//Função para capturar os parâmetros da POP
function getParametro(infoCapturar){
    urlParametro=new URLSearchParams(window.location.search);
    
    return urlParametro.get(infoCapturar);
}
//Preenche as informações no layout
document.getElementById("nome-produto").textContent = getParametro("nomeProduto");
document.getElementById("img-produto").src = getParametro("imgProduto");
document.getElementById("desc-produto").textContent = getParametro("descProduto");

//Descrição do produto
desc_produto="Estes são os panos de prato bordados com passa-fita, laise, fita de cetim e gripir.\n\nEscolha a cor de sua preferência!"

function abrirDetalhes(nome,imagem,descricao){
    
    url=`pop_produtos.html?nomeProduto=${encodeURIComponent(nome)}&imgProduto=${encodeURIComponent(imagem)}&descProduto=${encodeURIComponent(descricao)}`;

    window.open(url, "_blank", "width=800,height=700") 
}

