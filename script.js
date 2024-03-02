function verificarResposta() {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();

    let respostaCorreta = "gal costa"

    let resultado = document.getElementById("resultado");

    if (respostaUsuario === respostaCorreta){
        resultado.textContent = "Parabens você acertou!";
        resultado.style.color = "green";
        }

        else {
            resultado.textContent = "Resposta incorreta. Tente novamente."
            resultado.style.color = "red";
        }
    






}