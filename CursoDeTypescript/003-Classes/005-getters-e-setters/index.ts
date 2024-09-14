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
        private _profissao: string = 'Programador';

        constructor() {
            super('Geison', 35);
        }

        get profissao() {
            return this._profissao;
        }

        set profissao(value: string) {
            this._profissao = value;
        }
    }

    const geison = new Geison();
    console.log(geison.nome, geison.idade, geison.profissao);
    geison.profissao = 'Desenvolvedor';
    console.log(geison.nome, geison.idade, geison.profissao);
})();
