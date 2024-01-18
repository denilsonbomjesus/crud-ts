export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray -> do propria ts: só permite a leitura do array
    lista() {
        return this.negociacoes;
    }
}
