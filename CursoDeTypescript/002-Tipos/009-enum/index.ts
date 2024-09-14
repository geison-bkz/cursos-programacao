(() => {
    enum EMes {
        JAN = 'Janeiro',
        FEV = 'Fevereiro',
        MAR = 'Março',
    }

    console.log(EMes.JAN);

    const pessoa: { nome: string; mesAniversario: string } = {
        nome: 'Geison',
        mesAniversario: EMes.FEV,
    };

    if (pessoa.mesAniversario === EMes.FEV) {
        console.log(pessoa.nome);
    }
})();
