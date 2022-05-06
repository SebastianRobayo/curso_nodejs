const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    nombre: 1000,
  },
  {
    id: 2,
    nombre: 1500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }

  //   return empleado;
};

const getSalarios = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.nombre;

  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario con id ${id} no existe`);
  }
};

let id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  getSalarios(id, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El empleado: ${empleado}, tiene un salario de: ${salario}`);
  });
});
