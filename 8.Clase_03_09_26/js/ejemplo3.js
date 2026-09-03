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