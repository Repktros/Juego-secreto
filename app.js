let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 50;
let adivinaciones = 8;



function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    
}


function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Lo conseguiste en ${intentos} ${intentos === 1 ? 'intento, felicitaciones!' : 'intentos :)'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == adivinaciones) {
        asignarTextoElemento('p',`Adivinaste ${adivinaciones} números, tómate un descanso, genio!`)

    } else {

        

        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        
}
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


condicionesIniciales();