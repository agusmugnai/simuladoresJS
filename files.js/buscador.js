class Sucursales {
    constructor(ciudad, direccion) {
        this.ciudad = ciudad;
        this.direccion = direccion;
    }
}

let sucursal1 = new Sucursales("Gualeguaychú", "Rivadavia 258");
let sucursal2 = new Sucursales("Gualeguay", "San Martin 1274");
let sucursal3 = new Sucursales("Colón", "Las Heras 323");
let sucursal4 = new Sucursales("Villa Elisa", "Pancho Ramirez 87");
let sucursal5 = new Sucursales("Paraná", "Hirigoyen 1218");
let sucursal6 = new Sucursales("Concepción del Uruguay", "1 de Mayo 984");
let sucursal7 = new Sucursales("Federación", "San Antonio 741");
let sucursal8 = new Sucursales("Concordia", "Gral. Belgrano 1458");
let sucursal9 = new Sucursales("Victoria", "Caseros 38");

const sucursales = [sucursal1, sucursal2, sucursal3, sucursal4, sucursal5, sucursal6, sucursal7, sucursal8, sucursal9];

const buscador = document.getElementById("buscador");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

const filtrar = () => {
    resultado.innerHTML = ``;
    const texto = buscador.value.toLowerCase();
    for (let elemento of sucursales) {
        let ciudades = elemento.ciudad.toLowerCase();
        if (ciudades.indexOf(texto) !== -1) {
            resultado.innerHTML += `<ul>
                                        <p>Ciudad: ${elemento.ciudad} / Dirección: ${elemento.direccion}</p>
                                    </ul>`
        }
    }
}
btn.addEventListener("click", filtrar)
