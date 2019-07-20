class ProdutoService {

    /**
     * Valida um produto
     * @param {*} produto - Produto a ser validado
     */
    static validar(produto) {
        if (!produto.nome) {
            return "O nome é obrigatório"
        }
    }

    /**
     * Buscar todos os produtos cadastrados
     * @return lista de produtos cadastrados 
     */
    static buscarTodos() {
        let produtos = JSON.parse(localStorage.getItem("produtos"))

        if (!produtos) return []
        else return produtos
    }

    static selecionarProduto(produto) {
        localStorage.setItem("produtoSelecionado", JSON.stringify(produto))
    }

    static buscarProdutoSelecionado() {
        return JSON.parse(localStorage.getItem("produtoSelecionado"))
    }
    static cadastrar(produto) {
        //pega o vetor que já esta cadastrado
        let cadastrado = ProdutoService.buscarTodos();
        cadastrado.push(produto)
        //atualizao a lista de produtos cadastrado no localstorage
        localStorage.setItem('produtos', JSON.stringify(cadastrado))

    }
}