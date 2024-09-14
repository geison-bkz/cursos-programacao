(() => {
    const error = (): never => {
        throw new Error('Algo deu errador');
    };

    const loop = (): never => {
        while (true) {
            console.log('Olá');
        }
    };

    loop();
})();
