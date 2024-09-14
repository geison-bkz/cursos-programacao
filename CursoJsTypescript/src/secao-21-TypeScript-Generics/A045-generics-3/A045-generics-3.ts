interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Geison',
  sobrenome: 'dos Santos',
  idade: 34,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 34,
};

const aluno3: PessoaProtocolo = {
  nome: 'Geison',
  sobrenome: 'dos Sanntos',
  idade: 34,
};

console.log(aluno1, aluno2, aluno3);
