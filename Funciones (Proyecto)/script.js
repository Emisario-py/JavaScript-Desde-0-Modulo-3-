let librosLeidos = []

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    console.log(librosLeidos)
}

agregarLibro("Don quijote");
agregarLibro("Mis zonas erroneas");
agregarLibro("El principito");
agregarLibro("100 años de soledad");
mostrarLibrosLeidos();