function formataNumeroDecimal(numero) {
    var valorFormatado = numero.toFixed(2).replace(".",",");
    return valorFormatado;
}

function pegaEFormataNumeroDecimal(frase) {
    return parseFloat(prompt(frase).replace(",",".").replace("o","0").replace("O","0"));
}

function calculaEVerificaIMC(peso, altura) {
    var imc = peso/(altura*altura);
    if (imc < 18.5) {
        document.write("<br>O aluno está desnutrido");
    } else if (imc >= 35) {
        document.write("<br>O aluno está obeso");
    } else {
        document.write("<br>O aluno está saudável!");
    }
    return imc;
}

function calculaIdade(dataNascimento,dataAtual) {
    var dataNascSeparada = dataNascimento.split("/");
    var diaNasc = parseInt(dataNascSeparada[0]);
    var mesNasc = parseInt(dataNascSeparada[1]);
    var anoNasc = parseInt(dataNascSeparada[2]);
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth()+1;
    var anoAtual = dataAtual.getFullYear();
    var idade = anoAtual-anoNasc;
        //se mes nascimento menor que mes atual, mantem valor da idade 

    if (mesNasc>mesAtual || (mesNasc==mesAtual && diaNasc>diaAtual)) {
        idade=idade-1;
    } 
    //se mesNasc==mesAtual && diaNasc<=diaAtual, mantem valor da idade
    return idade; 
}