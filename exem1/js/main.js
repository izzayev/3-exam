let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn__pokemon");
let elBtnMovies = document.querySelector(".btn__movies");
let elBtnBoth = document.querySelector(".btn__both");
let elBtnClear = document.querySelector(".btn__clear");
let elMoviesLogo = document.querySelector(".movielogo");
let elPokemonLogo = document.querySelector(".pokemonlogo")


let pokemonArray = pokemons.slice(0, 40);
let moviesArray = movies.slice(0, 40);

elBtnPokemon.addEventListener("click", function() {
    renderPokemon(pokemonArray);
    elPokemonLogo.style = "display:block;"
    elMoviesLogo.style = "display:none;";
});
elBtnMovies.addEventListener("click", function() {
    renderMovies(moviesArray);
    elMoviesLogo.style = "display:block;"
    elPokemonLogo.style = "display:none;";
});
elBtnBoth.addEventListener("click", function() {
    renderBoth(moviesArray, pokemonArray);
    elPokemonLogo.style = "display:block;"
    elMoviesLogo.style = "display:block;"
});
elBtnClear.addEventListener("click", function() {
    elList.innerHTML = "<ul>Cleaned</ul>";
    elMoviesLogo.style = "display:none;";
    elPokemonLogo.style = "display:none;";
});

function renderPokemon(arrayq) {
    elList.innerHTML = null;

    for (const item of arrayq) {
        let newLi = document.createElement("li");
        newLi.classList.add("bg-light", "border", "border-dark", "border-2", "rounded-1", "shadow", "text-center")
        let newImg = document.createElement("img");
        newImg.src = item.img

        let newH3 = document.createElement("h3")
        newH3.textContent = item.name
        newH3.classList.add("fw-bold", "mb-3")

        let newP = document.createElement("p")
        newP.textContent = item.type
        newP.classList.add("fw-bold")

        let newP1 = document.createElement("p")
        newP1.textContent = item.weight
        newP1.classList.add("fw-bold")

        let newP2 = document.createElement("p")
        newP2.textContent = item.height
        newP2.classList.add("fw-bold")

        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newP);
        newLi.appendChild(newP1);
        newLi.appendChild(newP2);
        

        elList.appendChild(newLi)
    }
}
function renderMovies(array) {
    elList.innerHTML = null;

    for (const item of array) {
        let newLiMovie = document.createElement("li");
        newLiMovie.classList.add("bg-light", "border", "border-dark", "border-2", "rounded-1", "text-center")

        let newImgMovie = document.createElement("img");
        newImgMovie.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
        newImgMovie.width = "350"

        let newH3Movie = document.createElement("h3")
        newH3Movie.textContent = item.Title
        newH3Movie.classList.add("bg-primary", "text-light", "mb-3")

        let newDivMovie = document.createElement("div")
        newDivMovie.classList.add("p-2")

        
        let newPMovie = document.createElement("p")
        newPMovie.textContent = item.Categories
        newPMovie.classList.add("fs-3", "text-wrap")

        let newP1Movie = document.createElement("p")
        newP1Movie.textContent = item.imdb_rating
        
        let newP2Movie = document.createElement("p")
        newP2Movie.textContent = item.movie_year
        newPMovie.classList.add("mb-3")

        let newBtn = document.createElement("a")
        newBtn.textContent = "Watch trailer"
        newBtn.href = `ImageURL`
        newBtn.classList.add("btn", "btn-outline-danger")

        let newBtn1 = document.createElement("a")
        newBtn1.textContent = "Bukmark"
        newBtn1.classList.add("btn", "btn-outline-success", "ms-1", "me-1")

        let newBtn2 = document.createElement("a")
        newBtn2.textContent = "More info"
        newBtn2.classList.add("btn", "btn-outline-primary")
        

        newLiMovie.appendChild(newImgMovie);
        newLiMovie.appendChild(newH3Movie);
        newLiMovie.appendChild(newDivMovie);
        newDivMovie.appendChild(newPMovie);
        newDivMovie.appendChild(newP1Movie);
        newDivMovie.appendChild(newP2Movie);
        newDivMovie.appendChild(newBtn);
        newDivMovie.appendChild(newBtn1);
        newDivMovie.appendChild(newBtn2);

        elList.appendChild(newLiMovie);

    }
}

function renderBoth(array1, array2) {
    elList.innerHTML = null;
    let newArray = array1.concat(array2);
    for (const item of newArray) {
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newP = document.createElement("p");
        let newP1 = document.createElement("p");
        let newP2 = document.createElement("p");

        let newLiMovie = document.createElement("li");
        let newImgMovie = document.createElement("img");
        let newH3Movie = document.createElement("h3");
        let newDivMovie = document.createElement("div");
        let newPMovie = document.createElement("p");
        let newP1Movie = document.createElement("p");
        let newP2Movie = document.createElement("p");
        let newBtn = document.createElement("a");
        let newBtn1 = document.createElement("a");
        let newBtn2 = document.createElement("a");
        
        if (item.name) {
            newLi.classList.add("bg-light", "border", "border-dark", "border-2", "rounded-1", "text-center")
            newImg.src = item.img
            newH3.textContent = item.name
            newH3.classList.add("fw-bold", "mb-3")
            newP.textContent = item.type
            newP.classList.add("fw-bold")
            newP1.textContent = item.weight
            newP1.classList.add("fw-bold")
            newP2.textContent = item.height
            newP2.classList.add("fw-bold")
        }else {
        newLiMovie.classList.add("bg-light", "border", "border-dark", "border-2", "rounded-1", "text-center")
        newImgMovie.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
        newImgMovie.width = "350"
        newH3Movie.textContent = item.Title
        newH3Movie.classList.add("bg-primary", "text-light", "mb-3")
        newDivMovie.classList.add("p-2")
        newPMovie.textContent = item.Categories
        newPMovie.classList.add("fs-3", "text-wrap")
        newP1Movie.textContent = item.imdb_rating
        newP2Movie.textContent = item.movie_year
        newPMovie.classList.add("mb-3")
        newBtn.textContent = "Watch trailer"
        newBtn.classList.add("btn", "btn-outline-danger")
        newBtn1.textContent = "Bukmark"
        newBtn1.classList.add("btn", "btn-outline-success", "ms-1", "me-1")
        newBtn2.textContent = "More info"
        newBtn2.classList.add("btn", "btn-outline-primary")
        }
        

        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newP);
        newLi.appendChild(newP1);
        newLi.appendChild(newP2);
        elList.appendChild(newLi);


        newLiMovie.appendChild(newImgMovie);
        newLiMovie.appendChild(newH3Movie);
        newLiMovie.appendChild(newDivMovie);
        newDivMovie.appendChild(newPMovie);
        newDivMovie.appendChild(newP1Movie);
        newDivMovie.appendChild(newP2Movie);
        newDivMovie.appendChild(newBtn);
        newDivMovie.appendChild(newBtn1);
        newDivMovie.appendChild(newBtn2);
        elList.appendChild(newLiMovie);
    }
}
