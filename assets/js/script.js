$(function(){
	var resultado = 0;

	gerarTeste();

	$('#gerarOutro').bind('click',function(){
		gerarTeste();
		document.getElementById('resultado').focus();
	});

	$('#testeHumano').bind('submit',function(e){
		e.preventDefault();

		if($('#resultado').val() != ''){
			var verificar = parseInt($('#resultado').val());

			if(verificar == resultado){
				alert('É humano!');
			}else{
				alert('Não é humano!');
			}
		}else{
			alert('Por favor, é preciso informar o resultado da operação matemática!');
		}

		gerarTeste();
		$('#resultado').val('');
		document.getElementById('resultado').focus();
	});

	function gerarTeste(){
		var n1 = Math.floor(Math.random()*100);
		var n2 = Math.floor(Math.random()*100);
		var op = Math.floor(Math.random()*4);
		var operacoes = ['+','-','x','/'];
		var operacao = operacoes[op];
		var teste = n1+' '+operacoes[op]+' '+n2;
		
		switch(operacao){
			case '+':
				resultado = n1 + n2;
				break;
			case '-':
				resultado = n1 - n2;
				break;
			case 'x':
				resultado = n1 * n2;
				break;
			case '/':
				resultado = n1 / n2;
				break;
		}

		$('#teste').html(teste);
	}

});