
export default class Empleado {
    #salarioBase;
    constructor(nombre, cedula, salarioBase) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.salarioBase = salarioBase;
    }

    setSalario(salarioBase) {
        if (salarioBase <= 0) {
            console.error("El salario base debe ser mayor a cero.");
        } else {
            this.salarioBase = salarioBase;
        }
        this.salarioBase = salarioBase;
    }

    getSalario () {
        return this.salarioBase;
    }

    calcularSalarioNeto() {
        return this.salarioBase;
    }

    mostrarDetalles(){
        console.log(`Empleado: ${this.nombre}, Cedula: ${this.cedula}, Salario Neto: ${this.calcularSalarioNeto()}`);
    }
}