
// Programa para instalar aplicaciones
// Abrir
// Cerrar
// Desinstalar
class App{
	constructor(Nombre,CantDes,Puntuacion,Peso){
		this.nombre = Nombre;
		this.descargas = CantDes;
		this.puntuacion=Puntuacion;
		this.peso = Peso;
		this.iniciar = false;
		this.instalar = false;
		this.cerrar		=	false;
	}
	Instalar(){
		if(this.instalar == false){
		let opc = prompt(`Desea instalar la App?? Si = "y" || No = "n"`);
			if(opc=="y"){
			alert(`Se inicio la descarga.`);
			this.instalar = true;
			}else{
				alert(`La App no se va a instalar.`);	
			}
		}
		if(this.instalar == true){
			alert(`La App ya se encuentra instalada`);
		}
		
	}
	Abrir(){

		if (this.instalar == true) {
			if (this.iniciar==false){
			alert(`La App se esta abriendo`);
			this.iniciar = true;
			}else{
			alert(`La App ya se encuentra abierta.`);
			}
		
		}else{
			alert(`La App no se encuntra instalada`);
			}
		}

	Cerrar(){
		if (this.instalar==true) {
				if(this.iniciar == true){
					alert(`La App se esta cerrando`);
					this.iniciar = false;
				}else{
					alert(`La App no se encuntra abierta`);
				}
		}else{
			alert(`La App no se encuentra en su telefono`);
			}
		}
		
	

	Desinstalar(){
		if(this.instalar == true){
			let opc = prompt(`Desea desintalar la App? Si = "y" || No = "n"`);
			if (opc == "y") {
				alert(`La App se esta desintalando...`);
				this.instalar= false;
			}else{
				alert("App va a seguir instalada")
			}
		}else {
			alert(`La App no se encuntra en su telefono`);
		}
	}
	InfoApp(){
		return `
			Nombre:<b>${this.nombre}</b><br>
			Cantidad de descargas:<b>${this.descargas}</b><br>
			Puntuacion:<b>${this.puntuacion}</b><br>
			Peso:<b>${this.peso}</b><br>
		`
	}
}

App1 = new App("Minecraft", "40k", "4/5", "300mb");
App1.Instalar();
App1.Abrir();
App1.Cerrar();
App1.Desinstalar();
document.write(`${App1.InfoApp()}<br>`)