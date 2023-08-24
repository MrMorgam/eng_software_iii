class Conta {
    private _numero: string;
    private _saldo: number;


    constructor(numero: string, saldo:number) {
        this._numero = numero;
        this._saldo = saldo;
    }


    public set numero(numero: string) {
        this._numero = numero;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }


    public sacar(valor: number): void {
        if (this.saldo - valor < 0) {
            throw new Error("Saldo insuficiente");
        }

        this.saldo = this.saldo - valor;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public transferir(destinatario: Conta, valor: number): void {
        this.sacar(valor);
        destinatario.depositar(valor);
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}
