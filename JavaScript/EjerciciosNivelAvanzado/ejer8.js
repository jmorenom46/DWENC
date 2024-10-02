//Crear clase Tarea con atributos nombre y completada.
let scanner = require("readline-sync");

class Tarea {
  contructor(nombre, completada) {
    this.nombre = nombre;
    this.completada = completada;
  }
}

//Crear un array de tareas y añade metodos para agregar, completar y mostrar tareas pendientes o completadas

let tareas = [
  (Tarea = { nombre: "Tarea1", completada: false }),
  (Tarea = { nombre: "Tarea2", completada: true }),
  (Tarea = { nombre: "Tarea3", completada: false }),
];
do {
  console.log("Tareas: ");
  console.log("1) Agregar");
  console.log("2) Completar tarea");
  console.log("3) Mostrar");
  console.log("4) Salir");
  var opc = Number(scanner.question("Elige una opcion: "));
  switch (opc) {
    case 1: {
      let nom = scanner.question("Introduce el nombre de la tarea: ");
      let comp = scanner.keyInYN("Tarea completada? ");
      tareas.push((Tarea = { nombre: nom, completada: comp }));
      console.log(comp);
      break;
    }

    case 2: {
      let nom = scanner.question("Introduce el nombre de la tarea que quieras cambiar: ");
      break;
    }
    case 3: {
      tareas.forEach((element) => {
        console.log(element);
      });

      break;
    }
    case 4:{
      break;
    }
    default:{
      console.log("Elija un numero del 1 al 4");
      break;
    }

  }
} while (opc != 4);
