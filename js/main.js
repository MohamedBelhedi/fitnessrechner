let vm="Fahrrad;"

$(document).ready(function() {
	// when document loaded:

	$("#eingabe").keyup(function(evt) {
	
		// let key = evt.which;
	});

	$("#button").mouseup(function() {

		if($("#eingabe").val()===""){
			alert('Bitte gib eine Zahl ein Danke')
		


		}else{

		


		if(vm=="Fahrrad"){
			fahrradberechnung()
		}
		if(vm=="zu Fuß"){
			zufussberechnung()
		}
		
		if(vm=="Auto"){
			Autoberechnung()
		}
		
	}

	});

	$(".auswahl").mouseup(function(){
		$(".auswahl").css("background-color","rgb(108,129,169)")
		$(this).css("background-color","rgb(25,53,134")
		vm=$(this).html()
	})

	function fahrradberechnung(){
		let km=$("#eingabe").val();
		let zeit_min= km*3;
		let kcal=7*zeit_min;
		$("#ausgabe").html("Dauer"+zeit_min+"min<br> Kalorien"+kcal);
	}
	function zufussberechnung(){
		let km=$("#eingabe").val();
		let zeit_min= km*12;
		let kcal=4*zeit_min;
		$("#ausgabe").html("Dauer"+zeit_min+"min<br> Kalorien"+kcal);
	}
	function Autoberechnung(){
		let km=$("#eingabe").val();
		let zeit_min= km*2;
		let kcal=1*zeit_min;
		$("#ausgabe").html("Dauer"+zeit_min+"min<br>Kalorien"+kcal);
	}

});