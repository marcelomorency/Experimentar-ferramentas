var primeiroNumero = parseInt(prompt("digite seu primeiro valor: "));
var segundoNumero = parseInt(prompt("Digite seu segundo numero: "));
var divisor = 0;
while (segundoNumero != 0){
divisor = primeiroNumero %segundoNumero
primeiroNumero = segundoNumero
segundoNumero = divisor
}

document.write("MDC = " + primeiroNumero)