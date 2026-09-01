function sumar(){

    let num=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let resultado=num+num2;
    let mostrar=document.getElementById("resultado");
    mostrar.innerHTML="el resultado es:"+resultado;
    let mostrar2=document.getElementById("resultado2");
    let matriz ="";
    for (let i=0;i<num;i++){
        for (let j=0;j<num2;j++){
            matriz+="*";
        }   
        matriz +="<br>";
    }
    mostrar2.innerHTML=matriz;
}