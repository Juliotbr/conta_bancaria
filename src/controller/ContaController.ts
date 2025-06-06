import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
//    listarTodas(): void {
//        throw new Error("Method not implemented.");
//    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + 
            " foi criada com sucesso!", colors.reset);
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    

    // métodos auxiliares
    // gerar numero da conta
    public gerarNumero(): number {
        return ++ this.numero;
    }
}