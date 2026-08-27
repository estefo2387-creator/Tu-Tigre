alert("si funciona")
let valorA=parseInt(prompt("introduzca un numero"));
let valorB=parseInt(prompt("introduzca un numero"));
let valorC=parseInt(prompt("introduzca un numero"));
let D=valorA+valorB+valorC
alert(D)
let res=D/3
alert(res);
//
let n = parseInt(prompt("Ingrese n:"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        suma += i;
    }
}
 function multiplicacion(a,b) {
    let resultado=0;
    for (let i = 0; i < b; i++){
        resultado=resultado+a;
    }
    return resultado
}
    let a=parseInt(prompt("introduzca un numero"));
    let b=parseInt(prompt("introduzca un numero"));
    alert(multiplicacion(a,b));
    //
    function divicion(A,B){
        let resultado=0;
        while(A>=B){
            A=A-B;
            resultado++
        }
        return resultado;
    }
    let A=parseInt(prompt("ingrese el divisor"));
    let B=parseInt(prompt("int el divisor"));
    alert(divicion(A,B));
    
