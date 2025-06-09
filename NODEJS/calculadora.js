




const parImpar = (n) => {
if(isNaN(n)) return 'X entrada no valida';
 return `el numero ${n} es ${n % 2 === 0 ? 'par' : 'impar'}`;
}

const elevado = (x, y) => {
return  `el nummero ${x} elevado a ${y} es ${x ** y}`;
 }

const cuadrado = (x) => {
    return `el cuardrado de ${x} es ${x ** 2}`;
}

const saludar = (nombre) => {
return `hola ${nombre}, eres bienvenido`;
} 
module.exports = { parImpar, elevado,  cuadrado, saludar }