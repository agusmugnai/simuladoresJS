const detalle = document.getElementById("detalle");
const btnCalcularInv = document.getElementById("calcularInv");
const reset = document.getElementById("reset");

let tna = 0.75;

const calcularPlazo = (monto, tasa, tiempo) => { return (monto * tasa) / tiempo }
const sumaTotal = (montoInicial, intereses) => { return montoInicial + intereses }

btnCalcularInv.addEventListener("click", () => {
    let valor = parseFloat(document.getElementById("valorInversion").value);
    let tiempo = parseFloat(document.getElementById("tiempoInversion").value);
    let intereses = calcularPlazo(valor, tna, tiempo);
    if (valor < 500) {
        const montoMenor = document.createElement("aviso");
        montoMenor.innerHTML = `<div>
                                    <p>El monto ingresado debe ser mayor o igual a $500.</p>
                                </div>`
        detalle.appendChild(montoMenor);
    } else {
        const monto = document.createElement("monto");
        monto.innerHTML = `<div>
                            <p>Monto inicial a invertir $${valor}</p>
                            <p>Intereses ganados $${intereses.toFixed(2)}</p>
                            <p>Monto neto a cobrar $${sumaTotal(valor, intereses).toFixed(2)}</p>
                          </div>`
        detalle.appendChild(monto);
    }
})
