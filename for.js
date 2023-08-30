const lista = [1, 3, 6, 7, 8, 2];
let contNum = 0;

for (numero in lista) {
  contNum++;
}
console.log(contNum); // qtd de nmrs

for (numero in lista) {
  console.log(numero);
}
