/*criando métodos para minha classe */ 


class Conta{
    
    saldo; 

    depositar(valor){
        this.saldo += valor; 
        return valor; 
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor; 
        }

    }

}

const contaLeonardo = new Conta(); 
contaLeonardo.saldo = 3000; 

let valorSacado = contaLeonardo.sacar(250);

console.log(`Você sacou ${valorSacado} Seu saldo agora é: ${contaLeonardo.saldo}`);

let valorDepositado = contaLeonardo.depositar(1000);

console.log(`Valor do deposito: ${valorDepositado} Seu saldo agora é: ${contaLeonardo.saldo}`); 

