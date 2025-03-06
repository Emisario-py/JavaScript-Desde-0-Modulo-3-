const casillaMayusculas = document.getElementById("mayus");
const casillaMinusculas = document.getElementById("minus");
const casillaNumeros = document.getElementById("numbers");
const casillaSimbolos = document.getElementById("symbols");
const rango = document.getElementById("lengthRange");
const cantidad = document.getElementById("lengthValue");
const generar = document.getElementById("btn-gen");
const campoContraseña = document.getElementById("box-password")
const fuerzaContraseña = document.getElementById("indicator")


// Se hace que el valor al lado de la barra y los colores que indican la fuerza de la contraseña cambien cuando esta se desplaza
cantidad.textContent = rango.value;
rango.addEventListener("input", function(){
    cantidad.textContent = rango.value;
    if(rango.value <= 12){
        fuerzaContraseña.style.backgroundColor = "#ff4d4d";
        fuerzaContraseña.textContent = "Mala"
    }else if(rango.value > 12 && rango. value <= 15){
        fuerzaContraseña.style.backgroundColor = "#ffa500";
        fuerzaContraseña.textContent = "Media"
    }else{
        fuerzaContraseña.style.backgroundColor = "#32cd32";
        fuerzaContraseña.textContent = "Buena"
    }
});

generar.addEventListener("click", function (){
    // Se limpia el campo cada que se genera una nueva contraseña
    campoContraseña.textContent = ""
    // Declaracion de los strings con sus respectivos caracteres
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
    let contraseña = "";
    
    
    // Crea un arreglo para almacenar los grupos de caracteres seleccionados
    const grupos = [];
    if (casillaMayusculas.checked) grupos.push(mayusculas);
    if (casillaMinusculas.checked) grupos.push(minusculas);
    if (casillaNumeros.checked) grupos.push(numeros);
    if (casillaSimbolos.checked) grupos.push(simbolos);
    
    // Se valida primero que se seleccione almenos un grupo
    if (grupos.length === 0) {
      alert("Selecciona al menos un tipo de caracter");
    } else {
      for (let i = 0; i < rango.value; i++) {
        // Se escoge aleatoriamente uno de los grupos disponibles
        const grupoSeleccionado = grupos[Math.floor(Math.random() * grupos.length)];
        // Se selecciona un caracter aleatorio dentro del grupo
        const indiceRandom = Math.floor(Math.random() * grupoSeleccionado.length);
        contraseña += grupoSeleccionado.charAt(indiceRandom);
      }
      
      campoContraseña.textContent = contraseña;
    }
});



