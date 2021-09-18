array1 = ["maria 3 ", "josefa 4", "robert 5"];
array2 = ["pedro 1", "marcelo 2", array1, "Pepe 6"];
// forhola:
for (let i in array2){
	if (i == 2){
		for(let j of array1){
				// break forhola;
				// continue

				document.write(j + `<br>`);
				// break
					
			}

	}else {
		document.write(array2[i]+`<br>`);
	}
}
	
//  Explico lo que hace
//	linea 1 y linea 2 se agregan array los valores que contienen el array
//	linea 3	Se inicia un for con un in... Que hace el in??
//	El in resumiendolo... Muestra el indice pero al tocar otro array me muestra el contenido de dicho array pero en cadena...
// entonces la compudora lo mostraria asi... pedro <br>,Marcelo <br>, maria,josefa,roberta <br> (El br lo cuento como salto del linea)
// Linea 4 cuando el for de in a array2 valga 2 actua el if, osea cuando la i valga 2
 // y me ejecuta el for de OF, que lo que hace es mostrarme el contenido del array actual
 // si te das cuenta en la linea 10 el document.write es (j + br), en la linea 16 tenes que aclarar el array + el inidice actual para que te muestre el contenido de valor actual de array con ayuda del indice 