//Herança

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== "number") return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto("Generico", 1.1);
const camiseta = new Camiseta("Regata", 10, "Preta");
const caneca = new Caneca("Caneca Cafe", 15, "Porcelana", 5);
camiseta.aumento(10);
caneca.estoque = 10;

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);