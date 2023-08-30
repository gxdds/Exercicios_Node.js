let a = 20;
const b = 1;
let c = 0;

do {
  a = a - b;
  c++;
} while (a > 7);

console.log(
  `A variavel A começava em 20 e foi diminuida ${c} vezes até chegar no valor de ${a}`
);
