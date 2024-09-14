type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  ///data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data.');
console.log(undefined ?? 'Não existe dados(undefined).');
console.log(null ?? 'Não existe dados(null).');
console.log(false ?? 'Não existe dados(false).');
console.log(0 ?? 'Não existe dados(zero).');
console.log('' ?? 'Não existe dados(string vazia).');
