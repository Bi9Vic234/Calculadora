var operacion = "";
var primernumero = "";    //Es el primer dato de la operacion a realizar
var nuevaoperacion = false;  //Para remplazar un operador, al presionar un nuevo operador. Si presiona X luego /, luego +... Se quedara el ultimo dato.



function registrarEnPantalla(numero){
	if (pantalla.value.includes(".") && numero == ".")  //Si al string ya tiene un punto, no lo agrega de nuevo.
	}else {
		pantalla.value = pantalla.value + numero;  //Si no tiene punto, lo agrega... Es para evitar capturar algo como 1.520.2.3.2.2
	}
}

function masmenos(signo){
	if (pantalla.value.includes("-") ) {  //Se convierte a negativo, si ya es negativo, se convierte a positivo.
		pantalla.value = pantalla.value.substr(1);
	}else {
		pantalla.value = signo + pantalla.value;
	}
}

function borrar(borrado){
	if (borrado == "reset") {  //Limpia la pantalla.
		pantalla.value = "";
		pantalla.placeholder = "";
	}
	if (borrado == "supr") {   //Borra solo el ultimo dato del string.
		pantalla.placeholder = "";
		pantalla.value = pantalla.value.slice(0,-1);
	}
}

function calcular(operacionmatematica) {  //Al seleccionar una operacion matematica, el dato ingresado se convierte en el primer valor de la misma.
	
	if (operacion == "") {       //Si aun no se ha elegido el operador, al alegirse se entiende que el valor de la caja de texto es ya el primer numero de la operacion.
		operacion = operacionmatematica;  //Se selecciona el operador
		primernumero = pantalla.value;  //Se obtiene el primer numero de la operacion, que es el de la caja.
		pantalla.value = "";  //Se limpia la caja para comenzar a capturar el segundo numero de la operacion.
		pantalla.placeholder = primernumero;  //Se deja el valor del primer numero impreso como representacion solamente. Se borra al iniciar escritura del segundo valor.
	} else {
		operacion = operacionmatematica;  //Si la operacion ya tenia un operador seleccionado, este se reemplaza con el nuevo.
	}
}

function resultado() {
	if (pantalla.value == "") {pantalla.value = 0}
	if (operacion == "suma" ) {
		pantalla.value = parseFloat(primernumero) + parseFloat(pantalla.value);
	}
		if (operacion == "resta") {
		pantalla.value = parseFloat(primernumero) - parseFloat(pantalla.value);
	}
		if (operacion == "multiplicacion") {
		pantalla.value = parseFloat(primernumero) * parseFloat(pantalla.value);
	}
		if (operacion == "division") {
		pantalla.value = parseFloat(primernumero) / parseFloat(pantalla.value);
	}
		if (operacion == "porcentaje") {
		pantalla.value = parseFloat(primernumero) % parseFloat(pantalla.value);
	}
	primernumero = pantalla.value;
	if (primernumero.length >= 16) {
		alert(`El resultado es ${primernumero} y supera la cantidad de caracteres de la Pantalla, por lo que de momento tendras que deslizarte para verlo completo en Pantalla. Estamos mejorando nuestro servicio.`)
	}
	operacion = "";
	
}

//Se incluye el siguiente codigo para no permitir mas que numeros y puntos por medio del teclado.
var nav4 = window.Event ? true : false;

function acceptNum(evt){	
var key = nav4 ? evt.which : evt.keyCode;	
// return (key == 46 ||  (key >= 48 && key <= 57));
return (key >= 48 && key <= 57);
}