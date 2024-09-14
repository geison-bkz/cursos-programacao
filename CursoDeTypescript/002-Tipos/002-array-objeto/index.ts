(() => {
    //tuplas - a ordem da declaração dos tipos deve ser a mesma ordem dos valores declarados
    let array1: [string, string, number, boolean] = ['Geison dos Santos', 'Teste', 123, false];
    //Aqui não tem um a ordem especifica dos valores e nem dos tipos declarados.
    let array2: Array<string | number | boolean> = [true, 123, 'Geison dos Santos', 'Teste'];

    console.log(array1, array2);

    let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } = {
        nome: '1 - Geison',
        sobrenome: 'dos Santos',
        idade: 35,
        deuBom: true,
    };

    let obj2: Array<{ nome: string; sobrenome: string; idade: number; deuBom: boolean }> = [
        { nome: '2 - Geison', sobrenome: 'dos Santos', idade: 35, deuBom: true },
    ];

    console.log(obj1);
    console.log(obj2);
})();
