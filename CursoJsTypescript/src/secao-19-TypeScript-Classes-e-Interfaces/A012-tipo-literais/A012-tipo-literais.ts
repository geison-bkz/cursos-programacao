const x = 10;
//x = 0b1010;
//x = 'Geison';

const y = 10;

const a = 100 as const;

const pessoa = {
  nome: 'Geison' as const,
  sobrenome: 'dos Santos',
};
pessoa.nome = 'Geison';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

export default 1;
