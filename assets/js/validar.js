//aca validamos el formulario


//variables.
var id = document.getElementById("id");
var nombre = document.getElementById("nombres");
var apellido = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var monto = document.getElementById("monto");
var error = document.getElementById("error");
error.style.color = "red"

function enviarFormulario(e) {
  e.preventDefault();
  var mensajeError = [];
  //condiciones
  if (id.value === null || id.value === "") {
    mensajeError.push("ingrese el DNI")
  }
  if (nombre.value === null || nombre.value === "") {
    mensajeError.push("ingrese el nombre")
  }
  if (apellido.value === null || apellido.value === "") {
    mensajeError.push("ingrese el apellido")
  }
  if (edad.value === null || edad.value === "") {
    mensajeError.push("ingrese la edad")
  }
  if (monto.value === null || monto.value === "") {
    mensajeError.push("ingrese el monto")
  }
  if (mensajeError.length > 0) {
    error.innerHTML = mensajeError.join(" <br> ");
  }
  else {
    error.innerHTML = mensajeError.join("");// dejo el espacio en blanco asi el div con el mensajeError se borra. 
    saveStudent();
  }
}
$('#formulario').submit(enviarFormulario);