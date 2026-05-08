//Instancia de la clase Empleado
import Empleado from "./class/empleado.js";

const empleado = new Empleado("Neyser", "123456789", 5000);

console.log(empleado);

empleado.setSalario(100);

console.log("EL nuevo salario es:" + empleado.getSalario());