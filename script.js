let artistas = ["gal", "liniker", "joao gilberto"];
let figura = {"gal":"gal.jpg", "liniker":"liniker.jpg", "joao gilberto":"joaogil.jpg"};

let indiceAtual = 0;


function verificarResposta() {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    if (respostaUsuario === artistas[indiceAtual] && figura[artistas[indiceAtual]])
    {
        resultado.textContent = "Parabéns, você acertou!";
        resultado.style.color = "green";

        document.getElementById("verificar").style.display = "none";
        document.getElementById("proximo").style.display = "inline";
    } 
    else {
        resultado.textContent = "Resposta incorreta. Tente novamente.";
        resultado.style.color = "red";
    }
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < artistas.length) {
        let imagemArtista = document.querySelector(".quiz img");
        

        imagemArtista.src = figura[artistas[indiceAtual]];

        document.getElementById("resposta").value = "";
        document.getElementById("resultado").textContent = "";
        document.getElementById("verificar").style.display = "inline";
        document.getElementById("proximo").style.display = "none";
    } else {
        alert("Parabéns, você terminou o quiz!");
    }
}