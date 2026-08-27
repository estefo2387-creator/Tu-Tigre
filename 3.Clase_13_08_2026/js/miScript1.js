a=5
b=6
if(b%2==0){
    console.log(b,"el numero es par");
}
if(a%2==0){
    console.log(a,"el numero es par");
}
else{
    console.log(a,"el numero es impar");
}
/**realizar un programa para sumar los primeros 10 numeros 
* ejemplo:1+2+3+4+5+6+7+8+9=45
*/
let suma = 0;
for(let i = 1; i <= 9; i++){
    suma += i;
}
console.log("la suma de los primeros 10 numeros es:", suma);
console.log("fin del programa");
/**realizar un programa para generar los numeros pares
 * de n numeros, n es introducido por teclado
 * ejemplo: n=3, 2,4,6,
 * ejemplo: n=5, 2,4,6,8,10
 */
let n = parseInt(prompt("introduzca un numero"));
let pares = [];
for(let i = 2; i <= n * 2; i += 2){
    alert(i);
}
console.log("los numeros pares son:", pares);