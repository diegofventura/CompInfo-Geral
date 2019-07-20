let carrinho = CarrinhoService.carregarCarrinho()

function listarCarrinho() {


    document.querySelector('body').style.animation="zoom-out .8s"
    setTimeout(()=>{
        document.querySelector('body').style.opacity="1"

    },750);


    carrinho = CarrinhoService.carregarCarrinho()
    document.getElementById("listaCarrinho").innerHTML = ""
    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];
        document.getElementById("listaCarrinho").innerHTML += 
        /* html */
        `
        <div class="item-carrinho">
            <div class="img">
                <img src="${item.produto.img}">
            </div>
            <div class="info">
                <h2>${item.produto.nome}</h2>
                <span>${item.quantidade}</span>
                <h3>${item.produto.preco}</h3>
            </div>
            <div class="close">
                <img src="img/close.svg" onclick="remover(${i})">
            </div>
            
        </div>
        `
    }
} 

function remover(i) {
    if(confirm("Tem certeza que quer remover?")) {
        carrinho.splice(i, 1)
        CarrinhoService.setCarrinho(carrinho)
        listarCarrinho()
    }
}

function voltar() {
    document.querySelector('body').style.animation="zoom-in .8s"
    setTimeout(()=>{
        history.go(-1)

    },750);
  
}