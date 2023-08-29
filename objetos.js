let documentos = {
  nome: "vinicius",
  idade: 22,
  sexo: "M",
  rg: "21.242.123-7",
  cpf: "431.423.212-14",
  cidade: "Santo André",
  brasileiro: true,
};

documentos.idade = 29;
documentos.cor = "branco";

console.log(documentos.nome);
console.log(documentos["idade"]); //chave (idade) valor (22 antigo/29 novo)
console.log(documentos.cor);
console.log(documentos);
