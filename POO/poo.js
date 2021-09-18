class animal{
	constructor(especie,edad,color){
		this.especie=especie;
		this.edad=edad;
		this.color=color;
		this.all=`Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
	}
	
	verInfo(){
	// 
		document.write(this.all +`<br>`)
	}

}

let perro = new animal ("perro", 2, "verde")
let gato = new animal ("gato", 5, "gris")
perro.verInfo();
// 
gato.verInfo();

