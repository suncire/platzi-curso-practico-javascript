
function CalcularMediaAritmetica(lista) {
    const sumarLista = lista.reduce(
        function (nuevoElemento, valorAcumulado = 0) {
            return nuevoElemento + valorAcumulado;
            })

    const promedioLista = sumarLista / lista.length;
        return promedioLista;
    }

function calcularMediana(lista) {
    const ordenarLista = lista.sort(function compareNumbers(a, b) {
        return a - b
    });
    const mitadLista = parseInt(ordenarLista.length / 2);

    const esPar = function esPar (numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (esPar(ordenarLista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1]

    const promedio =  CalcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    
    return promedio;

} else {
    return lista[mitadLista]
}
    
}