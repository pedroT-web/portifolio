const openButtons = document.querySelectorAll(".open-modal")

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId)

        document.body.classList.add("modal-open");
        modal.showModal();
    })
});

const closeButtons = document.querySelectorAll(".close-modal")

closeButtons.forEach(button => {
    button.addEventListener("click", () => {

        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId)

        document.body.classList.remove("modal-open");
        modal.close();
    })
})

document.querySelectorAll(".modal-projetos").forEach(dialog => {
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
            dialog.close();
            document.body.classList.remove("modal-open");

        }
    });
});