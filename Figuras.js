//Código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 

//Código Triángulo Isósceles 1ro
function AlturaTriIsosceles(lado1, lado2, base) {
    if (lado1 === lado2, lado1 != base) {
     return    Math.sqrt(lado1**2 - (base**2 / 4))
    }
    else {
        console.log('No es un Triángulo Isosceles')
    }
}

//Código Triángulo Isóceles 2do

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error('A y B no son iguales, try again')
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoA = Math.sqrt((trianguloPequenoLadoBase**2) - (trianguloPequenoLadoB**2));
        
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura; 
    }
}


//Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

//Código del círculo
function diametroCirculo(radio) {
    return radio * 2;
} 
const PI = Math.PI;

function circuloCircunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// Aquí interactuamos con HTML
// Cuadrado
function calcularPerimetroC() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaC() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo

function calcularPerimetroT() {
    const input1 = document.getElementById("InputPerimetroT1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputPerimetroT2");
    const value2 = parseInt(input2.value);
    const base = document.getElementById("InputBase");
    const baseValue = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, baseValue);
    alert(perimetro);
}

function calcularAreaT() {
    const altura = document.getElementById("InputAlturaT");
    const value = parseInt(altura.value);
    const base = document.getElementById("InputBase");
    const baseValue = parseInt(base.value);

    const area = areaTriangulo(value, baseValue);
    alert(area);
}

// Círculo
//Diámetro
function calcularDiametroC() {
    const radio = document.getElementById("InputRadio");
    const value = radio.value;
    
    const diametro = diametroCirculo(value);
    alert(diametro);
}

//Circunferencia
function calcularCircunferenciaC() {
    const radio = document.getElementById("InputRadio");
    const value = radio.value;
    
    const circunferencia = circuloCircunferencia(value);
    alert(circunferencia);
}

//Area
function calcularAreaCir() {
    const radio = document.getElementById("InputRadio");
    const value = radio.value;
    
    const area = areaCirculo(value);
    alert(area);
}

// Triángulo Isosceles

function calcularAlturaTriIsosceles() {
    const input1 = document.getElementById("InputLadoA");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputLadoB");
    const value2 = parseInt(input2.value);
    const base = document.getElementById("InputBaseTri");
    const baseValue = parseInt(base.value);

    const altura = alturaTrianguloIsosceles(value1, value2, baseValue);
    alert(altura);
}