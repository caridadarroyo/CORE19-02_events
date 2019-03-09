const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {

  constructor (array){
	super(); 	
	later.date.localTime();

	array.forEach(({hora, temperatura}) =>{

		 const sched = later.parse.text(`at ${hora}`);
		 later.setInterval(() =>{this.emit('ideal', temperatura)}, sched);
	});

  }


}

exports = module.exports = Programador;
