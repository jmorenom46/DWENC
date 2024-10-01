//Crear clase Tarea con atributos nombre y completada.

class Tarea {
  contructor(nombre, completada) {
    this.nombre = nombre;
    this.completada = completada;
  }
}

//Crear un array de tareas y añade metodos para agregar, completar y mostrar tareas pendientes o completadas

const tarea1 = new Tarea("Tarea1", false);
const tarea2 = new Tarea("Tarea2", true);
const tarea3 = new Tarea("Tarea3", false);
const tareas = [tarea1, tarea2, tarea3];
