

function CalcularMediaAritmetica(lista) {
// let sumarLista = 0;

// for (let i = 0; i < lista.length; i++) {
// sumarLista += lista[i];

// }
const sumarLista = lista.reduce(
    function (nuevoElemento, valorAcumulado = 0) {
        return nuevoElemento + valorAcumulado;
    }
)

const promedioLista = sumarLista / lista.length;
    return promedioLista;
}