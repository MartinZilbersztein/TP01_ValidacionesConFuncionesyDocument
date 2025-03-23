const notaMinima = 1, notaMaxima = 10;
const formulario = document.getElementById('formulario');
let notaMatematica = document.getElementById('matematica');
let notaLengua = document.getElementById('lengua');
let notaEFSI = document.getElementById('EFSI');
const promedioTexto = document.getElementById('promedio');
const mayorNota = document.getElementById('mayorNota');
let notasValidas = false;
let alerta = document.getElementById('alerta');
let mensajeAlerta = "Los valores deben ser númericos, mayores o iguales a " + notaMinima + " y menores o iguales a " + notaMaxima;
const botonPromedio = document.getElementById('calcularPromedio');
const botonNota = document.getElementById('calcularMayorNota');
const promedioTag = document.getElementById('promedio');
const mayorNotaTag = document.getElementById('mayorNota');
const divPromedio = document.getElementById('divPromedio');
const divMayorNota = document.getElementById('divMayorNota');
let numeroPromedio = document.createElement("p");
let materiasNotaAlta = [];
let materias = ["Matematica", "Lengua", "EFSI"];
const cambiarGif = (nota = null) =>{
    const gif = document.getElementById('gif');
    console.log(nota);
    if (nota == -1) 
    {
        gif.src= "";
    }
    if (nota != null)
    {
        if (nota < 6)
        {
            gif.src="https://media1.tenor.com/m/jzKndvX8q54AAAAC/pikachu.gif";
        }
        else 
        gif.src= "https://media.tenor.com/Jh_efPTFc4wAAAAM/andteam-andteam-ej.gif";
    }
    else
    {
        gif.src = "https://media1.tenor.com/m/hFvfHtYySfcAAAAC/inside-out-joy.gif"
    }
}
cambiarGif();

const onChange = (id) =>{
    materiasNotaAlta=[];
    mayorNotaTag.textContent = "";
    promedio.innerText = "";
    numeroPromedio.classList.add("hidden");
    let tieneLetra = false;
    let input = document.getElementById(id);
    const valorNumerico = parseInt(input.value);
    const alerta = document.getElementById("aviso" + id);
    tieneLetra = /[a-zA-Z]/.test(input.value);

    if ((isNaN(valorNumerico) || valorNumerico < notaMinima || valorNumerico > notaMaxima) || tieneLetra)
    {
        input.classList.add("inputInvalido");
        input.classList.remove("inputValido");
        notasValidas = false;
        alerta.innerText = mensajeAlerta;
    }
    else 
    {
        input.classList.add("inputValido");
        input.classList.remove("inputInvalido");
        notasValidas = true;
        alerta.innerText = "";
    }
    for (let i = 0; i < materias.length; i++){
        console.log("text" + materias[i]);
        document.getElementById("text" + materias[i]).classList.remove("azul");
    }   
    cambiarGif(-1);
}



botonPromedio.addEventListener("click", function(){
    let promedio;
    event.preventDefault();
    tomarNotas();
    if (!notasValidas)
        mostrarError();
    else{
        alerta.classList.add("hidden");
        promedio = (notaMatematica + notaLengua + notaEFSI) / 3;
        if (promedio >= 6)
            numeroPromedio.style.color = "green";
        else
            numeroPromedio.style.color = "red";
        promedioTag.innerText = "El promedio es";
        numeroPromedio.innerText = promedio;
        divPromedio.append(numeroPromedio);
        numeroPromedio.classList.remove("hidden");
        cambiarGif(promedio);
    }
})

botonNota.addEventListener("click", function(){
    let notas =[1,1,1];
    let notaAlta = 0;
    tomarNotas();
    event.preventDefault();
    if (!notasValidas)
        mostrarError();
    else{
        let mensajeNota = "La/s materia/s con mejor nota son ";
        tomarNotas(); 
        alerta.classList.add("hidden");
        for (let i = 0; i < document.getElementsByClassName("nota").length; i++)
        {
            notas[i] = (parseInt(document.getElementsByClassName("nota")[i].value))
            console.log("la nota de " + materias[i] + " es " + notas[i]);
            if (notaAlta < notas[i])
            {notaAlta = notas[i];}
        }
        console.log(notaAlta);
        for (let i = 0; i < notas.length; i++)
        {
            if (notas[i] == notaAlta)
            {
                mensajeNota+=materias[i];
                materiasNotaAlta+=materias[i];
                if (i < notas.length-1)
                    mensajeNota+= ", ";
                console.log("text" + materias[i]);
                document.getElementById("text" + materias[i]).classList.add("azul");
            }
        }
        if (mensajeNota[mensajeNota.length-1] == " ")
        {
            console.log("entró");
            console.log(mensajeNota[mensajeNota.length-2]);
            mensajeNota = borrarLetra(mensajeNota, mensajeNota.length-2, "");
        }
        mayorNotaTag.innerHTML = mensajeNota;
        
}})

const mostrarError = () =>{
    alerta.classList.remove("hidden");
    alerta.innerText = mensajeAlerta;
}

const tomarNotas = () =>{
    notaMatematica = parseInt(document.getElementById('Matematica').value);
    notaLengua = parseInt(document.getElementById('Lengua').value);
    notaEFSI = parseInt(document.getElementById('EFSI').value);
}

const borrarLetra = (str, index, chr) =>{
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}


