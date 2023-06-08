const pistas = [
  {
    id: 1,
    nombre: "Pista Babuino",
    imagen: "imagenes/Babuino.jpg",
    precio: "2'5-3'5€/h",
    capacidad: 4,
    cubierta: "Si",
    pared: "cristal",
    descripcion: `Pista con capacidad de hasta cuatro jugadores al aire libre y con
    perfecta iluminación durante todo el día sin que el sol deslumbre,
    e incluso por la noche con focos para jugar a cualquier hora.`,
  },

  {
    id: 2,
    nombre: "Pista Machango",
    imagen: "imagenes/Machango.jpg",
    precio: "2'5-3'5€/h",
    capacidad: 4,
    cubierta: "No",
    pared: "cristal",
    descripcion: `En esta pista pueden jugar cuatro personas, las paredes son de
    cristal y se encuentra al aire libre con buena iluminación tanto
    de día como de noche.`,
  },

  {
    id: 3,
    nombre: "Pista Macaco Japonés",
    imagen: "imagenes/macaco_japones.jpg",
    precio: "2'5-3'5€/h",
    capacidad: 4,
    cubierta: "No",
    pared: "Hormigón",
    descripcion: `Las paredes de esta pista son muros, para aquellos jugadores que
    prefieran este material y quieran jugar al aire libre.`,
  },

  {
    id: 4,
    nombre: "Pista Tití Rojizo",
    imagen: "imagenes/titi-rojizo.jpg",
    precio: "4-5€/h",
    capacidad: 4,
    cubierta: "Sí",
    pared: "Cristal",
    descripcion: `Las paredes de esta pista son muros, para aquellos jugadores que
    prefieran este material y quieran jugar al aire libre.`,
  },

  {
    id: 5,
    nombre: "Pista Chimpancé",
    imagen: "imagenes/chimpance.jpg",
    precio: "4-5€/h",
    capacidad: 4,
    cubierta: "Sí",
    pared: "Hormigón",
    descripcion: `Pista con muros cubierta para que los jugadores que prefieran este
    tipo de paredes no se queden sin ellas en días lluviosos.`,
  },

  {
    id: 6,
    nombre: "Pista Gorila Oriental",
    imagen: "imagenes/gorila_oriental.jpg",
    precio: "3-4€/h",
    capacidad: 2,
    cubierta: "No",
    pared: "Cristal",
    descripcion: `Pista exterior para dos jugadores con paredes de cristal con buena
    iluminación durante todo el día con focos para la noche.`,
  },

  {
    id: 7,
    nombre: "Pista Orangután",
    imagen: "imagenes/orangutan.jpg",
    precio: "3-4€/h",
    capacidad: 2,
    cubierta: "No",
    pared: "Hormigón",
    descripcion: `Situada al aire libre con muros al fondo de cada lado para dos
    personas. Ideal para realizar entrenamientos Individuales.`,
  },

  {
    id: 8,
    nombre: "Pista Macaco Gibraltareño",
    imagen: "imagenes/macaco_gibraltareno.jpg",
    precio: "3-4€/h",
    capacidad: 2,
    cubierta: "Sí",
    pared: "Cristal",
    descripcion: `Pista individual en el interior de nuestras instalaciones para dos
    personas en días de mal tiempo.`,
  }

];

function cargarPistas() {
  pistas.forEach(cargarPista);
}

function cargarPista(pista) {
  $("#form-selector").append(
    `<option value="${pista.id}">${pista.nombre}</option>`
  );
}

function pistaSeleccionada(valuePista) {
  let id = valuePista ? valuePista.value : 1; //parseInt
  let pista = pistas.find((pista) => pista.id == id); //pista = elemento del vector pistas que tenga ID = value selector

  $("#pista-img").attr("src", pista.imagen);
  $("#pista-nombre").html(pista.nombre);
  $("#pista-precio").html("Precio: " + pista.precio);
  $("#pista-capacidad").html("Capacidad: " + pista.capacidad);
  $("#pista-cubierta").html("Cubierta: " + pista.cubierta);
  $("#pista-pared").html("Pared: " + pista.pared);
  $("#pista-descripcion").html(pista.descripcion);
}

cargarPistas();
pistaSeleccionada();
