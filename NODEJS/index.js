// const { parImpar, elevado, cuadrado, saludar } = require('./calculadora')
// const { mcm } = require('./mcm')
// const { multiplicacion } = require('./operaciones/multiplicacion')
// const { suma } = require('./operaciones/suma')

// console.log(suma(5, 6))
// console.log(multiplicacion(8, 4))
// console.log(mcm(2, 1))
// console.log(parImpar(8))
// console.log(elevado(2, 5))
// console.log(cuadrado(5))
// console.log(saludar('juan'))

//const moment = require('moment');
//const isPrime = require('prime-number');

//moment.locale('es');
//console.log(
//moment().format(
//'YYYY [hoy es:] dddd DD [de] MMMM [de] YYYY [y son las] h:mm:ss a [eso poh wn]'
//)
//);

//console.log(isPrime(17)); // false

const csWriter = require('csv-writer')

const arreglo = [
  { name: 'jhon', age: 28, city: 'nw york', work: 'Analyst' },
  { name: 'Susan', age: 43, city: 'chicago', work: 'pilot' },
  { name: 'jUan', age: 60, city: 'San Diego', work: 'Computer' },
  { name: 'Andrea', age: 55, city: 'Washinton', work: 'politico' },
  { name: 'ToriVega', age: 15, city: 'san diego', work: 'programador web' },
  { name: 'johana', age: 55, city: 'cerro Moreno', work: 'actriz y cantante' }


]

const crearArchivoCSV = csWriter.createObjectCsvWriter({
  path: 'archivo.csv',
  header: [
    { id: 'name', title: 'Nombre' },
    { id: 'age', title: 'Edad' },
    { id: 'city', title: 'Cargo' },
    { id: 'work', title: 'trabajo' }
  ]

})

crearArchivoCSV.writeRecords(arreglo)
  .then(() => console.log('archivo creado oki'))
  .catch((error) => console.log('archivo erroneo', error))