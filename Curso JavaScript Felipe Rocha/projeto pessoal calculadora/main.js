function soma(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {
  return n1 / n2;
}

let continuar = "S" 

while (continuar === "S") {

  let firstNumber = parseFloat(window.prompt("Digite o primeiro número:"));
  let operation = window.prompt("Digite a operação desejada: + - x /");
  let secondNumber = parseFloat(window.prompt("Digite agora o segundo número:"));
  let result = 0;
  
  switch (operation) {
    case "+":
      case "soma":
      result = soma(firstNumber, secondNumber);
      break;
    case "-":
      result = subtracao(firstNumber, secondNumber);
      break;
    case "x":
      case "*":
      result = multiplicacao(firstNumber, secondNumber);
      break;
    case "/":
      result = divisao(firstNumber, secondNumber);
      break;
  }
  
  continuar = window.prompt(`O resultado é ${result}. Deseja fazer outra operação? S ou N`)

}