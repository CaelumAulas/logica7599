function imprimeEmBaixo(texto) {
    var p = document.createElement("p");
    p.innerHTML = texto;
    document.body.appendChild(p)
}

function salva(nome, objeto) {
    const string = JSON.stringify(objeto)
    localStorage.setItem(nome, string)    
}

function pega(nome) {
    const string = localStorage.getItem(nome)
    const obj = JSON.parse(string)
    return obj
}