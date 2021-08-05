
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}

function selectedCupon() {
    const cupons = [0, 10, 15, 20, 30]
    const selectCupon = document.getElementById("cupons");
    const cuponsValue = parseInt(selectCupon.value);

    if(cuponsValue === cupons[0]) {
        return cupons[0]
    } 
    else if (cuponsValue === cupons[1]) {
        return cupons[1]
    } 
    else if (cuponsValue === cupons[2]) {
        return cupons[2]
    }
    else if (cuponsValue === cupons[3]) {
        return cupons[3]
    } 
    else if (cuponsValue === cupons[4]) {
        return cupons[4]
    } 
}

function DiscountResultButton() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const selectCupon = selectedCupon();

    const precioConDescuento = calcularPrecioConDescuento(priceValue, selectCupon);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
