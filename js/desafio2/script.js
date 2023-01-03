function fibonacci() {
  var termo = parseInt(document.getElementById('numero').value);
  var resposta = document.getElementById('resposta');
  var penultimo = 0, ultimo = 1;
  var numero;

  if (termo <= 2) {
    resposta.innerHTML = `o número ${termo} não pertence a tabela fibonacci!`
    return resposta;
  } else {
    count = 3;
    while (count <= termo) {
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
      count++;
    }
  }
  resposta.innerHTML = `A soma entre ${termo} termos é: ` + numero;
}
