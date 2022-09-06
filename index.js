let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido")

if((nombreIngresado == "") || (apellidoIngresado == "")){
    alert("No ingresaste la informacion completa");
}
else{
    alert("Bienvenido" + " " + nombreIngresado + " " + apellidoIngresado)
}

let ingresarNumero = parseInt(prompt("Ingresar Numero"))



for (let i = 1; i <= 1000; i) {
    let resultado = ingresarNumero + ingresarNumero * 0.18;
    alert("El costo con impuestos es" + " " + resultado + " " + "soles");
    prompt("Ingresar Numero")
}





