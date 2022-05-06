const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  //   edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 35 }) {
  // desestructuración con función y se le pasa como parametros
  //   const { nombre, apellido, poder, edad = 35 } = heroe; // desestructuración de las constantes de arriba.
  nombre = "Sebastian"; // remplaza el nombre principal
  console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ["deadpool", "Batamn", "Superman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const [h1, h2, h3] = heroes;
const [, , h3] = heroes;

// console.log(h1, h2, h3);
console.log(h3);

// const { nombre, apellido, poder, edad = 35 } = deadpool; // desestructuración de las constantes de arriba.
// console.log(nombre, apellido, poder, edad);
