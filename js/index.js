window.onload = actualizarContador

let totalTime = parseInt(localStorage.getItem('contador')) || 21

// Función en donde deja el número tal y como está
function actualizarContador(){
  showCount()
  localStorage.setItem('contador',totalTime)
}

function showCount() {
  document.getElementById('countdown').innerHTML = totalTime // la importación del botón de HTML a JavaScript
}

// La función en donde se disminuye el número
function upDateCount() {
  showCount()
  if(totalTime <= 0) {
    alert('¡¡¡ADVERTENCIA!!! Ya has llegado al final de las 21, a partir de ahora, cualquier eyaculación puede resultar en una derrota y causar riesgos de inflamación y probabilidad de cáncer de próstata.')
  }else{
    totalTime -- // 21 -> 20 -> 19 etc
  }
}

// Función para aumentar el número
function downDateCount () {
  showCount()
  if(totalTime >= 21){
    alert('Sólamente pueden ser 21 eyaculaciones.')
  }else{
    totalTime ++ // 15 -> 16 -> 17 -> 18 etc
  }
}

// Función para volver a las 21 por determinado
function restartDateCount () {
  showCount()
  totalTime = 21 // EL número vuelve a ser 21
}

// Con el botón "Siguiente" se ejecuta la función que por cada click se ejecuta la función upDateCount
document.getElementById('next').onclick = () => {upDateCount(), actualizarContador()}

// Función en donde al ejecutarse el botón, llama la función de aumentar el número para que las 21 vayan aumentando
document.getElementById('previus').onclick = () => {downDateCount(), actualizarContador()}

// Con el botón "Volver a Empezar" mediante la recarga de la página, vuenlve a poner el número a 21 
document.getElementById('refresh').onclick  = () => {restartDateCount() , actualizarContador()}