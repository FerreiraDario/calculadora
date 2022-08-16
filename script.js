//document.querySelector('.display').innerText = ''
function agregarNumeroUno(){
    document.querySelector('.display').innerText += '1'
}
function agregarNumeroDos(){
    document.querySelector('.display').innerText += '2'
}
function agregarNumeroTres(){
    document.querySelector('.display').innerText += '3'
}
function agregarNumeroCuatro(){
    document.querySelector('.display').innerText += '4'
}
function agregarNumeroCinco(){
    document.querySelector('.display').innerText += '5'
}
function agregarNumeroSeis(){
    document.querySelector('.display').innerText += '6'
}
function agregarNumerosiete(){
    document.querySelector('.display').innerText += '7'
}
function agregarNumeroOcho(){
    document.querySelector('.display').innerText += '8'
}
function agregarNumeroNueve(){
    document.querySelector('.display').innerText += '9'
}
function agregarNumeroCero(){
    document.querySelector('.display').innerText += '0'
}
function dosCeros(){
    document.querySelector('.display').innerText += '00'
}
function porcentaje(){
    document.querySelector('.display').innerText += '%'
}
function Limpiar(){
    document.querySelector('.display').innerText = ''
}
function dividir(){
    document.querySelector('.display').innerText += '/'
}
function multiplicar(){
    document.querySelector('.display').innerText += '*'
}
function restar(){
    document.querySelector('.display').innerText += '-'
}
function sumar(){
    document.querySelector('.display').innerText += '+'
}
function punto(){
    document.querySelector('.display').innerText += '.'
}
function igual(){
    document.querySelector('.display').innerText += '='
}
 function igual () {
    //Variable
    var cuenta = document.querySelector('.display').innerText 
    console.log(cuenta)
    console.log( cuenta + 3)
    console.log(eval(cuenta))
    document.querySelector('.display').innerText = eval(cuenta)
 }
