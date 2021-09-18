"use strict";
const comprar = (n) =>{
	let cant = prompt(`Dinero de ${n}`);
	
	if (cant >=0.6 && cant <1) return (`${n}: Puede comprar el helado de agua`); 
	if(cant >=1 && cant < 1.6) return (`${n}: puede comprar el helado de crema`);
	if(cant >=1.6 && cant <1.7) return (`${n}: puede comprar el heladix`);
	if(cant >=1.7 && cant <1.8) return (`${n}: puede comprar el heladovich`);
	if(cant >=1.8 && cant <2.9) return (`${n}: puede comprar el helardo`);
	if(cant >=2.9) return (`${n}: puede comprar el helado de confites op ete de 1/4kg`);
	else return(`${n}:No puede comprar nada`)
}
	console.log(comprar("Cofla"));
	console.log(comprar("Pedro"));
	console.log(comprar("Roberto"));
	
// Explico lo que hice
//  En la linea 2 Realizo un