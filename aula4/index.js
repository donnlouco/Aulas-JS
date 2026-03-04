const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8 ;
let imc;
const anoAtual = new Date().getFullYear();
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = (anoAtual - idade)

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log(`tem ${altura} de altura e seu IMC e de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)