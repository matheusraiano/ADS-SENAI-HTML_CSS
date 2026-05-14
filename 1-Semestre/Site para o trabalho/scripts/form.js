const botaoEnviar = document.querySelector("#enviar")

botaoEnviar.addEventListener("click", event => {
    event.preventDefault();

    const form = document.querySelector("#frmContato")

    if (form.email.value == '' && form.telefone.value == '') {
        return alert("EMAIL E TELEFONE NÃO COLOCADOS!!!")
    } else {
        msgRetorno = form.nomesobrenome.value + ", agradecemos seu contato!"

        document.getElementById("formRetorno").style.display = "block"

        document.getElementById("textoRetorno").innerHTML = msgRetorno

        document.getElementById("formulario").style.display = "none"
        return
    }
})