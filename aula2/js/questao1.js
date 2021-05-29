var total = 0;

function atualizar_lista() {

    var tabelaLinha = document.createElement("tr")
    var tdDescricao = document.createElement("td");
    var tdValor = document.createElement("td");

    var tbody = document.getElementById("tabela_corpo");

    var descricao = document.getElementById("descricao").value;
    var valor = document.getElementById("valor").value;

    total = Number(total) + Number(valor);

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    
    
    let text_descricao = document.createTextNode(descricao);
    let text_valor = document.createTextNode("R$ " + valor);
   
    document.getElementById("valorTotal").innerHTML = "R$ " + total

    tdDescricao.appendChild(text_descricao);
    tdValor.appendChild(text_valor);

    tabelaLinha.appendChild(tdDescricao);
    tabelaLinha.appendChild(tdValor);
    
    tbody.appendChild(tabelaLinha);

}
var button_action =  document.getElementById("button_submit");
button_action.addEventListener("click", atualizar_lista);