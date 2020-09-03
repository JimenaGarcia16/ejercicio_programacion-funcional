//PROGRAMACIÓN FUNCIONAL

const numerosImpares = [1,3,5,7];
const double = numerosImpares.map(n => n*3);

console.log(double)

//FUNCIÓN RECURSIVA

function colores (){
    console.log("verde, rosado,morado, azul, amarillo, negro");
    colores();
}
colores ();
