export interface Pessoa {
  nome: string;
}

export interface Pessoa {
  readonly sobrenome: string;
}

export interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Geison',
  sobrenome: 'dos Santos',
};

//pessoa.sobrenome = '';
console.log(pessoa);
