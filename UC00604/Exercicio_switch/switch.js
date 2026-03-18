const prompt = require('prompt-sync')();


// Exercício 1: Tipo de Dia
// Enunciado:
// Cria um programa que receba o nome de um dia da semana e diga se é dia útil ou fim de semana.
// Exemplo:
// Entrada → domingo
// Saída → Fim de semana

function exercicio1() {

    function classificarDia(dia) {
        switch (dia.toLowerCase()) {
            case "segunda":
            case "terca":
            case "terça":
            case "quarta":
            case "quinta":
            case "sexta":
                return "Dia útil";
            case "sabado":
            case "sábado":
            case "domingo":
                return "Fim de semana";
            default:
                return "Dia inválido";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let dia = prompt("Insere o nome do dia da semana: ");
    mostrarResultado(classificarDia(dia));
}


// Exercício 2: Classificação de Nota
// Enunciado:
// Lê uma nota (0–100) e retorna uma classificação:
// 90 ou mais → Excelente
// 70–89 → Bom
// 50–69 → Suficiente
// Abaixo de 50 → Insuficiente
// Exemplo:
// Entrada → 75
// Saída → Bom

function exercicio2() {

    function classificarNota(nota) {
        switch (true) {
            case (nota >= 90):
                return "Excelente";
            case (nota >= 70):
                return "Bom";
            case (nota >= 50):
                return "Suficiente";
            default:
                return "Insuficiente";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let nota = parseFloat(prompt("Insere a nota (0-100): "));
    mostrarResultado(classificarNota(nota));
}


// Exercício 3: Tipo de Pedido
// Enunciado:
// Recebe um dicionário com as chaves "tipo" e "valor". Exibe:
// "Compra de X€" se tipo for "compra"
// "Venda de X€" se tipo for "venda"
// "Pedido desconhecido" caso contrário
// Exemplo:
// Entrada → {"tipo": "venda", "valor": 250}
// Saída → Venda de 250€

function exercicio3() {

    function classificarPedido(tipo, valor) {
        switch (tipo.toLowerCase()) {
            case "compra":
                return `Compra de ${valor}€`;
            case "venda":
                return `Venda de ${valor}€`;
            default:
                return "Pedido desconhecido";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let tipo = prompt("Insere o tipo (compra/venda): ");
    let valor = parseFloat(prompt("Insere o valor: "));
    mostrarResultado(classificarPedido(tipo, valor));
}


// Exercício 4: Tipo de Dado
// Enunciado:
// Analisa um valor e retorna o seu tipo:
// Número inteiro
// Número decimal
// String numérica (número com zeros à esquerda, ex: "007")
// String textual
// Lista (vários valores separados por vírgula)
// Tipo desconhecido
// Exemplo:
// Entrada → 10,20,30
// Saída → Lista

function exercicio4() {

    function classificarTipo(valor) {
        switch (true) {
            case (valor.includes(",")):
                return "Lista";
            case (!isNaN(valor) && valor.trim() !== "" && !valor.includes(".")):
                return "Número inteiro";
            case (!isNaN(valor) && valor.trim() !== "" && valor.includes(".")):
                return "Número decimal";
            case (!isNaN(valor) && valor.startsWith("0") && valor.length > 1):
                return "String numérica";
            case (valor.trim() !== ""):
                return "String textual";
            default:
                return "Tipo desconhecido";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let valor = prompt("Insere um valor: ");
    mostrarResultado(classificarTipo(valor));
}


// Exercício 5: Análise de Mensagem
// Enunciado:
// Recebe uma mensagem e retorna:
// "Saudação" se for "olá" ou "bom dia"
// "Pergunta" se terminar com "?"
// "Despedida" se contiver "tchau" ou "adeus"
// "Mensagem genérica" caso contrário
// Exemplo:
// Entrada → "Tudo bem?"
// Saída → Pergunta

function exercicio5() {

    function analisarMensagem(mensagem) {
        let msg = mensagem.toLowerCase().trim();
        switch (true) {
            case (msg === "olá" || msg === "ola" || msg === "bom dia"):
                return "Saudação";
            case (msg.endsWith("?")):
                return "Pergunta";
            case (msg.includes("tchau") || msg.includes("adeus")):
                return "Despedida";
            default:
                return "Mensagem genérica";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let mensagem = prompt("Insere uma mensagem: ");
    mostrarResultado(analisarMensagem(mensagem));
}


// Exercício 6: Estado do Servidor
// Enunciado:
// Recebe um dicionário com as chaves "status" e "tempo_resposta". Retorna:
// "Servidor ativo" se o status for "ok" e tempo <= 200ms
// "Servidor lento" se o status for "ok" e o tempo de resposta for maior que 200ms
// "Servidor indisponível" se o status for "erro"
// "Estado desconhecido" caso contrário
// Exemplo:
// Entrada → {"status": "ok", "tempo_resposta": 350}
// Saída → Servidor lento

function exercicio6() {

    function verificarServidor(status, tempoResposta) {
        switch (true) {
            case (status === "ok" && tempoResposta > 200):
                return "Servidor lento";
            case (status === "ok"):
                return "Servidor ativo";
            case (status === "erro"):
                return "Servidor indisponível";
            default:
                return "Estado desconhecido";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let status = prompt("Insere o status do servidor (ok/erro): ").toLowerCase();
    let tempoResposta = parseInt(prompt("Insere o tempo de resposta em ms: "));
    mostrarResultado(verificarServidor(status, tempoResposta));
}


// Exercício 7: Classificação de Produto
// Enunciado:
// Recebe um dicionário com as chaves "categoria" e "preco". Retorna:
// "Produto de luxo" se categoria for "eletronico" e preço acima de 1000
// "Produto comum" se categoria for "eletronico" e preço até 1000
// "Produto alimentar" se categoria for "alimento"
// "Categoria desconhecida" caso contrário
// Exemplo:
// Entrada → {"categoria": "eletronico", "preco": 1500}
// Saída → Produto de luxo

function exercicio7() {

    function classificarProduto(categoria, preco) {
        switch (true) {
            case ((categoria === "eletronico" || categoria === "eletrônico") && preco > 1000):
                return "Produto de luxo";
            case ((categoria === "eletronico" || categoria === "eletrônico") && preco <= 1000):
                return "Produto comum";
            case (categoria === "alimento"):
                return "Produto alimentar";
            default:
                return "Categoria desconhecida";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let categoria = prompt("Insere a categoria (eletronico/alimento): ").toLowerCase();
    let preco = parseFloat(prompt("Insere o preço: "));
    mostrarResultado(classificarProduto(categoria, preco));
}


// Exercício 8: Operação Matemática
// Enunciado:
// Recebe uma operação (em texto) e dois números.
// Operações válidas: "soma", "subtrai", "multiplica", "divide"
// Exemplo:
// Entrada → Operação: "divide", Número 1: 20, Número 2: 4
// Saída → 5

function exercicio8() {

    function calcular(operacao, num1, num2) {
        switch (operacao.toLowerCase()) {
            case "soma":
                return num1 + num2;
            case "subtrai":
                return num1 - num2;
            case "multiplica":
                return num1 * num2;
            case "divide":
                if (num2 === 0) {
                    return "Erro: divisão por zero";
                }
                return num1 / num2;
            default:
                return "Operação inválida";
        }
    }

    function mostrarResultado(resultado) {
        console.log(`Resultado: ${resultado}`);
    }

    let operacao = prompt("Insere a operação (soma/subtrai/multiplica/divide): ");
    let num1 = parseFloat(prompt("Insere o número 1: "));
    let num2 = parseFloat(prompt("Insere o número 2: "));
    mostrarResultado(calcular(operacao, num1, num2));
}


// Exercício 9: Processamento de Requisição
// Enunciado:
// Recebe um dicionário com as chaves "metodo" e "conteudo". Retorna:
// "Requisição GET recebida" se o método for "GET"
// "Requisição POST com dados válidos" se o método for "POST" e o conteúdo não estiver vazio
// "Requisição POST sem dados" se o método for "POST" e o conteúdo estiver vazio
// "Método não suportado" caso contrário
// Exemplo:
// Entrada → {"metodo": "POST", "conteudo": ""}
// Saída → Requisição POST sem dados

function exercicio9() {

    function processarRequisicao(metodo, conteudo) {
        switch (true) {
            case (metodo === "GET"):
                return "Requisição GET recebida";
            case (metodo === "POST" && conteudo.trim() !== ""):
                return "Requisição POST com dados válidos";
            case (metodo === "POST" && conteudo.trim() === ""):
                return "Requisição POST sem dados";
            default:
                return "Método não suportado";
        }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let metodo = prompt("Insere o método (GET/POST): ").toUpperCase();
    let conteudo = prompt("Insere o conteúdo (deixa vazio se não houver): ");
    mostrarResultado(processarRequisicao(metodo, conteudo));
}


// Exercício 10: Jogo - Pedra, Papel ou Tesoura
// Enunciado:
// Cria um programa que receba duas jogadas (Jogador 1 e Jogador 2).
// Usa switch para determinar o resultado:
// Pedra ganha de Tesoura
// Tesoura ganha de Papel
// Papel ganha de Pedra
// Se forem iguais, é Empate
// Exemplo:
// Entrada → Jogador 1: pedra, Jogador 2: tesoura
// Saída → Jogador 1 venceu

function exercicio10() {

    function determinarVencedor(jogador1, jogador2) {
        if (jogador1 === jogador2) {
            return "Empate";
        }
        switch (jogador1) {
        case "pedra":
            if (jogador2 === "tesoura") {
                return "Jogador 1 venceu";
            } else {
                return "Jogador 2 venceu";
            }
        case "tesoura":
            if (jogador2 === "papel") {
                return "Jogador 1 venceu";
            } else {
                return "Jogador 2 venceu";
            }
        case "papel":
            if (jogador2 === "pedra") {
                return "Jogador 1 venceu";
            } else {
                return "Jogador 2 venceu";
            }
        default:
            return "Jogada inválida";
    }
    }

    function mostrarResultado(resultado) {
        console.log(resultado);
    }

    let jogador1 = prompt("Jogador 1 (pedra/papel/tesoura): ").toLowerCase();
    let jogador2 = prompt("Jogador 2 (pedra/papel/tesoura): ").toLowerCase();
    mostrarResultado(determinarVencedor(jogador1, jogador2));
}


// MENU PRINCIPAL

function menu() {

    function mostrarOpcoes() {
        console.log("       MENU DE EXERCÍCIOS    ");
        console.log("1  - Tipo de Dia");
        console.log("2  - Classificação de Nota");
        console.log("3  - Tipo de Pedido");
        console.log("4  - Tipo de Dado");
        console.log("5  - Análise de Mensagem");
        console.log("6  - Estado do Servidor");
        console.log("7  - Classificação de Produto");
        console.log("8  - Operação Matemática");
        console.log("9  - Processamento de Requisição");
        console.log("10 - Pedra, Papel ou Tesoura");
        console.log("0  - Sair");
    }

    function executarOpcao(opcao) {
        switch (opcao) {
            case "1":  exercicio1();  break;
            case "2":  exercicio2();  break;
            case "3":  exercicio3();  break;
            case "4":  exercicio4();  break;
            case "5":  exercicio5();  break;
            case "6":  exercicio6();  break;
            case "7":  exercicio7();  break;
            case "8":  exercicio8();  break;
            case "9":  exercicio9();  break;
            case "10": exercicio10(); break;
            case "0":  console.log("Até logo!"); process.exit(0);
            default:   console.log("Opção inválida!");
        }
    }

    mostrarOpcoes();
    let opcao = prompt("Escolhe um exercício: ");
    executarOpcao(opcao);

    menu();
}

menu();