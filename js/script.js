const cardWrapper = document.querySelector(".content-cards");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const films = [
  {
    id: 0,
    title: "Марсианин 1",
    original: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "film",
  },
  {
    id: 1,
    title: "Марсианин 2",
    original: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "film",
  },
  {
    id: 2,
    title: "Марсианин 3",
    original: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "film",
  },
];

function render(array) {
  cardWrapper.innerHTML = "";

  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="${item.link}" class="content-cards__item">
            <img src="./images/films/${item.image}.jpeg" alt="${item.image}" />
            <div class="content-card__title">
                <h3>${item.title},</h3>
                <span>${item.original}</span>
            </div>
            <p class="content-cards__genre">${item.genre}</p>
            <p class="content-cards__rating">${item.rating}</p>
        </a>
        `
    );
  });
}

searchButton.addEventListener("click", () => {
  render(films.filter((item) => item.title.includes(searchInput.value)));
});

render(films);
