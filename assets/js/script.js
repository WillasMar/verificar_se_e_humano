$(function(){
	var resultado = 0;

	gerarTeste();

	$('#testeHumano').bind('submit',function(e){
		e.preventDefault();

		if($('#resultado').val() != ''){
			var verificar = parseInt($('#resultado').val());

			if(verificar == resultado){
				alert('É humano!');
			}else{
				alert('Não é humano!');
			}
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