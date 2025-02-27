const inputComentarios = document.getElementById("commentInput");
const botonAgregar = document.getElementById("add");
const botonBorrar = document.getElementById("delete");
const tabla = document.querySelector("#caja-comentarios tbody");

botonAgregar.addEventListener("click", function () {
  let textoComentario = inputComentarios.value.trim();
  if (textoComentario !== "") {
    let fecha = new Date();
    let fechaFormateada = `${fecha.getDate().toString().padStart(2, "0")}/${(
      fecha.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    let nuevoComentario = document.createElement("tr");
    nuevoComentario.innerHTML = `<td>${textoComentario}</td><td>${fechaFormateada}</td>`;
    tabla.appendChild(nuevoComentario);
    inputComentarios.value = "";
  } else {
    alert("El campo de comentarios esta vacio");
  }
});

botonBorrar.addEventListener("click", function () {
    if (tabla.lastElementChild) {
      tabla.removeChild(tabla.lastElementChild);
    } else {
      alert("No hay comentarios para borrar.");
    }
});


;
