class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data'); 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacao = new ListaNegociacao(); 

        this._negociacoesView = new NegociacoesView($('#negociacoesView')); 
        this._negociacoesView.update(this._listaNegociacao);

        this._mensagem = new Mensagem(); 
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);


    }
    
    adiciona(event){
        
        event.preventDefault(); 
        this._listaNegociacao.adiciona(this._criarNegociacao());
        this._negociacoesView.update(this._listaNegociacao);
        this._mensagem.texto = "Adicionado com sucesso!"
        this._mensagemView.update(this._mensagem)

        this._limparFormulario();     
        }
        
    _criarNegociacao(){
            return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value, 
                this._inputValor.value
         );
    }

    _limparFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1; 
        this._inputValor.value = 0.0; 
        this._inputData.focus(); 
    }


}