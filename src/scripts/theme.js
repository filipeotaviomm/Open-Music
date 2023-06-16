export const renderDarkMode = () => {
    const darkModeButton = document.querySelector(".header__align-items > button");
    const img = document.querySelector(".header__align-items > button > img");
    const html = document.querySelector("html");
    const localStoragePreference = JSON.parse(localStorage.getItem("darkMode"));

    if(localStoragePreference) {
        img.src = "./src/assets/img/sun.svg";
        html.classList.add("dark__mode")
    } else {
        img.src = "./src/assets/img/moon.svg";
        html.classList.remove("dark__mode");
    }

    darkModeButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode");

        if(html.classList.contains("dark__mode")) {
            img.src = "./src/assets/img/sun.svg";
            localStorage.setItem("darkMode", true);
        } else {
            img.src = "./src/assets/img/moon.svg";
            localStorage.setItem("darkMode", false);
        }
    })

}