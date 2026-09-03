let a=5;
a+=a;
console.log(a);
let x=3,y=4
console.log("x=",x,"y=",y);
console.log("x+y=",x+y);
// x/y es una divicion
console.log("x/y=",x/y);
//x**y es una potencia
console.log("x**y=",x**y);
//x%y es el residuo de la divicion
console.log("x%y=",x%y);
let anno=prompt("idependencia de sannta cruz")
if(anno==1810)
{console.log("correcto")}
else
{console.log("incorrecto")}
// escribir un programa que pida al usuario ingresar un numero y determinar si ese numero es par o impar
function ParImpar(n) {
if(n % 2==0)
{console.log("es par")}
else
{console.log("es impar")}
}
let n=Number(prompt("introduzca un numero"))
ParImpar(n)
function comprar(producto, cantidad) {
    let precios ={
        teclados: 100,
        mouse: 50,
        monitor: 300,
        audifonos: 150,
        laptop: 500,
    }
    if (precios[producto] !== undefined) {
        let total = precios[producto] * cantidad;
       console.log("producto: " + producto);
       console.log("cantidad: " + cantidad);
       console.log("total: " + total);
    } else {
        console.log("Producto no disponible");
    }
}

let producto = prompt("Ingrese el producto que desea comprar (teclados, mouse, monitor, audifonos, laptop):");
let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
comprar(producto, cantidad);


