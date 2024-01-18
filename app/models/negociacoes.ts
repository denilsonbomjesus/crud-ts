import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao : Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray -> do propria ts: só permite a leitura do array
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
