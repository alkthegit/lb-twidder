function initializeApp() {
    console.log('Application has started');

    const appDiv = document.querySelector("#app-twidder");
    const twidController = new TwidderController(appDiv, new TwidderModel());
    console.log('Controller initialized');
}