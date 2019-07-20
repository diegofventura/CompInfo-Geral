class Produto {

    constructor() {
        this.nome = "";
        this.tamanho = "";
        this.cor = "";
        this.marca = "";
    }

    imprimirNome() {
        alert(this.nome)
    }

    static imprimirOla() {
        alert("Olá Mundo!")
    }

}