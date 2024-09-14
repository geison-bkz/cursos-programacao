type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 34,
  nome: 'Geison',
  sobrenome: 'dos Santos',
};

console.log(pessoa);

export { pessoa };
