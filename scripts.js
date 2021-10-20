const $nombreUsuario = document.querySelector('#nombreUsuario')
const $apellidoUsuario = document.querySelector('#apellidoUsuario')
const $edadUsuario = document.querySelector('#edadUsuario')
const $botonConfirmar = document.querySelector('#botonConfirmar')
const $tituloPagina = document.querySelector('#tituloPagina')
const $tituloDatosUsuario = document.querySelector('#tituloDatosUsuario')
const $parrafoDatosUsuario = document.querySelector('#parrafoDatosUsuario')

$botonConfirmar.onclick = function() {

    $tituloPagina.textContent = `Bienvenido ${$nombreUsuario.value}!`
    $tituloDatosUsuario.className = ''
    $parrafoDatosUsuario.className = ''
    $parrafoDatosUsuario.textContent = `Nombre: ${$nombreUsuario.value} ${$apellidoUsuario.value}, Edad: ${$edadUsuario.value}`
}
