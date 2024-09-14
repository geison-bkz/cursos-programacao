function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi', target);

  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0];
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('gato', 'roxo');
console.log(animal);
