const usuario = { nome: "dripper", idade: 22 };
const idade2 = 12;
const idade3 = 215;

switch (usuario.nome) {
  case "vinicius":
    console.log(`Olá ${usuario.nome}, sua idade é ${usuario.idade}`);
    break;
  case "marcio":
    console.log(`Olá ${usuario.nome}, sua idade é ${idade2}`);
    break;
  case "cleber":
    console.log(`Olá ${usuario.nome}, sua idade é ${idade3}`);
    break;
  default:
    console.log(
      `Olá estranho, não sei te dizer sua idade pois você não está em nosso sistema`
    );
}
