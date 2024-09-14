/* 
    public - Pode ser acessado tanto pela mesma classe, classes filhas
    e outras classes

    protected - Pode ser acessada pela mesma classe e classes filhas,
    não pode ser acessado por outras classes.

    private - Pode ser acessada somente pela própria classe.
*/

(() => {
    class Pessoa {
        private nome: string;
        private idade: number;

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
})();
