const pessoa = {
  nome: "vinicius",
  idade: 22,
  cidade: "sto andre",
  cor: "branco",
  status: "solteiro",
};

for (item in pessoa) {
  console.log(`${item}: ${pessoa[item]}`);
}

const nomes = [
  "vinicius",
  "pedro",
  "joao",
  "lucas",
  "alicia",
  "stephany",
  "laura",
];

for (nome of nomes) {
  //OF FAZ PRINTAR OS NOMES - IN FAZ PRINTAR AS POSICOES
  console.log(nome);
}
