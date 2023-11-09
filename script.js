// agregando a la pantalla el valor del botón de la calculadora que toquemos

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// vaciando la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// tomarndo el valor de la pantalla y ejecutando los cálculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}