export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Geison', 'dos Santos', 34, '000.000.000-00');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
