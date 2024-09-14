function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Geison',
  sobrenome: 'dos Santos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Geison', 'dos Santos');
pessoa.exibirNome();

export { pessoa };
