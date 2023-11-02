let saldo = 100.0;
let extratoSaidas = [`-R$ 35 (Saque)`, `-R$ 230 (Transfêrencia)`];
let extratoEntradas = [`+R$ 100 (Depósito)`];
let nomeDoUsuario = prompt(`Olá, por favor digite seu nome:`);
const senha = `3589`;

function inicio() {
  var escolha = parseInt(
    prompt(
      `Olá ${nomeDoUsuario}, é um prazer ter você por aqui \n\nSelecione uma opção: \n 1.) Saldo \n 2.) Extrato \n 3.) Saque \n 4.) Depósito \n 5.)Transferência \n 6.) Sair`
    )
  );

  switch (escolha) {
    case 1:
      if (verificar_senha()) {
        ver_saldo();
      } else {
        alert("Senha inválida, por favor tente novamente.");
        inicio();
      }
      break;
    case 2:
      if (verificar_senha()) {
        ver_extrato();
      } else {
        alert("Senha inválida, por favor tente novamente.");
        inicio();
      }
      break;
    case 3:
      if (verificar_senha()) {
        fazer_saque();
      } else {
        alert("Senha inválida, por favor tente novamente.");
        inicio();
      }
      break;
    case 4:
      fazer_deposito();
      break;
    case 5:
      if (verificar_senha()) {
        fazer_transferencia();
      } else {
        alert("Senha inválida, por favor tente novamente.");
        inicio();
      }
      break;
    case 6:
      sair();
      break;
    default:
      erro();
      break;
  }
}

function verificar_senha() {
  let senhaInserida = prompt("Digite sua senha:");
  if (senhaInserida === senha) {
    return true;
  } else {
    return false;
  }
}

function ver_saldo() {
  alert(`Seu saldo é R$ ${saldo}`);
  inicio();
}

function ver_extrato() {
  alert(`Saídas: \n ${extratoSaidas.join("\n")} \n Entradas: \n ${extratoEntradas.join("\n")}`);
  inicio();
}

function fazer_deposito() {
  var deposito = parseFloat(prompt("Qual o valor para depósito?"));
  if (isNaN(deposito) || deposito === "") {
    alert("Por favor, informe um número.");
    fazer_deposito();
  } else if (deposito <= 0) {
    alert("Operação não autorizada! O valor para depósito não pode ser menor ou igual a 0. Tente novamente.");
    fazer_deposito();
  } else {
    saldo += deposito;
    extratoEntradas.push(`+R$ ${deposito} (Depósito)`);
    alert("Operação realizada com sucesso.")
    inicio();
  }
}

function fazer_saque() {
  var saque = parseFloat(prompt("Qual o valor para saque?"));

  if (isNaN(saque) || saque === "") {
    alert("Por favor, informe um número.");
    fazer_saque();
  } else if (saque > saldo) {
    alert(
      `Operação não autorizada! O valor para saque é maior que seu saldo. Seu saldo é R$ ${saldo}`
    );
    fazer_saque();
  } else if (saque <= 0) {
    alert(
      `Operação não autorizada! O valor para saque não poder menor ou igual a 0.`
    );
    fazer_saque();
  } else {
    saldo -= saque;
    extratoSaidas.push(`-R$ ${saque} (Saque)`);
    alert(`Operação realizada com sucesso. Seu novo saldo é R$ ${saldo}`);
    inicio();
  }
}

function fazer_transferencia() {
  let numeroDaConta = parseInt(
    prompt(`Digite o numero da conta para qual vai transferir:`)
  );
  let transferencia = parseFloat(
    prompt(`Informe o valor da transferência:`)
  );

  if (isNaN(numeroDaConta)) {
    alert("Por favor, digite um numero de conta válido");
    fazer_transferencia();
  } else if (isNaN(transferencia) || transferencia <= 0) {
    alert(`Operação não autorizada! O valor para transferência não pode ser menor ou igual a 0`);
    fazer_transferencia();
  } else if (transferencia > saldo) {
    alert("Operação não autorizada! o valor para transferência não pode ser maior do que seu saldo. Seu saldo atual é: R$ ${saldo}")
    fazer_transferencia()
  } else {
    saldo -= transferencia;
    extratoSaidas.push(`-R$ ${transferencia} (Transferência)`);
    alert(`Operação realizada com sucesso. Seu novo saldo é R$ ${saldo}`);
    inicio();
  }
}

function erro() {
  alert("Por favor, informe um número entre 1 e 6.");
  inicio();
}

function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    alert(`Obrigado por utilizar nossos serviços ${nomeDoUsuario}, foi um prazer ter você por aqui!`)
    window.close();
  } else {
    inicio();
  }
}


inicio();