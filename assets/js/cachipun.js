/* Lo primero que hago es crear un objeto literal con las opciones a elegir */
const OPCIONES = {
    1: 'Piedra',
    2: 'Papel',
    3: 'Tijera'
};

/* uso var ya que independiente si esta dentro de una funcion o no, puedo ir agregando un contador para elegir al ganador */
/* Ya que segun lo leido let se ocupa mas que nada en bloques y var para el global */
var PuntosUsuario = 0;
var PuntosMaquina = 0;

/* Creo una funcion para obtener el valor del objeto literal */

function obtenerOpcion(numero) {
    return OPCIONES[numero];
}

/* Creo una funcion como validador de opciones */

function validar_opciones() {
    let opcionUsuario;
    while (true) {
        opcionUsuario = parseInt(prompt("Elige tu jugada (1 para Piedra, 2 para Papel, 3 para Tijera):"));
        if (opcionUsuario >= 1 && opcionUsuario <= 3) {
            break; // Si la entrada es válida, salir del bucle
        } else {
            alert("Por favor, ingresa un número válido (1, 2 o 3).");
        }
    }
    return obtenerOpcion(opcionUsuario);
}


/* esta funcion es para mostrar el resultado que se almacena en el comienzo del codigo, para lograr mostrar si gano el usuario, 
empato o perdio*/
function mostrarResultado() {
    const resultadoContainer = document.getElementById('resultadoPartida');
    if (PuntosUsuario > PuntosMaquina) {
        resultadoContainer.style.backgroundColor = 'green';
        resultadoContainer.innerHTML = '<h5>¡HAZ GANADO LA PARTIDA!</h5>';
    } else if (PuntosMaquina > PuntosUsuario) {
        resultadoContainer.style.backgroundColor = 'red';
        resultadoContainer.innerHTML = '<h5>¡HAZ PERDIDO LA PARTIDA!</h5>';
    }
    else {
        resultadoContainer.style.backgroundColor = 'yellow';
        resultadoContainer.innerHTML = '<h5>¡EMPATE!</h5>';
    }
}

/* Aca se inicia la logica del juego y se van sumando segun los resultados al contador puntos usuario/maquina*/
function jugarCachipun(veces) {
    for (let i = 0; i < veces; i++) {
        console.log("Juego #" + (i + 1));
        const jugadaUsuario = validar_opciones();
        const jugadaMaquina = obtenerOpcion(Math.floor(Math.random() * 3) + 1);

        console.log("Tu jugada: " + jugadaUsuario);
        console.log("Jugada de la máquina: " + jugadaMaquina);

        // Determinar el ganador
        if (jugadaUsuario === jugadaMaquina) {
            console.log("Empate!");
        } else if (
            (jugadaUsuario === "Piedra" && jugadaMaquina === "Tijera") ||
            (jugadaUsuario === "Papel" && jugadaMaquina === "Piedra") ||
            (jugadaUsuario === "Tijera" && jugadaMaquina === "Papel")
        ) {
            console.log("¡Felicidades! Has ganado.");
            PuntosUsuario += 1;
        } else {
            console.log("Lo siento, has perdido contra la máquina.");
            PuntosMaquina += 1;
            console.log(PuntosMaquina);
        }
    }
    mostrarResultado();
}


/* aqui le agregue esta variable let para validar las interacciones del usuario en el inicio del programa*/
let veces;

while (true) {
    const vecesStr = prompt("¿Cuántas veces deseas jugar?");
    
    if (vecesStr === null) {
        // Si el usuario hace clic en "Cancelar", salir del bucle
        alert("¡Gracias por jugar!");
        break;
    } else if (vecesStr.trim() === "") {
        // Si el usuario hace clic en "Aceptar" sin ingresar ningún valor, mostrar un mensaje y solicitar nuevamente
        alert("Por favor, ingresa un número válido.");
    } else if (isNaN(vecesStr)) {
        // Si la entrada no es un número, mostrar un mensaje y solicitar nuevamente
        alert("Por favor, ingresa un número válido.");
    } else {
        // Si la entrada es un número, convertirla a entero y salir del bucle
        veces = parseInt(vecesStr);
        break;
    }
}

// Llamar a la función para iniciar el juego con la cantidad de veces indicada
if (veces !== undefined) {
    jugarCachipun(veces);
}
