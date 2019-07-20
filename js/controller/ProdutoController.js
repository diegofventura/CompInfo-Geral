let produtoSelecionado = ProdutoService.buscarProdutoSelecionado()

function carregarProduto() {
    document.querySelector('body').style.animation="zoom-out .8s forwards"/* animação pra carregar*/

    document.getElementById("nome").innerHTML = produtoSelecionado.nome
    document.getElementById("descricao").innerHTML = produtoSelecionado.descricao
    document.getElementById("preco").innerHTML = produtoSelecionado.preco
    document.getElementById("imagem").src = produtoSelecionado.img
    document.getElementById("navbarTitle").innerHTML = produtoSelecionado.nome
 

}

function voltar() {
    document.querySelector('body').style.animation="zoom-in .8s"
    
    setTimeout(()=>{history.go(-1)},750);
}

function adicionarCarrinho() {
    let quantidade = document.getElementById("quantidade").value
    let item = {
        quantidade: quantidade,
        produto: produtoSelecionado
    }
    // Adicionar o item no carrinho
    CarrinhoService.adicionarItem(item);
    alert("Produto adicionado com sucesso!")
    document.getElementById("quantidade").value=""
}