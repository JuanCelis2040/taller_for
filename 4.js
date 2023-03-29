let contador = 0;
let suma = 0;
for (let numero = 0; numero <=10; numero++) {
    let numero=parseFloat(prompt("Ingrese el numero"));
    suma = suma + numero;
    contador++
    
}
console.log("El promedio es:",suma/10);