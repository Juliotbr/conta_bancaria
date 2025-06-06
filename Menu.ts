import * as readlineSync from 'readline-sync';
import { colors } from './src/util/colors';
import { Conta } from './src/model/Conta';

export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

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

                break;
            case 2:
                console.log(colors.fg.magentastrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.magentastrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                break;
            case 4:
                console.log(colors.fg.magentastrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                break;
            case 5:
                console.log(colors.fg.magentastrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

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