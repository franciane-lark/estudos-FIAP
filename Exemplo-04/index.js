//Programa quantos dias de vida
let diaDeHoje, mesDeHoje, anoDeHoje, diaDeNascimento, mesDeNascimento, anoDeNascimento, calc1, calc2, calc3, calc4, diaH, total;

diaDeHoje = prompt("Digite o dia de hoje: ");

mesDeHoje = prompt("Digite o mês de hoje: ");

anoDeHoje = prompt("Digite o ano de hoje: ");

diaDeNascimento = prompt("Digite o dia de nascimento: ");

mesDeNascimento = prompt("Digite o mês de nascimento: ");

anoDeNascimento = prompt("Digite o ano de nascimento: ");

calc1 = 30 - diaDeHoje;

calc2 = (12 - mesDeNascimento)* 30;

calc3 = (anoDeHoje - anoDeNascimento - 1)* 360;

diaH = diaDeHoje;

calc4 = (mesDeHoje - 1)* 30;

total = calc1 + calc2 + calc3 + calc4 + diaH;

console.log("Dias vividos: ", total)