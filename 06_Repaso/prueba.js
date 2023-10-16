/* let edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

let cantidad = 0;
let i = 0

while (cantidad <= 5) {
  console.log("cantidad" + " " + cantidad);
  cantidad++
}

let iterar=0

for (let iterar = 0; iterar <= 5; iterar++) {
  console.log("Iteracion #"+iterar);
} */

/* var a = 1;
let b = 2;
const c = 3;

function testScope() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Dentro de la función', a, b, c);
}
testScope();
console.log('Fuera de la función', a, b, c);
testScope();
console.log('Fuera de la función', a, b, c); */

/* let myNumber = 10;
let myString = "Hola, mundo";
let myBoolean = true;
let myObject = {
    nombre: "ChatGPT",
    version: "4",
};
let myNull = null;
let myUndefined;
console.log(myNumber + myString);
// ¿Qué ocurreaquí?
console.log(myObject.nombre);
// ¿Y aquí?
console.log(myObject.apellido);
// ¿Y en estecaso? */

/* function calcularMedia(arrayNumeros) {
    let sum = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        sum += arrayNumeros[i];
    }
    return sum / arrayNumeros.length;
}

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

function esPalindromo(cadena) {
    let cadenaReversa = invertirCadena(cadena);
    return cadena === cadenaReversa;
}
console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(invertirCadena("hola"));
console.log(esPalindromo("amor a roma")); */

/* var sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum) */

/* let tabla = 9;
for (let i = 0; i <= 9; i++) {
    console.log("Tabla del 9 X " + i + "= " + tabla * i);
} */

/* for (let i = 0; i <= 9; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`${i}` + " X " + `${j}` + "= " + i * j);
    }
} */

/* for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }

} */

/* for (let i = 1; i <= 20; i++) {
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") :
        i % 3 == 0 ? console.log("Fizz") :
        i % 5 == 0 ? console.log("buzz") : console.log(i);

} */

let iterador = 100
console.log(iterador);
while (iterador >= 1) {
    iterador = iterador / 2
    console.log(iterador);
}