window.addEventListener("load", () => {

    const loadingScreen =
        document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.classList.add("loading-finished");

    }, 2500);

});
