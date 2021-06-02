function Funcionario(nome, mail, telefone, cpf, nascimento, departamento){
    PessoaFisica.call(this, nome, mail, telefone, cpf, nascimento);
    this.departamento = departamento;
}
Funcionario.prototype = Object.create(PessoaFisica.prototype);