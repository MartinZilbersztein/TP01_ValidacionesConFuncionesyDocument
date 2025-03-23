const notaMinima = 1, notaMaxima = 10;
const formulario = document.getElementById('formulario');
const notaMatematica = document.getElementById('notaMatematica');
const notaLengua = document.getElementById('notaLengua');
const notaEFSI = document.getElementById('notaEFSI');
const alerta = document.getElementById('alerta');
const promedioTexto = document.getElementById('promedio');
const mayorNota = document.getElementById('mayorNota');
let notasValidas = false;

function onChange(id){
    promedio.innerText = "";
    let valor = document.getElementById(id);
    const valorNumerico = parseInt(valor.value);
    console.log(valorNumerico);
    if ((isNaN(valorNumerico) || valorNumerico < notaMinima || valorNumerico > notaMaxima))
    {
        valor.style.color = "red";
        notasValidas = false;
        alerta.innerText = "Los valores deben ser númericos, mayores a " + notaMinima + " y menores a " + notaMaxima ;
    }
    else 
    {
        valor.style.color = "black"; 
        notasValidas = true;
        alerta.innerText = "";
    }   
}


formulario.addEventListener('submit', function(){
    let notaMatematica = document.getElementById('notaMatematica');
    let notaLengua = document.getElementById('notaLengua');
    let notaEFSI = document.getElementById('notaEFSI');
    const notas = [];
    const materias=["Matemática", "Lengua", "EFSI"];
    let promedio = 0;
    let notaAlta = 0;
    event.preventDefault();
    notaMatematica = parseInt(notaMatematica);
    notaLengua = parseInt(notaLengua);
    notaEFSI = parseInt(notaEFSI);
    if (!notasValidas)
    {
        alerta.innerText = "Los valores deben ser númericos, mayores a " + notaMinima + " y menores a " + notaMaxima
    }
    else
    {
        for (let i = 0; i < document.getElementsByClassName("nota").length; i++)
        {
            notas[i] = (document.getElementsByClassName("nota")[i].value)
            promedio+=parseInt(notas[i]);
            if (notaAlta < notas[i])
            notaAlta = notas[i];
        }
        mayorNota.innerText = "La/s materia/s con mayor nota es/son "
        for (let i = 0; i < document.getElementsByClassName("nota").length; i++)
        {
            if (document.getElementsByClassName("nota")[i].value == notaAlta)
            {
                mayorNota.innerHTML = document.getElementsByClassName("nota")[i].id;
            }

        }
        promedioTexto.innerText = "El promedio es " + ((parseFloat)(promedio/notas.length))
    }
})
