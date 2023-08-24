class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo:number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
        
    }

    depositar(valor:number): void {
        this.saldo += valor;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);

            return true;
        } else {
            return false;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}
