function PessoaJuridica(nome, mail, telefone, cnpj, nomeFantasma){
    Pessoa.call(this, nome, mail, telefone);
    this.cnpj = cnpj;
    this.nomeFantasma = nomeFantasma;
}
PessoaJuridica.prototype = Object.create(Pessoa.prototype);