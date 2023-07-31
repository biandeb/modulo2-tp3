'use strict'

/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

let ciudades = []

while(true){
    let ciudad = prompt("Ingrese una ciudad")
    if(ciudad === null){
        break;
    }
    ciudades.push(ciudad);
}
console.log(ciudades);

// Mostrar la longitud del arreglo:
alert(`La longitud del arreglo es ${ciudades.length}`)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última:
document.write(`${ciudades[0]}, está en la posición n° 1.`);
document.write(`${ciudades[2]}, está en la posición n° 3.`);
document.write(`${ciudades.at(-1)}, está en la última posición.`);

//Añade en última posición la ciudad de París:
ciudades.push("París");
console.log("París se añade al final de las posiciones")

//Escribe por pantalla el elemento que ocupa la segunda posición:
document.write(`${ciudades[1]}, está en la posición n° 2.`);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona':
ciudades[1] = "Barcelona";
console.log("Se modifica la segunda posición a Barcelona")

// Mostrar la longitud del arreglo total (ya que añado en la última posición, París):
console.log(`La longitud del arreglo TOTAL es ${ciudades.length}`)





