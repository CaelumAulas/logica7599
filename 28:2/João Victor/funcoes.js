       function converteFloat(mensagem){
                var numero = parseFloat(prompt(mensagem).replace(",","."));
                return numero;
        }

        function formataDecimal(decimal){
                decimal = decimal.toFixed(2).replace(".",",");
                return decimal;
        }

	function calculaIMC(peso,altura){
		var imc = (peso/(altura*altura));
		if(imc < 18.5){
			document.write("<br>");
			document.write("Você está desnutrido");
		}
		else if(imc >= 35){
			document.write("<br>");
			document.write("Você está obesão!");
		}
		else{
			document.write("<br>");
			document.write("Você tá saudavél, pode comer um bacon!");
		}
		return imc;
	}
	function formataTelefone(telefone){
		return "(" + telefone.substring(0,2) + ")" + telefone.substring(2,7) + "-" + telefone.substring(7);
	}

	function calculaData(dataNascimento){
		var dataSystem = new Date();
		var diaAtual = dataSystem.getDate();
		var mesAtual = dataSystem.getMonth()+1;
		var anoAtual = dataSystem.getFullYear();
		var dataNascSeparada = dataNascimento.split("/");
//		var dataAtualSeparada = dataAtual.split("/");
		var diaNascimento = parseInt(dataNascSeparada[0]);
//		var diaAtual = parseInt(dataAtualSeparada[0]);
		var mesNascimento = parseInt(dataNascSeparada[1]);
//		var mesAtual = parseInt(dataAtual.substring(3,5));
		var anoNascimento = parseInt(dataNascSeparada[2]);
//		var anoAtual = parseInt(dataAtual.substring(6,10));

		if(mesAtual == mesNascimento && diaNascimento < diaAtual || mesNascimento > mesAtual){
			return (anoAtual-anoNascimento)-1;
		}
		else {
			return anoAtual-anoNascimento;
		}
	}
		//else if (mesAtual < mesNascimento){
		//	return (anoAtualF-anoNascimentoF)-1;
		//} else {
		//	return anoAtualF-anoNascimentoF;
		//}


	function submit(){
		var imagem = "<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUXFxgXFRgYFxcXGBgYGBcXGBcXGBcYHSggGBolHRUVIT$'";
		var nome = document.getElementById("nome").value;
		var sexo = document.getElementById("sexo").value;
        	var idade = document.getElementById("idade").value;
		var numeroDeMatricula = Math.round(Math.random()*100);
		var objetivo = document.getElementById("objetivo").value;
        	var plano = document.getElementById("plano").value;
         	var peso = document.getElementById("peso").value;
        	var altura = document.getElementById("altura").value;
        	var imc = calculaIMC(peso,altura);
        	var imc = document.getElementById("imc").value;
        	var telefone = document.getElementById("telefone").value;
        	var dataNascimento = prompt("Qual a data de seu nascimento?");

     		document.write(imagem);
	        document.write("<br>");
        	document.write("Seu nome é: " + nome);
        	document.write("<br>");
	        document.write("Sua idade é " + calculaData(dataNascimento) + " anos");
	        document.write("Seu ID é: " + numeroDeMatricula);
	        document.write("<br>");
        	document.write("Seu objetivo é: " + objetivo);
	        document.write("<br>");
	        document.write("Seu plano é: " + plano);
	        document.write("<br>");
	        document.write("Seu peso é: " + formataDecimal(peso));
	        document.write("<br>");
	        document.write("Sua altura é: " + formataDecimal(altura));
	        document.write("<br>");
       		document.write("Seu IMC é: " + Math.round(imc));
       	 	document.write("<br>");
	        document.write("Seu telefone é: " + formataTelefone(telefone));
}

