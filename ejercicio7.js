'use strict'

/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

let numero = 5;

const tablaMultiplicacion = (num) => {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
tablaMultiplicacion (num)