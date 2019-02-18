var path = require('path');


const Habitacion = require(path.resolve('E:/Documents/Universidad/3º/CORE/GITHUB/CORE19-02_events','habitacion.js'));
const Climatizador = require(path.resolve('E:/Documents/Universidad/3º/CORE/GITHUB/CORE19-02_events','climatizador.js'));
const Termostato = require(path.resolve('E:/Documents/Universidad/3º/CORE/GITHUB/CORE19-02_events','termostato.js'));
const Programador = require(path.resolve('E:/Documents/Universidad/3º/CORE/GITHUB/CORE19-02_events','programador.js'));


// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

//Configuracion temperatura por horas
const configuracion =  [{ hora: "07:00",
 temperatura: 22
 },
 { hora: "08:30",
 temperatura: 18
 },
 { hora: "20:41",
 temperatura: 40
 },
 { hora: "21:00",
 temperatura: 25
 }]

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

const programador = new Programador(configuracion);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

programador.on('ideal',(temp_ideal) => termostato.indicarTemperaturaIdeal(temp_ideal));

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

programador.programar()
