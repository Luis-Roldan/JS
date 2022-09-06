let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido")
let continuar = true

if((nombreIngresado == "") || (apellidoIngresado == "")){
    alert("No ingresaste la informacion completa");
}
else{
    alert("Bienvenido" + " " + nombreIngresado + " " + apellidoIngresado)
}

let ingresarNumero = parseInt(prompt("Ingresar Numero"))



while(continuar==true){    
    let ingresarNumero = parseInt(prompt("Ingresar Numero (0 para salir)"))
    if(ingresarNumero==0)
	continuar=false;
    let resultado = ingresarNumero + ingresarNumero * 0.18;
    alert("El costo con impuestos es" + " " + resultado + " " + "soles");
}





