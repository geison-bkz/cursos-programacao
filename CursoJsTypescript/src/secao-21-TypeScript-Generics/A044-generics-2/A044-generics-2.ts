type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promisseAsync() {
  return 1;
}

function minhaPromisse(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promisseAsync().then((resultado) => console.log(resultado + 1));
minhaPromisse().then((resultado) => console.log(resultado + 1));
