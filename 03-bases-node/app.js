// Tablas de multiplicar
const crearArchivo = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

// Recibir argumentos por consola
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(process.argv);
// console.log(argv);

// console.log("base: yargs", argv.b);

// const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.green, "creada".rainbow))
  .catch((err) => console.log(err));
