export class Conta{

    _saldo = 30000; 
    
    depositar(valor){
        if(valor<=0){
            return; 
        } 
        this._saldo += valor; 
        return valor; 
    }

    sacar(valor){
        if(valor>this._saldo){
            return; 
        }
        this._saldo -= valor
        return valor; 
    }

    

}