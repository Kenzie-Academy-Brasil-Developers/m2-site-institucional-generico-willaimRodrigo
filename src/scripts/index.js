function handleModal() {
    const buttonMain = document.querySelector(".enter__button");
    const buttonHeader = document.querySelector(".question__button")
    const modalCoontainer = document.querySelector("#modalContainer");

    const newRegister = [buttonHeader, buttonMain];

    for(let i = 0; i < newRegister.length; i++) {
        const currentItem = newRegister[i];

        currentItem.addEventListener("click", () => {
            modalCoontainer.showModal();

            closeModal();
        })
    }
}

function closeModal() {
    const button = document.querySelector("#modalButtonClose");
    const modalCoontainer = document.querySelector("#modalContainer");

    button.addEventListener("click", () => {
        modalCoontainer.close();
    })
}

handleModal();
closeModal();