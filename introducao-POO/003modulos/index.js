/* Separando meu código em modulos */ 

/* importando classses para o meu modulo principal */ 

import {Cliente} from "./cliente.js"
import {Conta} from "./conta.js"


const cliente1 = new Cliente();
cliente1.nome = "Leonardo";
cliente1.idade = 24;
cliente1.cpf = 938483; 

const contaLeonardo = new Conta(); 
contaLeonardo.saldo = 3000; 

console.log(cliente1, contaLeonardo)