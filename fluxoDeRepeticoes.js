// fluxoDeRepeticoes.js

// ===============================
// MENU PRINCIPAL
// ===============================

function menu() {
  let opcao;

  do {
    opcao = prompt(`
===== MENU DE EXERCÍCIOS =====
1 - Listar nomes (for...of)
2 - Somar valores (for...of)
3 - Exibir propriedades (for...in)
4 - Contar propriedades de um objeto
5 - Concatenar nomes (for...of)
6 - Tipos de elementos (for...of)
7 - Incrementar idades (for...in)
8 - Objeto para array de strings
9 - Contar valores únicos (Set + for...of)
10 - Contar caracteres de uma frase
0 - Sair
==============================
Escolha uma opção:
`);

    switch (opcao) {
      case "1": exercicio1(); break;
      case "2": exercicio2(); break;
      case "3": exercicio3(); break;
      case "4": exercicio4(); break;
      case "5": exercicio5(); break;
      case "6": exercicio6(); break;
      case "7": exercicio7(); break;
      case "8": exercicio8(); break;
      case "9": exercicio9(); break;
      case "10": exercicio10(); break;
      case "0": console.log("Encerrando programa..."); break;
      default: console.log("Opção inválida!");
    }

  } while (opcao !== "0");
}

// ===============================
// FÁCEIS
// ===============================

// 1. Listar nomes com for...of
function exercicio1() {
  const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
  for (const nome of nomes) {
    console.log(nome);
  }
}

// 2. Somar valores com for...of
function exercicio2() {
  const numeros = [10, 20, 30, 40];
  let soma = 0;

  for (const num of numeros) {
    soma += num;
  }

  console.log("Soma total:", soma);
}

// 3. Exibir propriedades com for...in
function exercicio3() {
  const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };

  for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }
}

// 4. Contar propriedades de um objeto
function exercicio4() {
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  let count = 0;

  for (const chave in obj) {
    count++;
  }

  console.log("Total de propriedades:", count);
}

// ===============================
// MÉDIOS
// ===============================

// 5. Concatenar nomes
function exercicio5() {
  const nomes = ["Ana", "Bruno", "Carlos"];
  let resultado = "";

  for (const nome of nomes) {
    resultado += nome + ", ";
  }

  console.log(resultado.slice(0, -2));
}

// 6. Tipos de dados
function exercicio6() {
  const valores = [10, "texto", true, null, undefined];

  for (const valor of valores) {
    console.log(valor, "->", typeof valor);
  }
}

// 7. Incrementar idades
function exercicio7() {
  const pessoas = {
    Ana: 20,
    Bruno: 25,
    Carlos: 30
  };

  for (const nome in pessoas) {
    pessoas[nome] += 1;
  }

  console.log(pessoas);
}

// 8. Objeto para array de strings
function exercicio8() {
  const obj = { a: 1, b: 2, c: 3 };
  const resultado = [];

  for (const chave in obj) {
    resultado.push(`${chave}: ${obj[chave]}`);
  }

  console.log(resultado);
}

// ===============================
// DIFÍCEIS
// ===============================

// 9. Valores únicos com Set
function exercicio9() {
  const array = [1, 2, 2, 3, 4, 4, 5];
  const setUnico = new Set(array);

  console.log("Valores únicos:", setUnico.size);
}

// 10. Contar caracteres de uma frase
function exercicio10() {
  const frase = prompt("Digite uma frase:");
  const contagem = {};

  for (const letra of frase) {
    if (letra !== " ") {
      contagem[letra] = (contagem[letra] || 0) + 1;
    }
  }

  console.log(contagem);
}

// ===============================
// INICIALIZAÇÃO
// ===============================
menu();