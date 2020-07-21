class ListaNegociacao{
    
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){  

        return [].concat(this._negociacoes); 
    }

}

// modelo que cria a lista de negociações 