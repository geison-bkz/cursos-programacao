// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  const nome = 'Geison';

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Geison');
  console.log(pessoa);
}
