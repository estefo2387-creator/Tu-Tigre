/**realizar un programa para generar los numeros pares
 * de n numeros, n es introducido por teclado
 * ejemplo: n=3, 2,4,6,
 * ejemplo: n=5, 2,4,6,8,10
 */
let n = parseInt(prompt("introduzca un numero"));
let pares = [];
for(let i = 2; i <= n * 2; i += 2){
    console.log(i);
}
console.log("los numeros pares son:", pares);