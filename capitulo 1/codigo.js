/*3 chicos de 23 anios perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada eetante con su respectivos helado.
Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... como podemos ayudarlo??

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD
Los precios de helados osn los siguientes
Palito de helado de agua: $0,6 USD
Palito de helado de crema: $1 USD
Bombon Helado marca heladix: $1.6 USD
Bombon helado marca heladovich: $ 1.7 USD
Bombon helado marca helardo: $ 1.8 USD
Bombon helado con confites: $ 2,9 USD
Pote de 1/4 KG : $2.9USD
		Se pide que:
			Pedir que ingresen el monto que tienen y mostrarles el helado
			si hay 2 o mas con el mismo precio mostrar ambos.
			cofla quiere saber cuanto es el vuelto

*/
	DineroCofla = prompt("Cuanto dinero tiene Cofla?");
	DineroRoberto = prompt("Cuanto dinero tiene Roberto?");
	DineroPedro = prompt("Cuanto dinero tiene Pedro?");

	if (DineroCofla >=0.6&&DineroCofla<1){
		alert("Cofla comprate el helado de agua");
	}

	else if (DineroCofla >= 1 &&DineroCofla<1.6){
		alert("Cofla comprate el helado de crema");
	}
	else if (DineroCofla >=1.6&&DineroCofla<1.7){
		alert("Cofla comprate el helado de heladix");
	}
	else if (DineroCofla >=1.7&&DineroCofla<1.8){
		alert("Cofla comprate el helado de heladovich");
	}
	else if (DineroCofla >=1.8&&DineroCofla<2.9){
		alert("Cofla comprate el helado de helardo");
	}
	else if (DineroCofla >=2.9){
		alert("Cofla Comprate el helado con confites o el pote de 1/4 ");
	}	else {
		alert("Lo siento, no te alcanza para ningun helado")
	}



		if (DineroRoberto >=0.6&&DineroRoberto<1){
		alert("Roberto comprate el helado de agua");
	}

	else if (DineroRoberto >= 1 &&DineroRoberto<1.6){
		alert("Roberto comprate el helado de crema");
	}
	else if (DineroRoberto >=1.6&&DineroRoberto<1.7){
		alert("Roberto comprate el helado de heladix");
	}
	else if (DineroRoberto >=1.7&&DineroRoberto<1.8){
		alert("Roberto comprate el helado de heladovich");
	}
	else if (DineroRoberto >=1.8&&DineroRoberto<2.9){
		alert("Roberto comprate el helado de helardo");
	}
	else if (DineroRoberto >=2.9){
		alert("Roberto Comprate el helado con confites o el pote de 1/4 ");
	}	else {
		alert("Lo siento, no te alcanza para ningun helado")
	}



		if (DineroPedro >=0.6&&DineroPedro<1){
		alert("Pedro comprate el helado de agua");
	}

	else if (DineroPedro >= 1 &&DineroPedro<1.6){
		alert("Pedro comprate el helado de crema");
	}
	else if (DineroPedro >=1.6&&DineroPedro<1.7){
		alert("Pedro comprate el helado de heladix");
	}
	else if (DineroPedro >=1.7&&DineroPedro<1.8){
		alert("Pedro comprate el helado de heladovich");
	}
	else if (DineroPedro >=1.8&&DineroPedro<2.9){
		alert("Pedro comprate el helado de helardo");
	}
	else if (DineroPedro >=2.9){
		alert("Pedro Comprate el helado con confites o el pote de 1/4 ");
	}	else {
		alert("Lo siento, no te alcanza para ningun helado")
	}