// Función tradicional
function sumer(a, b) {
  return a + b;
}

console.log(sumer(5, 10));

// Función de flecha
const sumar = (a, b) => {
  return a + b;
};

// Función de flecha sencilla, para nada más ejecutar una unica linea,
//tambien se puede sin parametros
const sumar1 = (a, b) => a + b;

console.log(sumar(5, 10));
console.log(sumar1(5, 10));
