import { products, categories } from "./productsData.js";
import { filterRenderByGenre, filterRenderByPrice } from "./filter.js";
import { renderDarkMode } from "./theme.js";

const createCard = (array) => {
  const liCard = document.createElement("li");
  const divCardContainer = document.createElement("div");
  const imgCard = document.createElement("img");
  const divCardInner = document.createElement("div");
  const divCardAlign = document.createElement("div");
  const pBandName = document.createElement("p");
  const spanYear = document.createElement("span");
  const h2AlbumName = document.createElement("h2");
  const spanContainer = document.createElement("span");
  const pAlbumValue = document.createElement("p");
  const buttonBuy = document.createElement("button");

  divCardContainer.classList.add("card");
  imgCard.src = array.img;
  divCardInner.classList.add("card__inner");
  divCardAlign.classList.add("card__pSpan-align");
  pBandName.innerText = array.band;
  spanYear.innerText = array.year;
  spanYear.classList.add("span__align");
  h2AlbumName.innerText = array.title;
  pAlbumValue.innerText = `R$${array.price}`;
  buttonBuy.innerText = "Comprar";

  spanContainer.append(pAlbumValue, buttonBuy);
  divCardAlign.append(pBandName, spanYear);
  divCardInner.append(divCardAlign, h2AlbumName, spanContainer);
  divCardContainer.append(imgCard, divCardInner);
  liCard.append(divCardContainer);

  return liCard;
};

const renderButton = (array) => {
  const ulContainer = document.querySelector(".ul__container");

  ulContainer.innerHTML = "";

  array.forEach((category) => {
    const liButton = document.createElement("li");
    const buttonCategory = document.createElement("button");

    buttonCategory.classList.add("buttons");
    buttonCategory.innerText = category;

    liButton.append(buttonCategory);

    ulContainer.append(liButton);
  });
};

export const renderCard = (array) => {
  const ulContainer = document.querySelector(".ul__container-cards");

  ulContainer.innerHTML = "";

  array.forEach((product) => {
    const card = createCard(product);

    ulContainer.append(card);
  })
};

renderButton(categories);
renderCard(products);
filterRenderByGenre(products, categories);
filterRenderByPrice(products);
renderDarkMode();
