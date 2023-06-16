import { renderCard } from "./index.js";

export const filterRenderByGenre = (productsArray, categoriesArray) => {
    const genreButtons = document.querySelectorAll(".buttons");

    genreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {

            const buttonText = e.target.innerText;
       
            if(buttonText === "Todos") {
                renderCard(productsArray)
                genreButtons.forEach(btn => {
                    btn.classList.remove("clickedButton");
                })
                button.classList.add("clickedButton")
            } else {
                const categoryIndex = categoriesArray.indexOf(buttonText);
                const filtered = productsArray.filter(product => product.category === categoryIndex); 
                renderCard(filtered);
                filterRenderByPrice(filtered);
                genreButtons.forEach(btn => {
                    btn.classList.remove("clickedButton");
                })
                button.classList.add("clickedButton")
            }        
        })
    })
}

export const filterRenderByPrice = (array) => {
    const inputRange = document.querySelector(".section__down > input");
    const spanPrice = document.querySelector(".price__range")
    const ulContainer = document.querySelector(".ul__container-cards");
    const li = document.createElement("li");
    li.innerText = "Nenhum produto encontrado"

    inputRange.addEventListener("input", () => {
        spanPrice.innerText = Number(inputRange.value).toFixed(2);
        const filtered = array.filter(product => product.price <= inputRange.value)

        if(filtered.length === 0) {
            ulContainer.innerHTML = "";
            ulContainer.append(li);
        } else {
            renderCard(filtered);
        }
    })

}