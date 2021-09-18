const sumar = (n1, n2)=>{
	return parseInt(n1)+parseInt(n2)
}
const restar = (n1, n2)=>{
	return parseInt(n1)-parseInt(n2)
}
const multiplicar = (n1, n2)=>{
	return parseInt(n1)-parseInt(n2)
}
const dividir = (n1, n2)=>{
	return parseInt(n1)-parseInt(n2)
}
let n1 = prompt("ingresa el valor del N°1. . .")
let n2 = prompt("ingresa el valor del N°2. . .")
alert("Ingresa la opcion deseada")
opc = prompt(`1 = sumar || 2 = restar || 3 = multiplicar || 4 = dividir`)
while (opc != 1 && opc !=2 && opc !=3 && opc !=4 ){
	alert("ingresaste un valor incorrecto, vuelva a intentarlo...")
	opc = prompt(`1 = sumar || 2 = restar || 3 = multiplicar || 4 = dividir`)
}
if (opc == 1){
document.write(sumar(n1,n2))
}else if (opc == 2){
document.write(restar(n1,n2))
}
else if (opc == 3){
document.write(multiplicar(n1,n2))
}else {
	if(n2 == 0){
		alert("El valor ingresado del N2 es igual a 0, no se puede dividir por 0")
		while (n2 == 0){n2 = prompt("Ingresa otro valor que no sea 0")}
			document.write(dividir(n1,n2))
	}
	else{
		document.write(dividir(n1,n2))
	}
}
