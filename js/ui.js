const mainContent = document.querySelector("#joke-container")

export const renderJoke = (joke) => {
    let html = `
    <p class="joke-text">${joke.value}"</p>
    `;
    mainContent.innerHTML = html;
}