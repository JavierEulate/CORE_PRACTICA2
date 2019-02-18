// Importar modulo Later.js:
const later = require('later');
// Usar zona horaria local:
later.date.localTime();
//Importar modulo events
const EventEmitter = require('events');

class Programador extends EventEmitter {

	constructor(configuracion) {
		super();
		this.configuracion=configuracion;

		this.eventsList=null;
	}


	programar(){

		var horas = new Array(this.configuracion.length)
		var temperaturas =new Array(this.configuracion.length)
		var sched = new Array(this.configuracion.length)

		for (var i = 0; i < this.configuracion.length; i++) {
			horas[i]=this.configuracion[i]['hora'];
			temperaturas[i]=this.configuracion[i]['temperatura'];

			sched[i] = later.parse.text('at '+horas[i]);
			later.setInterval(()=>this.emit('ideal',temperaturas[i]),sched[i])
		}	

	}
}

exports = module.exports = Programador;

//Configuracion temperatura por horas
/*const configuracion =  [{ hora: "07:00",
 temperatura: 22
 },
 { hora: "08:30",
 temperatura: 18
 },
 { hora: "18:00",
 temperatura: 22
 },
 { hora: "23:00",
 temperatura: 20
 }]


const programador = new Programador(configuracion);
programador.programar()
*/