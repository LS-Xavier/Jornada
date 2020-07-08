/* Criando minha primeira classe e instânciando meu primeiro objeto */ 

class Pessoa {
    nome; 
    idade; 
    sexo; 
}

const pessoa1 = new Pessoa;

pessoa1.nome = "Leonardo";
pessoa1.idade = 24;
pessoa1.sexo = "M"; 

console.log(pessoa1);

//criando outra classe Produto

class Produto {
    nome; 
    quantidade; 
    valor; 
}

const produto1 = new Produto;

produto1.nome = "Arroz"
produto1.quantidade = "2"
produto1.valor = "4.50" //em formato de string para não dar erro por enquanto 

console.log(produto1)
