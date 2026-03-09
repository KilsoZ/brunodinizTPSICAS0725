const prompt = require('prompt-sync')();

//Exercício 1: Converter Segundos em Horas, Minutos e Segundos
//Enunciado:
 //Desenvolva um programa que assuma uma entrada em segundos e a converta para horas, minutos e segundos.
//Exemplo:
// Entrada: 3665 segundos
 //Saída esperada: 1 hora, 1 minuto e 5 segundos.

function exercicio1() {
    function converterSegundos(totalSegundos) {
        let horas = Math.floor(totalSegundos / 3600);
        let minutos = Math.floor((totalSegundos % 3600) / 60);
        let segundos = totalSegundos % 60;
        return { horas, minutos, segundos };
    }

    function mostrarResultado(horas, minutos, segundos) {
        console.log(`${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`);
    }

    let totalSegundos = parseInt(prompt("Insere o número de segundos: "));
    let resultado = converterSegundos(totalSegundos);
    mostrarResultado(resultado.horas, resultado.minutos, resultado.segundos);
}

//Exercício 2: Encontrar o Maior e o Menor Valor entre 3 Números
//Enunciado:
// Desenvolva um programa que analise 3 valores inteiros e informe qual o maior e qual o menor deles.
//Exemplo:
// Entrada: num1 = 5, num2 = 2, num3 = 8
// Saída esperada:
// Maior: 8
// Menor: 2

function exercicio2() {
    function encontrarmaior(num1, num2, num3) {
        let maior = num1;
        if (num2 > maior) {
            maior = num2;
        }
        if (num3 > maior) {
            maior = num3;
        }
        return maior;
    }

    function encontrarMenor(num1, num2, num3) {
        let menor = num1;
        if (num2 < menor) {
            menor = num2;
        }
        if (num3 < menor) {
            menor = num3;
        }
        return menor;
    }

    function mostrarResultado(maior, menor) {
        console.log(`Maior: ${maior}`);
        console.log(`Menor: ${menor}`);
    }
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));
    let maior = encontrarmaior(num1, num2, num3);
    let menor = encontrarMenor(num1, num2, num3);
    mostrarResultado(maior, menor);
}

//Exercício 3: Mostrar Números em Ordem Crescente e Decrescente
//Enunciado:
// Crie 2 variáveis (num1 e num2) e leia o valor para cada uma delas. Mostre os valores de forma crescente e decrescente.
//Exemplo:
// Entrada: num1 = 7, num2 = 2
// Saída esperada:
// Crescente: 2, 7
// Decrescente: 7, 2

function exercicio3() {
    function ordenarCrescente(num1, num2) {
        if (num1 <= num2) {
            return [num1, num2];
        } else {
            return [num2, num1];
        }
    }

    function ordenarDecrescente(num1, num2) {
        if (num1 >= num2) {
            return [num1, num2];
        } else {
            return [num2, num1];
        }
    }

    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let crescente = ordenarCrescente(num1, num2);
    let decrescente = ordenarDecrescente(num1, num2);
    console.log(`Crescente: ${crescente[0]}, ${crescente[1]}`);
    console.log(`Decrescente: ${decrescente[0]}, ${decrescente[1]}`);
}

//Exercício 4: Verificar se o Cheque Pode Ser Descontado
//Enunciado:
// Desenvolva um Programa que leia o saldo inicial de um cliente de banco e leia também o valor de um cheque. Analise se o cheque pode ser descontado. Se o cheque não puder ser descontado, mostre essa informação, caso contrário, desconte o cheque e informe o saldo atualizado.
//Exemplo:
// Entrada: Saldo = 500, Cheque = 300
// Saída esperada:
// Cheque descontado, saldo: 200

function exercicio4() {
    function podeDescontarCheque(saldo, cheque) {
        return cheque <= saldo;
    }

    function descontarCheque(saldo, cheque) {
        return saldo - cheque;
    }
    
    function mostrarResultado(podeDescontar, saldoAtualizado) {
        if (podeDescontar) {
            console.log(`Cheque descontado, saldo: ${saldoAtualizado}`);
        } else {
            console.log("Cheque não pode ser descontado, saldo insuficiente.");
        }
    }

    let saldo = parseFloat(prompt("Digite o saldo inicial:"));
    let cheque = parseFloat(prompt("Digite o valor do cheque:"));
    let podeDescontar = podeDescontarCheque(saldo, cheque);
    let saldoAtualizado = descontarCheque(saldo, cheque);
    mostrarResultado(podeDescontar, saldoAtualizado);
}

//Exercício 5: Ler 3 Valores e Exibir em Ordem Crescente e Decrescente
//Enunciado:
// Ler 3 valores inteiros e apresentar os valores dispostos em ordem crescente e decrescente.
//Exemplo:
// Entrada: num1 = 4, num2 = 9, num3 = 2
// Saída esperada:
// Crescente: 2, 4, 9
// Decrescente: 9, 4, 2
function exercicio5() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);

    console.log(`Crescente: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);
    console.log(`Decrescente: ${numeros[2]}, ${numeros[1]}, ${numeros[0]}`);
}

//Exercício 6: Desconto de Compra
//Enunciado:
// Uma loja oferece descontos de acordo com o valor da compra:
//10% para compras até 200,00€.
//15% para compras entre 200,01€ e 500,00€.
//20% para compras acima de 500,00€.
// Desenvolva um Programa que leia o nome do cliente e o valor da compra e mostre o valor do desconto e o valor total a pagar.
//Exemplo:
// Entrada: Cliente: João, Compra: 350
// Saída esperada:
// Nome: João
// Compra: 350,00€
// Desconto: 52,50€
// Total a pagar: 297,50€

function exercicio6() {
    let nome = prompt("Digite o nome do cliente:");
    let compra = parseFloat(prompt("Digite o valor da compra:"));
    let desconto = 0;

    if (compra <= 200) {
        desconto = compra * 0.10;
    } else if (compra <= 500) {
        desconto = compra * 0.15;
    } else {
        desconto = compra * 0.20;
    }

    let total = compra - desconto;
    console.log(`Nome: ${nome}`);
    console.log(`Compra: ${compra.toFixed(2)}€`);
    console.log(`Desconto: ${desconto.toFixed(2)}€`);
    console.log(`Total a pagar: ${total.toFixed(2)}€`);
}

//Exercício 7: Calcular a Média de Notas com Pesos
//Enunciado:
//O sistema de avaliação de uma disciplina tem três provas com pesos diferentes. A primeira tem peso 2, a segunda tem peso 3, e a terceira tem peso 5. Crie um programa para calcular a média final de um aluno e mostrar se ele está APROVADO (nota >= 6) ou REPROVADO (nota < 6).
//Exemplo:
// Entrada: Nota1 = 7, Nota2 = 6, Nota3 = 9
// Saída esperada:
// Média: 7.4
// Aprovado

function exercicio7() {
    let nota1 = parseFloat(prompt("Digite a primeira nota (peso 2):"));
    let nota2 = parseFloat(prompt("Digite a segunda nota (peso 3):"));
    let nota3 = parseFloat(prompt("Digite a terceira nota (peso 5):"));

    let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    console.log(`Média: ${media.toFixed(1)}`);
    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

//Exercício 8: Calcular a Média de 10 Notas e informar notas iguais ou acima da media 
//Enunciado:
//Crie um programa que leia a nota de 10 alunos (notas de 0 a 20), calcule a média das notas e mostre a média.
//Além disso, informe quantos alunos ficaram com a nota igual ou acima da média. 

function exercicio8() {

    function lerNotas() {
        let notas = [];
        for (let i = 1; i <= 10; i++) {
            notas.push(parseFloat(prompt(`Nota do aluno ${i}: `)));
        }
        return notas;
    }

    function calcularMedia(notas) {
        let soma = notas.reduce((acc, n) => acc + n, 0);
        return soma / notas.length;
    }

    function contarAcimaMedia(notas, media) {
        return notas.filter(n => n >= media).length;
    }

    function mostrarResultado(media, acimaMedia) {
        console.log(`Média da turma: ${media.toFixed(2)}`);
        console.log(`Alunos com nota igual ou acima da média: ${acimaMedia}`);
    }

    let notas = lerNotas();
    let media = calcularMedia(notas);
    let acimaMedia = contarAcimaMedia(notas, media);

    mostrarResultado(media, acimaMedia);
}
///Exercício Switch: Exibir Nome do Mês
//Enunciado:
//Leia um número inteiro de 1 a 12 e mostre o nome do mês correspondente. Caso o número não seja válido, mostre uma mensagem de erro.
//Exemplo:
//Entrada: 5
//Saída esperada: Maio

function exercicioSwitch() {

    function obterNomeMes(numero) {
        switch (numero) {
            case 1:  return "Janeiro";
            case 2:  return "Fevereiro";
            case 3:  return "Março";
            case 4:  return "Abril";
            case 5:  return "Maio";
            case 6:  return "Junho";
            case 7:  return "Julho";
            case 8:  return "Agosto";
            case 9:  return "Setembro";
            case 10: return "Outubro";
            case 11: return "Novembro";
            case 12: return "Dezembro";
            default: return null;
        }
    }

    function mostrarResultado(mes) {
        let nome = obterNomeMes(mes);
        if (nome) {
            console.log(nome);
        } else {
            console.log("Número inválido. Insere um número entre 1 e 12.");
        }
    }

    let mes = parseInt(prompt("Insere um número de 1 a 12: "));
    mostrarResultado(mes);
}

//Exercício Loop: Identificar Números Pares e Ímpares
//Enunciado:
//Leia 10 números e determine quantos são pares e quantos são ímpares.
//Exemplo:
//Entrada: 2, 3, 5, 6, 8, 9, 10, 12, 14, 15
//Saída esperada:
//Pares: 6
//Ímpares: 4

function exercicioLoop() {

    function lerNumeros() {
        let numeros = [];
        for (let i = 1; i <= 10; i++) {
            numeros.push(parseInt(prompt(`Número ${i}: `)));
        }
        return numeros;
    }

    function ePar(numero) {
        return numero % 2 === 0;
    }

    function contarPares(numeros) {
        return numeros.filter(n => ePar(n)).length;
    }

    function contarImpares(numeros) {
        return numeros.filter(n => !ePar(n)).length;
    }

    function mostrarResultado(pares, impares) {
        console.log(`Pares: ${pares}`);
        console.log(`Ímpares: ${impares}`);
    }

    let numeros = lerNumeros();
    mostrarResultado(contarPares(numeros), contarImpares(numeros));
}

function menu() {
    console.log("\n=============================");
    console.log("       MENU DE EXERCÍCIOS    ");
    console.log("=============================");
    console.log("1  - Converter Segundos");
    console.log("2  - Maior e Menor (3 números)");
    console.log("3  - Crescente/Decrescente (2 números)");
    console.log("4  - Verificar Cheque");
    console.log("5  - Crescente/Decrescente (3 números)");
    console.log("6  - Desconto de Compra");
    console.log("7  - Média com Pesos");
    console.log("8  - Média de 10 Notas");
    console.log("9  - Nome do Mês (Switch)");
    console.log("10 - Pares e Ímpares (Loop)");
    console.log("0  - Sair");
    console.log("=============================");

    let opcao = prompt("Escolhe um exercício: ");

    switch (opcao) {
        case "1":  exercicio1();     break;
        case "2":  exercicio2();     break;
        case "3":  exercicio3();     break;
        case "4":  exercicio4();     break;
        case "5":  exercicio5();     break;
        case "6":  exercicio6();     break;
        case "7":  exercicio7();     break;
        case "8":  exercicio8();     break;
        case "9":  exercicioSwitch(); break;
        case "10": exercicioLoop();  break;
        case "0":  console.log("Até logo!"); process.exit(0);
        default:   console.log("Opção inválida!");
    }

    menu();
}

menu();