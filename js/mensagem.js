const meuTelefone = "5516991368710"
const $ = i => document.getElementById(i)

$("telefone").addEventListener("input", e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11)
})

$("forms").addEventListener("submit", e => {
    e.preventDefault()

    const n = $("nome").value.trim()
    const t = $("telefone").value.trim()
    const m = $("mensagem").value.trim()

    if (!n || !m || t.length < 10 || t.length > 11) {
        return
    }

    let telefoneFormatado = ""

    if (t.length === 11) {
        telefoneFormatado = t.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    } else {
        telefoneFormatado = t.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
    }

    window.open(
        `https://wa.me/${meuTelefone}?text=${encodeURIComponent(
            `Olá! Sou ${n}.\nTelefone: ${telefoneFormatado}\n\n${m}`
        )}`,
        "_blank"
    )
})
