'use strict'

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

let texto = "Buenos Días, mi NOMBRE es Bianca Deblinger ";

const cadenaTexto = (cadena)=>{
  
  if(cadena === cadena.toUpperCase()){
    console.log("La cadena de texto sólo contiene letras en mayúsculas");
  } else if( cadena === cadena.toLowerCase()){
    console.log("La cadena de texto sólo contiene letras en minúsculas")
  } else{
    console.log("a cadena de texto contiene letras en mayúsculas y en minúsculas")
  }
}

cadenaTexto(texto)
