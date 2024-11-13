const valido = [
  //TODO añadir validación por clase
];

function drag(event) {
    event.preventDefault();
    event.getDataTransfer().setData("text", event.target.id);
    event.target.classList.add("dragging");
    console.log(event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.target.classList.remove("dragging");
}
