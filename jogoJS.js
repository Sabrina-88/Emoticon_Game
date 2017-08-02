 var timeID = null; //variavel que armazena a chamada da funcao timeout

function iniciaJogo(){

	var url = window.location.search; 
	
	var nivel_jogo = url.replace("?", " ") 
	//alert (nivel_jogo);
	var tempo_segundos = 0;

	if (nivel_jogo == 1){// 1 facil 120 seg
			tempo_segundos = 120;
	}

	if (nivel_jogo == 2){// 2 normal 60 seg
			tempo_segundos = 60;
	}
	
	if(nivel_jogo == 3){// 3 dificil 30 seg
			tempo_segundos = 30;
	}
	
	 // inserinado segundo no span
	 document.getElementById('tempo').innerHTML = tempo_segundos;
 // quantidade de baloes
 var qtde_carinhas = 80;
// chamar a funcao Cria_carinhas
 cria_carinhas(qtde_carinhas);

 //imprimir qtde_oculos
 document.getElementById('qtde_oculos').innerHTML = qtde_carinhas;

 //imprimir qtde_coracao
 document.getElementById('qtde_coracao').innerHTML = 0;

contagem_tempo(tempo_segundos + 1) 

}

function contagem_tempo(segundos){ 
segundos = segundos - 1;
 if (segundos == -1){
 	clearTimeout(timerId); // parar a execução do setTimeout
 	game_over();
 	return false;
 }

  document.getElementById('tempo').innerHTML = segundos;

 timerId = setTimeout("contagem_tempo("+segundos+")", 1000); 
}

 function game_over(){
 	alert("Você perdeu... você não consegui virar todas as carinhas");
 }

 function cria_carinhas(qtde_carinhas){

 for (var i = 1; i <=qtde_carinhas; i++){
 	var carinha = document.createElement("img"); 
 	carinha.src ='imagens/oculos_pequeno.png';
 	carinha.style.margin = '10px';
 	carinha.id = "c"+ i; 
 	carinha.onclick = function(){virar_carinha(this); 
 	}

 	document.getElementById('cenario').appendChild(carinha);
	}
}

function virar_carinha(v){ 

	var id_carinha = v.id;

	document.getElementById(id_carinha).setAttribute("onclick",""); // para evitar que clicando na mesma carinha ainda conte na pontuacao
	document.getElementById(id_carinha).src ='imagens/coracao_pequeno.png';
	
	pontos(-1);
}


function pontos(acao){
//1
	 var qtde_oculos = document.getElementById('qtde_oculos').innerHTML;
	 var qtde_coracao = document.getElementById('qtde_coracao').innerHTML; 
//2
	  qtde_oculos = parseInt(qtde_oculos);
	  qtde_coracao = parseInt(qtde_coracao);

	  qtde_oculos = qtde_oculos + acao;
	  qtde_coracao = qtde_coracao - acao;
//3
	  document.getElementById("qtde_oculos").innerHTML = qtde_oculos ;
	  document.getElementById("qtde_coracao").innerHTML = qtde_coracao ;
	  

	situacao_jogo(qtde_oculos, qtde_coracao);
}

function situacao_jogo(qtde_oculos){
	if(qtde_oculos == 0){
		alert ("Você é rapido! Conseguiu virar todas as carinhas em "+document.getElementById("tempo").innerHTML + " segundos!");
		encerrar_jogo();
	}
}

function encerrar_jogo(){
	clearTimeout(timeId); 
}