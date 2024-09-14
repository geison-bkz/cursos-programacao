enum Cores {
  VERMELHO = 1,
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
  VERDE = 5,
  MARROM,
}

console.log(Cores.VERMELHO);
console.log(Cores[2]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);
