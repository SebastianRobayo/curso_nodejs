const fs = require("fs");
require("colors");

const crearArchivo = async (base, listar = true, hasta) => {
  try {
    let salida = "";

    for (i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("===================".rainbow);
      console.log(`    Tabla del ${base}`.red);
      console.log("===================".rainbow);
      console.log(salida.blue);
    } else {
      ("");
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = crearArchivo;
