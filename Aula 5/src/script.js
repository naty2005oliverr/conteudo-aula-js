// Calculadora com Switch
let numero1 = parseFloat(prompt("Informe o primeiro valor: "));
let numero2 = parseFloat(prompt("Informe o segundo valor: "));

let opcoes = prompt(
  "Selecione a operação: \n \n" +
  "+: Adção \n" +
  "-: Subtração \n" +
  "*: Multiplicação \n" +
  "/: Duvisão \n" 
  );

  switch (opcoes) {
    case "+":
      alert ("O resultado da operação é: " + (numero1 + numero2));
      break;

      case "-":
      alert("O resultado da operação é: " + (numero1 - numero2));
      break;

      case "*":
        alert("O resultado da operação é: " + (numero1 * numero2));
        break;

      case "/":
        if (numero2 === 0) {
      alert("Não é possível dividir por zero. Tente novamente!");
      } else {
        alert ("O resultado da operação é: " + (numero1 / numero2));
      }
      break;

      default:
        alert("Informe um valor válido!");
  }
