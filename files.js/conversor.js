const divResultado = document.getElementById("divResultado");
const btnCalcular = document.getElementById("calcular");

let dolarHoy = (216.8 * 1.65);
let euroHoy = (227.48 * 1.65);

const conversion = (cantidad, divisa) =>{
    return cantidad * divisa;
}

btnCalcular.onclick = () => {
    convertir();
};

function convertir() {
    let valor = parseFloat(document.getElementById("valor").value);
    
    if (document.getElementById("dolar").checked) {
        let resultado = conversion(valor, dolarHoy)
        div = document.createElement("div");
        divResultado.innerHTML = `<div>
                                    <p>Monto en pesos argentinos: $${resultado.toFixed(2)}</p>
                                 </div>`;                     
    } else if (document.getElementById("euro").checked){
        let resultado2 = conversion(valor, euroHoy);
        div = document.createElement("div");
        divResultado.innerHTML = `<div>
                                    <p>Monto en pesos argentinos: $${resultado2.toFixed(2)}</p>
                                  </div>`;
    }
}
