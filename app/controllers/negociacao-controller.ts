import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao();

        // adiciona ao array negociacoes
        this.negociacoes.adiciona(negociacao);

        // exibe a lista de negociacoes
        console.log(this.negociacoes.lista())
        this.limparFormulario();
        
    }
    
    criaNegociacao(): Negociacao{
        
        // trabalhar com regex -> compilador vai pegar todo mundo que tem '-' e substituir por ','
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        
        // converter para inteiro
        const quantidade = parseInt(this.inputQuantidade.value);
        
        // converter para float
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
