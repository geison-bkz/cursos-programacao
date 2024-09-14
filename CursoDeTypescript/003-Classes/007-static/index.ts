/* 
    A palavra chave static define um método estático para a classe.
    Métodos estático não são chamados na instância da classe.
    Em vez disso, eles são chamados na própria classe.
    Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

(() => {
    class Utils {
        static cloneObject(objetos: Array<{}>) {
            return JSON.parse(JSON.stringify(Object.assign(objetos)));
        }
    }

    const tenis1: { tamanho: number; estoque: boolean } = {
        tamanho: 41,
        estoque: true,
    };

    const tenis2: { tamanho: number; estoque: boolean } = {
        tamanho: 42,
        estoque: true,
    };

    console.log(Utils.cloneObject([tenis1, tenis2]));
})();
