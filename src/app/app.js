document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    console.log('Application is starting...');

    const appDiv = document.querySelector("#app-twidder");
    const twidController = new TwidController(appDiv, new TwidderModel());
}