console.log("Entro index.js");

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

let inputTitulo = document.getElementById("inputTitulo");
let inputEstreno = document.getElementById("inputEstreno");
let inputGenero = document.getElementById("inputGenero");
let inputImagen = document.getElementById("inputImagen");
let inputSinopsis = document.getElementById("inputSinopsis");


const btnAgregar = document.getElementById("btnAgregar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinpeliculas");


// let indexEditar = null;
class Pelicula {
    constructor(titulo, estreno, genero, imagen, sipnosis){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;

        function guardarPelicula() {
            let titulo = inputTitulo.value;
            let estreno = inputEstreno.value;
            let genero = inputGenero.value;
            let imagen = inputImagen.value;
            let sinopsis = inputSinopsis.value;
        console.log("titulo:", titulo);
        console.log("estreno:", estreno);
        console.log("genero:", genero);
        console.log("imagen:", imagen);
        console.log("sinopsis:", sinopsis);

        // if (indexEditar == null){
        //     console.log("Agregar pelicula");
        //     peliculas.push(pelicula);
        // } else {
        //     console.log("Editar pelicula");
        // }
        // localStorage.setItem("peliculas", JSON.stringify(peliculas))
        // console.log("Entro funcion guardar pelicula");
        // mostrarPeliculas();
    }

}

}

function borrarTodo(){
    console.log("Entro a borrar todo");
    mostrarPeliculas();
}

function mostrarPeliculas(){
    console.log("Debería nostrar peliculas ...");
}

btnAgregar.addEventListener("click", guardarPelicula);


btnBorrarTodo.addEventListener("click", borrarTodo);