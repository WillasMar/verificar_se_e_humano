<h1>Verificar se é Humano</h1>

Iniciado repositório

<h2>Diretórios e arquivos iniciais</h2>

<pre>
verificar_se_e_humano
	assets
		css
			style.css
		js
			jquery-3.3.1.min.js
			script.js
	index.html
	README.MD
</pre>

<p>
	<b>obs:</b> Para o funcionamento do sistema é preciso seguir o padrão dos diretórios e arquivos conforme está descrito acima, caso contrário será necessário fazer alterações no fonte.
</p>

<h2>Objetivo</h2> 
<p>
	A idéia do projeto é verificar se é uma pessoa ou não. A primeira verificação será com base em uma operação aritmética, onde que será mostrado uma função matemática e terá que informar o resultado da mesma.
</p>

<h2>Funcionamento</h2>

<h3>Operação Matemática</h3>

<b>1 -</b> Na div 'teste' será gerado um cálculo matemático com as operações aritméticas básicas, sendo adição, subtração, multiplicação e divisão.

<br>

<b>2 -</b> No input 'resultado', o usuário informa o resultado da operação aritmética.

<br>

<b>3 -</b> Ao clicar em verificar será analisado se o que foi informado corresponde ao resultado da operação aritmética. Se sim, entende-se que se trata de uma pessoa.

<h2>Alterações no Projeto</h2>

<p>
	Foi criado a funcionalidade para gerar outra operação matemática.
</p>

<b>index.html - </b>criado div 'gerarOutro' para gerar uma nova função matemática, deixando ela dentro da div 'teste'. Alterado a estrutura da div 'teste' retirando o id, e criado dentro dela uma outra div com esse id.
<br>

<b>style.css - </b>criado estilo para a div 'gerarOutro'.
<br>

<b>script.js - </b>criado a função para a div 'gerarOutro'. 
