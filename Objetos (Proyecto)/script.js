const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    estado: "disponible",
    listaDeCapitulos: [],
    describirLibro: function(){
        return `Libro titulado ${this.titulo} escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}`;
    },
    agregarCapitulos: function(capitulo){
        this.listaDeCapitulos.push(capitulo);
    },
    quitarCapitulos: function(capitulo){
        const indice = this.listaDeCapitulos.indexOf(capitulo)
        if(indice !== -1){
           this.listaDeCapitulos.splice(indice, 1);
            }
        else{
            console.log('El capitulo no existe');
        }
    }
}

console.log(libro.describirLibro());
libro.agregarCapitulos("Prologo");
libro.agregarCapitulos("Epilogo");
libro.quitarCapitulos("Epilogo")
console.log(libro.listaDeCapitulos);