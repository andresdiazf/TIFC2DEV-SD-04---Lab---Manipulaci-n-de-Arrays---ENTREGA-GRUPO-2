function convertirMoneda(monto, monedaDestino) {
        const tasaCambio = {
                USD: 0.00027,
                EUR: 0.00023
        };
        if (tasaCambio[monedaDestino]) {
                return monto * tasaCambio[monedaDestino];
        }
        return 0;
}

let monto = 100000;
let monedaDestino = "USD";
let montoConvertido = convertirMoneda(monto, monedaDestino);


let monto2 = 200000;
let monedaDestino2 = "EUR";
let montoConvertido2 = convertirMoneda(monto2, monedaDestino2);

console.log(`Monto en ${monedaDestino2}: ${montoConvertido2.toFixed(2)} y Monto en ${monedaDestino}: ${montoConvertido.toFixed(2)}`);
