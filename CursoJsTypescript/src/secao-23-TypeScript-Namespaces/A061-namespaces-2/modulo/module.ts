// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  export const nome = 'Geison';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaNamespace = new PessoaDoNamespace('Geison');
  console.log(pessoaNamespace);
}

const pessoaNamespace = new MeuNamespace.PessoaDoNamespace('Geison');
console.log(pessoaNamespace);
