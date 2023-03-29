//Calculo imc
let peso, altura, calculoImc;

altura = prompt("Digite sua altura: ");

peso = prompt("Digite seu peso: ");

calculoImc = peso / (altura ** 2);

console.log("Seu IMC é: ", calculoImc);