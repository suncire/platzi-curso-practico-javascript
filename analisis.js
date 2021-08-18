// helpers

function esPar (lista) {
    return (lista % 2 === 0) 
}

function CalcularMediaAritmetica(lista) {
    const sumarLista = lista.reduce(
        function (nuevoElemento, valorAcumulado = 0) {
            return nuevoElemento + valorAcumulado;
            })

    const promedioLista = sumarLista / lista.length;
        return promedioLista;
    }

    // Calculadora meadiana general
    function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const Mitad1 = lista[mitad - 1];
        const Mitad2 = lista[mitad];

        const mediana = CalcularMediaAritmetica([Mitad1, Mitad2]);
        return mediana;
    } else {
       const personaMitad = lista[mitad];
       return personaMitad;
    }

}

    // Meadiana genral
const salariosVzla = venezuela.map(
    function (persona) {
    return persona.salary;        
    }
);

const salariosVzlaSorted = salariosVzla.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

const medianaGeneralVzla = medianaSalarios(salariosVzlaSorted)


// mediana top 10%

const spliceStart = (salariosVzlaSorted.length * 90) / 100;
const spliceCount = salariosVzlaSorted.length - spliceStart;

const salariosVzlaTop10 = salariosVzlaSorted.slice(spliceStart, salariosVzlaSorted.length);
const medianaTop10lVzla = medianaSalarios(salariosVzlaTop10);

console.log({
    medianaGeneralVzla,
    medianaTop10lVzla,
});

