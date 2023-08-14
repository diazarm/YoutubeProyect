// encontrar dentro del array un elemento y mostrar cuantas veces se repite

let array = ['tito','pepe', 'pepito', 'tito', 'tota','tito', "tota"];

function busqueda (elemento){
  let cofre = [];
  for (let i =0 ; i<array.length; i++){
    if(array[i].includes(elemento)) {cofre.push(elemento)}
  }
  if (cofre.length > 0 ){console.log(`encontro a ${elemento} ${cofre.length} veces`)} 
  else {console.log(`No se encontro ${elemento}`)}
  
}

busqueda("tota")