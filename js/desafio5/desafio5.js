function inverter(string) {
  var saida = "";

  for (var i = string.length - 1; i >= 0; i--) {
    saida += string[i];

  }
  return saida;
}
//insira um valor para inverter a baixo
console.log(inverter("William Pereira da Conceição"))