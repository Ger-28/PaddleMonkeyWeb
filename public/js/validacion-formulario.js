function validar_personas(personas) {
  return personas >= 2;
}

function validar_nombre(nombre) {
  let valido = true;
  if (nombre.length < 3) {
    valido = false;
  } else {
    for (let i = 0; i < nombre.length; i++) {
      if ($.isNumeric(nombre[i])) {
        valido = false;
      }
    }
  }

  return valido;
}

function validar_apellidos(apellidos) {
  let valido = true;
  if (apellidos.length < 3) {
    valido = false;
  } else {
    for (let i = 0; i < apellidos.length; i++) {
      if ($.isNumeric(apellidos[i])) {
        valido = false;
      }
    }
  }

  return valido;
}

function validar_telefono(telefono) {
  let valido = true;
  if (telefono.length != 9) {
    valido = false;
  } else {
    for (let i = 0; i < 9; i++) {
      if (!$.isNumeric(telefono[i])) {
        valido = false;
      }
    }
  }

  return valido;
}

function validar_DNI(DNI) {
  let valido = true;
  let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  if (DNI.length != 9) {
    valido = false;
  }
  if (valido) {
    for (let i = 0; i < 8; i++) {
      if (!$.isNumeric(DNI[i])) {
        valido = false;
      }
    }
  }
  if (valido) {
    if ($.isNumeric(DNI[8])) {
      valido = false;
    }
  }
  if (valido) {
    let numeros = DNI.substr(0, DNI.length - 1);
    let resto_division = parseInt(numeros % 23);
    if (DNI[8].toUpperCase() != letras[resto_division]) {
      valido = false;
    }
  }
  return valido;
}

function validar_email(email) {
  let valido = true;
  if (email.split("@").length != 2) {
    valido = false;
  } else {
    if (email.split("@")[0].split(" ").length > 1) {
      valido = false;
    } else {
      if (email.split("@")[1].split(".").length != 2) {
        valido = false;
      } else {
        if (email.split("@")[1].split(".")[0].split(" ").length > 1) {
          valido = false;
        }
        if (email.split("@")[1].split(".")[1].split(" ").length > 1) {
          valido = false;
        }
      }
    }
  }

  return valido;
}

function validar_fecha(fecha) {
  let valido = true;
  let hoy = new Date();
  if (Date.parse(fecha) < hoy || fecha == "") {
    valido = false;
  }
  return valido;
}

function validar_horas(hora1, hora2) {
    // 20:20 => 2020
  let hora1int = parseInt(hora1[0]) * 1000 + parseInt(hora1[1]) * 100 + parseInt(hora1[3]) * 10 + parseInt(hora1[4]);
  let hora2int = parseInt(hora2[0]) * 1000 + parseInt(hora2[1]) * 100 + parseInt(hora2[3]) * 10 + parseInt(hora2[4]);
  return hora2int - hora1int >= 100;
}

function validacion_formulario() {
  let valido = true;
  let cadena = "Error: ";

  if (!validar_personas($("#asistentes").val())) {
    valido = false;
    cadena += "<br>✖ Debe haber, al menos, dos asistentes.";
  }

  if (!validar_nombre($("#nombre").val())) {
    valido = false;
    cadena += "<br>✖ Nombre ha de ser mayor de 2 caracteres no numéricos.";
  }

  if (!validar_apellidos($("#apellidos").val())) {
    valido = false;
    cadena += "<br>✖ Apellidos debe ser mayor de 2 caracteres no numéricos.";
  }

  if (!validar_telefono($("#tlf").val())) {
    cadena += "<br>✖ Formato del teléfono incorrecto";
    valido = false;
  }

  if (!validar_DNI($("#dni").val())) {
    valido = false;
    cadena += "<br>✖ El DNI introducido es incorrecto.";
  }

  if (!validar_email($("#email").val())) {
    valido = false;
    cadena += "<br>✖ La dirección de email es incorrecta.";
  }

  if (!validar_fecha($("#selector-fecha").val())) {
    cadena += "<br>✖ La fecha debe ser posterior a la de hoy.";
    valido = false;
  }

  if (!validar_horas($("#selector-horai").val(), $("#selector-horaf").val())) {
    cadena +=
      "<br>✖ La hora de finalización debe ser, al menos, una hora posterior a la de inicio.";
    valido = false;
  }
  if (valido) {
    window.alert("Los datos son correctos");
    postReserva();
  } else $("#mensaje-error").html(cadena);
  return valido;
}
