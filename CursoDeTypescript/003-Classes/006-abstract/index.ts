(() => {
    abstract class Pessoa {
        protected nome: string;
        protected idade: number;

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

        protected abstract profissao: string;
        public abstract qualSuaProfissao(): string;
    }

    class Geison extends Pessoa {
        protected profissao: string = 'Programador';

        constructor() {
            super('Geison', 35);
        }

        public qualSuaProfissao(): string {
            return `Sua profissão é ${this.profissao}`;
        }
    }

    const geison = new Geison();
    console.log(geison);
    console.log(geison.qualSuaProfissao());
})();
