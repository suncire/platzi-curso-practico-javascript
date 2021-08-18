// PROMEDIO


function CalcularMediaAritmetica(lista) {

    let sumarLista = 0;

    for (let i = 0; i < lista.length; i++) {
    sumarLista += lista[i];}

    
    const promedioLista = sumarLista / lista.length;
        return promedioLista;
    }


// MEDIANA
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

// MODA

function CalcularModa (lista) {
    const listaCount = {};
    lista.map( function (element) {
        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    })
    const listaArray = Object.entries(listaCount).sort(
        (accumulatedValue, newValue) => accumulatedValue[1] - newValue[1]);
    
        const moda = listaArray[listaArray.length -1];
    
        return moda;
}

/// conectando promedio html 

function CalcularPromedio() {
    const inputP = document.getElementById('inputPromedio');
    const value = parseInt(inputP.value);
    const inputP1 = document.getElementById('inputPromedio2');
    const value1 = parseInt(inputP1.value);
    const inputP2 = document.getElementById('inputPromedio3');
    const value2 = parseInt(inputP2.value);
    const inputP3 = document.getElementById('inputPromedio4');
    const value3 = parseInt(inputP3.value);

    const promedio = CalcularMediaAritmetica([value, value1, value2, value3]);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Tu promedio es de " + promedio;
}

/// conectando mediana html 


function CalcularMedi() {
    const inputM = document.getElementById('inputMediana');
    const value = parseInt(inputM.value);
    const inputM2 = document.getElementById('inputMediana2');
    const value2 = parseInt(inputM2.value);
    const inputM3 = document.getElementById('inputMediana3');
    const value3 = parseInt(inputM3.value);
    const inputM4 = document.getElementById('inputMediana4');
    const value4 = parseInt(inputM4.value);

    const mediana = calcularMediana([value, value2, value3, value4]);
    const resultM = document.getElementById("ResultM");
    resultM.innerText = "Tu mediana es de " + mediana;
}

/// conectando moda html 



function CalcularMod() {
    const inputMo = document.getElementById('inputModa');
    const value = parseInt(inputMo.value);
    const inputMo2 = document.getElementById('inputModa2');
    const value2 = parseInt(inputMo2.value);
    const inputMo3 = document.getElementById('inputModa3');
    const value3 = parseInt(inputMo3.value);
    const inputMo4 = document.getElementById('inputModa4');
    const value4 = parseInt(inputMo4.value);

    const moda = CalcularModa([value, value2, value3, value4]);
    const resultMo = document.getElementById("ResultMo");
    resultMo.innerText = "Tu moda es de " + moda[0] + " y se repite " + moda[1] + " veces";
}