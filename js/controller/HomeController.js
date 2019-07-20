// Chamar o buscarTodos do ProdutoService
let produtosCadastrados = ProdutoService.buscarTodos()

function listarProdutos() {
    document.querySelector('body').style.animation="zoom-out .8s"
    setTimeout(()=>{
        document.querySelector('body').style.opacity="1"

    },750);
    


    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];
        
        // Criar os cards de produtos no home.html
        document.getElementById("produtos").innerHTML +=
        /* html */ `
        <div class="card-produto" onclick="selecionarProduto(${i})">
            <img src="${element.img}" alt="${element.nome}">
            <div class="card-produto-descricao">
                <h2>${element.nome}</h2>
                <p>${element.descricao}</p>
                <p>${element.preco}</p>
            </div>
        </div>
        `
        
    }

}

function selecionarProduto(i) {
    ProdutoService.selecionarProduto(produtosCadastrados[i])
    document.querySelector('body').style.animation="zoom-in 3s"// aplica a animação ao clicar no o produto
   
    setTimeout(()=>{
        location.href = "produto.html"//muda de página

    },750);
}

function openDrawer() {
    document.querySelector('.drawer').style.display = 'flex'
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu .5s ease-in'
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu .5s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    }, 500)
    
}