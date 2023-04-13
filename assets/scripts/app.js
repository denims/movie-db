const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const addMovieModalCancelButton = addMovieModal.querySelector(".btn.btn--passive");
const addMovieModalAddButton = addMovieModalCancelButton.nextElementSibling;
const userMovieInputs = addMovieModal.querySelectorAll("input");
const defaultTextBox = document.getElementById("entry-text");
const moviesList = document.getElementById("movie-list");
const movies = [];

const toggleBackdrop = () => backdrop.classList.toggle("visible");


const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible")
    toggleBackdrop();
}

const backdropClickHandler = () => toggleMovieModal();

const cancelButtonHandler = () => {
    toggleMovieModal();
    clearUserMovieInput();
};

const addMovieModalAddButtonClickHandler = () => {
    try {
        const movieTile = userMovieInputs[0].value;
        const imageURL = userMovieInputs[1].value;
        const rating = userMovieInputs[2].value;

        if (movieTile.trim() === "" ||
            imageURL.trim() === "" ||
            rating.trim() === "" ||
            rating < 0 || rating > 5) {
            alert("Invalid user input!!");
            return;
        }
        const newMovie = {
            title: movieTile,
            imageUrl: imageURL,
            rating: rating
        };
        movies.push(newMovie);
        console.log(movies);
        updateUI();
        renderNewMovieElement(newMovie);
        toggleMovieModal();

    } finally {
        clearUserMovieInput();
    }
};

const clearUserMovieInput = () => {
    for (userInput of userMovieInputs) {
        userInput.value = "";
    }
};

const updateUI = () => {
    if (movies.length > 0) {
        defaultTextBox.style.display = "none";
    } else {
        defaultTextBox.style.display = "block";
    }
};

const renderNewMovieElement = (movie) => {
    const listElement = document.createElement("li");
    listElement.classList.add("movie-element");
    listElement.innerHTML = `
        <div class="movie-element__image">
            <img src=${movie.imageUrl} alt=${movie.title}/>
        </div>
        <div class="movie-element__info">
            <h2>${movie.title}</h2>
            <p>${movie.rating}/5 stars</p>
        </div>
    `;
    listElement.addEventListener("click", removeMovieElement.bind(this, listElement));
    moviesList.append(listElement);
}

const removeMovieElement = (movieElement) => {
    movieElement.remove();
    movies.pop();
    updateUI();
}

startAddMovieButton.addEventListener("click", toggleMovieModal)
backdrop.addEventListener("click", backdropClickHandler)
addMovieModalCancelButton.addEventListener("click", cancelButtonHandler)
addMovieModalAddButton.addEventListener("click", addMovieModalAddButtonClickHandler)

