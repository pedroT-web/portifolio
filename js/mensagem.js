const meuTelefone = "5516991368710"
const $ = i => document.getElementById(i)

$("forms").addEventListener("submit", e => {
    e.preventDefault()

    const n = $("nome").value.trim()
    const m = $("mensagem").value.trim()

    if (!n || !m) {
        return
    }


    window.open(
        `https://wa.me/${meuTelefone}?text=${encodeURIComponent(
            `Olá! Sou ${n}.\n\n${m}`
        )}`,
        "_blank"
    )
})
