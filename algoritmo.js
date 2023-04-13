const BITCOIN_A_PRECIO_ETHERUM = 13.54;
const BITCOIN_A_PRECIO_DOLAR = 39685.40;

let bitcoinIngresado = prompt ("Dame una cantidad de Bitcoin");
let result =window.confirm("si aceptas das a dolar si negas das a ETH")

if (result == true) {
    alert (("tu cantidad de dolares es")+(bitcoinIngresado*BITCOIN_A_PRECIO_DOLAR)
    )
} else {
    alert ( ("Tu cantidad de ETH es") + (bitcoinIngresado * BITCOIN_A_PRECIO_ETHERUM))
}
