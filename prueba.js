
let array = ['tito','pepe', 'pepito', 'tito', 'tota','tito'];

function busqueda (elemento){
   let busqueArray = []
   for (let i=0; i<array.length; i++) {
     if (array[i].includes(elemento)){busqueArray.push(elemento)}
   }
  return `la cant de veces que se repite ${elemento} es ${busqueArray.length}`
}
busqueda('tito')