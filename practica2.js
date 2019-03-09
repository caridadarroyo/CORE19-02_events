
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));


// Configurar la temp ideal con la clase Programador:
termostato.indicarTemperaturaIdeal(20);
var array = [{hora: "02:00", temperatura : 18},{hora : "07:00", temperatura : 23}, {hora: "12:30", temperatura : 19},{hora: "19:00", temperatura : 22 }];
const programador = new Programador(array);
programador.on('ideal', temperatura =>{
				termostato.indicarTemperaturaIdeal(temperatura);
		})

// Encender el termostato:
termostato.encender();

