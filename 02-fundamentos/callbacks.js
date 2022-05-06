// Ejemplo de callback
// setTimeout(function () {
//   console.log("Hola Mundo");
// }, 1000);

const getUsuarioByID = (id, callback) => {
  const user = {
    id,
    nombre: "Sebatian",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUsuarioByID(97, (usuario) => {
  console.log(usuario);
});
