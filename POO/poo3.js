class Celular{
	constructor(Modelo,color,peso,rdp,rdc,ram){
		this.modelo = Modelo;
		this.color=color;
		this.peso=peso;
		this.ResolucionDePantalla=rdp;
		this.ResolucionDeCamara = rdc;
		this.MemoriaRAM = ram;
		this.onoff=false;
	}
	encenderoapagar(){
		if (this.onoff==false) {
			alert("*Encender*El celular se esta encendiendo :D");
			this.onoff=true;
			alert(`- - - - |Welcome to Andrhone|- - - -`);
			
		}else{
			let opc =prompt("*Apagar*Queres apagar el celular? si || no")
			if (opc=="si"||opc=="SI"||opc=="s"||opc=="S") {
				alert("El celular se esta apagando D:");
				this.onoff=false;
			}else{
				alert("*Cancelar*El celular no se va a apagar O_O");
			}
		}
	}/*encenderoapagar*/
	reiniciar(){
		if(this.onoff==true){
			alert("*Reiniciar* El celular se va a reiniciar");
			this.onoff=false;
			alert("TnT Adios TnT");
			this.onoff=true;
			alert("Hola 7w7r");
			
		}else{
			alert("*Reinicio*(X)_(X) El celular esta apagado (X)_(X)");
		}/**/
	}
	GrabarFoto(){
		if (this.onoff==true) {
			alert("*Abriendo camara*");
			let opc = prompt("Ingresa la opcion deseada... 1 = Foto|| 2 = Grabar Video");
			while (opc != 1&& opc !=2){
			opc = prompt("Reingrese la opcion deseada... 1 = Foto || 2 = Grabar Video");
			}
			if (opc == 1) {
				alert("*Enfocando* *3*... *2*... *1* *Foto*");
			}
			if (opc == 2) {	
				alert("*Enfocando*... *Grabando*");
			}

		}else{
			alert("*Celular apagado*");
		}
	}/*Grabar o sacar foto*/
	Infor(){
		return `
		Modelo: <b> ${this.modelo}</b><br>
		Color: <b> ${this.color}</b><br>
		Peso: <b> ${this.peso}</b><br>
		Resolucion de Pantalla: <b> ${this.ResolucionDePantalla}</b><br>
		Resolucion de Camara: <b> ${this.ResolucionDeCamara}</b><br>
		Memoria RAM: <b> ${this.MemoriaRAM}</b><br>
		`
	}
}
class CelularAltaGama extends Celular{
	constructor(Modelo,color,peso,rdp,rdc,rdce,ram){
		super(Modelo,color,peso,rdp,rdc,ram);
		this.ResolucionDeCamaraExtra = rdce;
	}
	RF(){/*Reconocimiento Facial*/
		alert("Se inicia el Reconocimiento Facial");
	}
	SM(){/*Camara Lenta*/
		alert("Se inicia la camara lenta");
	}
	InforAltaGama(){
		return this.Infor()+`Resolucion de la camamara extra: ${this.ResolucionDeCamaraExtra}
		<br>`
	}
}
xiomi = new CelularAltaGama("Xiomi","Negro", "160g", "5", "Full hd", "2gb", "360p");
Alcatel = new CelularAltaGama("Alcatel","Blanco", "200g", "6'3", "4k", "4gb","1080p"); 


document.write(`${xiomi.Infor()}<br>`)
document.write(`
	${xiomi.InforAltaGama()}<br>
	${Alcatel.InforAltaGama()}<br>	`)
// xiomi.encenderoapagar();
// xiomi.reiniciar();

// xiomi.GrabarFoto();
// xiomi.encenderoapagar();
// -------------------------------
// xiomi.RF();
// xiomi.SM();
