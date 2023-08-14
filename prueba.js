// obtener el mayor de 18 anios

function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero % 3 === 0 && numero % 5 === 0 ) {console.log("fizzBuzz") }
    else if(numero % 3 === 0 ) {console.log("fizz") }
    else if (numero % 5 ===0) {console.log("buzz") }

    else{ console.log(numero) }

}

let array = [1,2,3,4,5,6,7]

function increment (array){
    let sumado = []
    for (let i = 0; i<array.length; i++){
        sumado.push(array[i]+1)
        }
        console.log(sumado)
}

increment(array)