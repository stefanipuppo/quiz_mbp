let artistas = ["gal costa", "liniker", "ana carolina", "alcione", "chico buarque", "djavan", "vinicius de moraes", "milton nascimento",
"joão gilberto"];
let figura = {"gal costa":"gal.jpg", "liniker":"liniker.jpg", "ana carolina":"ana.jpg", "alcione":"alcione.jpg", "chico buarque":"chico.jpg", "djavan":"djavan.jpg","vinicius de moraes":"vinicius.jpg", "milton nascimento":"milton.jpg",
"joão gilberto":"joaogil.jpg"};

let indiceAtual = 0;


function verificarResposta() {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    

    if (respostaUsuario === artistas[indiceAtual] && figura[artistas[indiceAtual]])
    {
        resultado.textContent = "Parabéns, você acertou!";
        resultado.style.color = "white";

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

