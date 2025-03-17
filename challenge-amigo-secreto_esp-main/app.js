// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function LimpiarCaja(){
    document.querySelector('#amigo').value = ''; 
}

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo === ""){
        alert('Por favor, inserte un nombre valido.');
        return;
    }

    listaAmigos.push(nombreDeAmigo)
    console.log(nombreDeAmigo);
    actualizarLista();
    LimpiarCaja();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";


    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ` El amigo secreto es: ${amigoSecreto}`;
}

