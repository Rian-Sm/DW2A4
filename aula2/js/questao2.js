function calcular(){
    
    var tempo;
    var custo;
    var placa = document.getElementById("placa").value;
    var valor = document.getElementById("valor").value;

    document.getElementById("placa").value = "";
    document.getElementById("valor").value = "";
    if (valor >= 1 && valor<1.75){
        custo = 1;
        tempo = 30;
    } else if (valor>1.75 && valor<3.0){
        custo = 1.75;
        tempo = 60;
    } if (valor>3.0){
        custo = 3;
        tempo = 120;
    } else if (valor< 1) {
        custo = -1
    }
    if (custo === -1){  
        document.getElementById("msg_saida").innerHTML = "Valor insuficiente.";
    } else {
        let troco = valor - custo;
        troco = parseFloat(troco.toFixed(2));

        document.getElementById("td_placa").innerHTML = placa;
        document.getElementById("td_valor").innerHTML = valor;
        document.getElementById("td_tempo").innerHTML = tempo;
        
        document.getElementById("msg_saida").innerHTML = "Troco do cliente: "+ troco;

        let carros = {
            'placas': [],
            'tempo': []
        }

        carros["placas"].push(placa);
        carros["tempo"].push(tempo);
        
        localStorage.setItem('carro', JSON.stringify(carros));
        let restore = localStorage.getItem('carro', JSON.stringify(carros));
        
        console.log(restore);
    }
}

var button_action =  document.getElementById("button_submit");
button_action.addEventListener("click", calcular);