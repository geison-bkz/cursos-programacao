/* 
    As interfaces TypeScript definem os contratos em seu código.
    Eles também fornecem nomes explícitos para verificação de tipo.
*/

(() => {
    interface IPessoa {
        nome: string;
        idade: number;
        readonly cpf: number;
        enabled(): boolean;
    }

    const pessoa: IPessoa = {
        nome: 'Geison',
        idade: 35,
        cpf: 11111111111,
        enabled: () => {
            return true;
        },
    };

    class Geison implements IPessoa {
        nome: string = 'Geison';
        idade: number = 35;

        readonly cpf: number = 11111111111;

        enabled(): boolean {
            return true;
        }
    }
})();
