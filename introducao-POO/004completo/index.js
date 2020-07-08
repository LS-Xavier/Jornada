import {Cliente} from "./cliente.js"
import {Conta} from "./conta.js"

const cliente1 = new Cliente("leonardo", 233241413, 24); 
const contaLeonardo = new Conta(); 

const valorDeposito = contaLeonardo.depositar(5000); 
console.log(`Valor do deposito: ${valorDeposito} Seu saldo agora é: ${contaLeonardo}`);

const valorSacado = contaLeonardo.sacar(5000); 
console.log(`O valor sacado foi: ${valorSacado} Seu saldo agora é: ${contaLeonardo}`);

