function PessoaFisica(nome, mail, telefone, cpf, nascimento){
    Pessoa.call(this, nome, mail, telefone);
    this.cpf = cpf;
    this.nascimento = nascimento;
}
PessoaFisica.prototype = Object.create(Pessoa.prototype);

