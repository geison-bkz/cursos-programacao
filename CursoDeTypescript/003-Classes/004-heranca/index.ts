(() => {
    class Pessoa {
        public nome: string;
        public idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        public comer(comida: string) {
            return `${this.nome} comeu ${comida}`;
        }

        protected fezAniversario() {
            return `${this.nome} fez ${++this.idade} anos. Parabéns!`;
        }
    }

    class Geison extends Pessoa {
        constructor() {
            super('Geison', 35);
        }
    }

    const geison = new Geison();
    console.log(geison.nome, geison.idade);
})();
