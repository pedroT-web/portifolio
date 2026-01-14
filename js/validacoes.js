const regexNumero = /\d/
const regexLetras = /[a-zA-ZÀ-ÿ]/

const telefonePessoa = document.getElementById("telefone")
const labelTelefone = document.getElementById("label_telefone")

function fnValidarTelefone(telefoneRecebido) {
    const valorTelefone = telefoneRecebido.value.trim();

    if (valorTelefone.length < 10 || valorTelefone.length > 11) {
        telefoneRecebido.classList.add("input_error")
        labelTelefone.classList.add("placeholder_error")
        return false
    } else {
        telefoneRecebido.classList.remove("input_error")
        labelTelefone.classList.remove("placeholder_error")
        return true
    }
}

telefonePessoa.addEventListener("blur", e => {
    fnValidarTelefone(telefonePessoa)
})


const nomePessoa = document.getElementById("nome")
const labelNome = document.getElementById("label_nome")

function fnValidarNome(nomeRecebido) {
    const valorNome = nomeRecebido.value.trim()

    if (valorNome == "") {
        nomeRecebido.classList.add("input_error")
        labelNome.classList.add("placeholder_error")
        return false
    } else if (regexNumero.test(valorNome)) {
        nomeRecebido.classList.add("input_error")
        labelNome.classList.add("placeholder_error")
        return false
    } else {
        nomeRecebido.classList.remove("input_error")
        labelNome.classList.remove("placeholder_error")
        return true
    }
}

nomePessoa.addEventListener("blur", e => {
    fnValidarNome(nomePessoa)
})

const mensagemPessoa = document.getElementById("mensagem")
const labelMensagem = document.getElementById("label_mensagem")

function fnValidarMensagem(mensagemRecebida) {
    const valorMensagem = mensagemRecebida.value.trim()

    if (valorMensagem == "") {
        mensagemRecebida.classList.add("input_error")
        labelMensagem.classList.add("placeholder_error")
        return false
    } else if (!regexLetras.test(valorMensagem)) {
        mensagemRecebida.classList.add("input_error")
        labelMensagem.classList.add("placeholder_error")
        return false
    } else {
        mensagemRecebida.classList.remove("input_error")
        labelMensagem.classList.remove("placeholder_error")
        return true
    }
}

mensagemPessoa.addEventListener("blur", e => {
    fnValidarMensagem(mensagemPessoa)
})

const formulario = document.getElementById("forms")

formulario.addEventListener("submit", e => {
    const nomeValido = fnValidarNome(nomePessoa)
    const telefoneValido = fnValidarTelefone(telefonePessoa)
    const mensagemValida = fnValidarMensagem(mensagemPessoa)

    if (!nomeValido || !telefoneValido || !mensagemValida) {
        e.preventDefault()

        Swal.fire({
            icon: "error",
            title: "Incorreto",
            text: "Existem campos incorretos. Por favor, corrija-os antes de enviar a mensagem.",
        });
    }
})