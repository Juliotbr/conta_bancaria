import * as readlineSync from 'readline-sync';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { colors } from './src/util/colors';
import { Conta } from './src/model/Conta';
import { ContaController } from './src/controller/ContaController';

export function main() {
    
    // Instância da Classe ContaController
    let contas: ContaController = new ContaController();

    //Variáveis Auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposConta = ['Conta Corrente', 'Conta Poupança'];

    while (true) {

        console.log(colors.fg.greenstrong, colors.bg.black, 
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o número da Agência: ");
                agencia = readlineSync.questionInt("");

                console.log("Digite o nome do Titular da conta: ");
                titular = readlineSync.question("");

                console.log("Digite o tipo da conta: ");
                tipo = readlineSync.keyInSelect(tiposConta, "", {cancel: false}) + 1; // +1 para ajustar o índice
                
                console.log("Digite o saldo da conta (R$): ");
                saldo = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da Conta Corrente (R$): ");
                        limite = readlineSync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                        saldo, limite))
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta Poupança: ");
                        aniversario = readlineSync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular,
                        saldo, aniversario))
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.magentastrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                    contas.listarTodas();

                keyPress();
                break;
            case 3:
                console.log(colors.fg.magentastrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                numero = readlineSync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.magentastrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                
                console.log("Digite o número da Conta: ");
                numero = readlineSync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log("Digite o número da Agência: ");
                    agencia = readlineSync.questionInt("");

                    console.log("Digite o nome do Titular da conta: ");
                    titular = readlineSync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o saldo da conta (R$): ");
                    saldo = readlineSync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da Conta (R$): ");
                            limite = readlineSync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta Poupança: ");
                            aniversario = readlineSync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                        }
                }else {
                    console.log(colors.fg.red, "\nA conta número: " + numero + "não foi encontrada!", colors.reset);}

                keyPress();
                break;
            case 5:
                console.log(colors.fg.magentastrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);
                
                console.log("Digite o número da Conta: ");
                numero = readlineSync.questionInt("");
                contas.deletar(numero);
                
                keyPress
                break;
            case 6:
                console.log(colors.fg.magentastrong,
                    "\n\nSaque\n\n", colors.reset);

                break;
            case 7:
                console.log(colors.fg.magentastrong,
                    "\n\nDepósito\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.magentastrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                break;
            default:
                console.log(colors.fg.magentastrong, 
                    "\nOpção Inválida!\n", colors.reset);

                break;
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido no BootCamp JavaScript FullStack da Generation: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();






function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione qualquer tecla para continuar...");
    readlineSync.prompt();
}