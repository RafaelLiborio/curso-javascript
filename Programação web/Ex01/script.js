function eventoClick(){
    //alert("Acionou um Evento")
    document.body.style.background = "yellow";
}

function eventoDblClick(){
    document.body.style.background = "green";
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"
    div.style.color = "white";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "salmon"
    div.style.color = "black"
}