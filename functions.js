function chegaremcasa() {
  console.log("Boa noite");
  console.log("Como estão?");
  console.log("Cheguei...");
}

//chegaremcasa();

function calcularquadrado(numero) {
  quadrado = numero ** 2;
  console.log(`O numero ao quadrado é ${quadrado}`);
}

//calcularquadrado(6);

function calcularquadrado(numero) {
  return numero ** 2;
}

valor1 = calcularquadrado(6);
console.log(valor1);
