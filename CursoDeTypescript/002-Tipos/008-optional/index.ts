(() => {
    const fn = (nome: string, idade?: number) => {
        return `nome ${nome}, idade ${idade}`;
    };

    console.log(fn('Geison', 35));
    console.log(fn('Geison'));
})();
