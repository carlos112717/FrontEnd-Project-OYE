/* Funciones de validación de formularios */

function validarRegistro(formulario) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formulario.correo.value.trim().length == 0) {
        alert("Debe ingresar un Email para continuar");
        return false;
    } else if (!re.test(formulario.correo.value)) {
        alert("Email inválido");
        return false;
    }

    if (formulario.contraseña.value.trim().length == 0) {
        alert("Debe ingresar una contraseña para continuar");
        return false;
    } else if (formulario.contraseña.value.trim().length < 9) {
        alert("En contraseña debe ingresar más de 8 caracteres");
        return false;
    }

    if (formulario.contraseña.value != formulario.confirmacion.value) {
        alert("Contraseña no coincide");
        return false;
    }
    if (formulario.genero.value == "") {
        alert("Debe seleccionar un género para continuar");
        return false;
    }

    if (formulario.edad.value == "") {
        alert("Debe seleccionar un rango de edad para continuar");
        return false;
    }

    if (!formulario.terminos.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }

    return true;
}

function validarLogin(formulario) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formulario.correo.value.trim().length == 0) {
        alert("Debe ingresar un mail para continuar");
        return false;
    } else if (!re.test(formulario.correo.value)) {
        alert("Email inválido");
        return false;
    }

    if (formulario.contraseña.value.trim().length == 0) {
        alert("Debe ingresar una contraseña para continuar");
        return false;
    } else if (formulario.contraseña.value.trim().length < 9) {
        alert("Debe ingresar más de 8 caracteres");

        return false;
    }

    return true;
}
