/* 
    Uma classe TypeScript é uma estrutura de programação orientada a objetos
    que possui um conjunto de propriedades e metodos.

    A classe é um modelo para criar objetos, permitindo que você defina
    uma estrutura com propriedades e comportamentos.
*/

(() => {
    class Pessoa {
        nome: string;
        idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    const pessoa1 = new Pessoa('Geison', 35);

    console.log(pessoa1.nome);
})();
