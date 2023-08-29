function media(nota1, nota2, nota3) {
  soma = nota1 + nota2 + nota3;
  resultado = soma / 3;
  console.log(`A média do aluno é de ${resultado}`);
}

x = media(10, 5, 8);

function recuperacao(nota1, nota2, nota3, notafinal) {
  media = (nota1, nota2, nota3) / 3;
  mediafinal = (media + notafinal) / 2;
  console.log(`A média final do aluno foi de ${mediafinal}`);
}

recuperacao(10, 5, 8, 10);
