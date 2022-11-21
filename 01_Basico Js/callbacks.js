const resultSuma=(resultSuma) => {
  console.log("El resultado de sumar es: ", resultSuma);
  cuadrado(resultSuma, cbCuadrado);
};

const cbCuadrado=(resultCuadrado) => {
  console.log("El resultado del cuadrado de la suma es:", resultCuadrado);
  dividir(resultCuadrado, cbDividir);
};

const cbDividir=(resultDividir) => {
  console.log("El resultado de dividir el numero °2 es: ",resultDividir);
  restar(resultDividir, cbRestar);
};

const cbRestar=(resultRestar) => {
  console.log("El resultado de restar 100 a la divición es: ",resultRestar);
  mayorCero(resultRestar, cbMayorOMenor);
};

const cbMayorOMenor=(mayorOMenor) => {
  console.log("El resultado es que:", mayorOMenor);
}
