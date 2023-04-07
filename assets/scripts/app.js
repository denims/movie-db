const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const addMovieModalCancelButton = addMovieModal.querySelector(".btn.btn--passive");
const addMovieModalAddButton = addMovieModalCancelButton.nextElementSibling;
const userMovieInputs = addMovieModal.querySelectorAll("input");

const toggleBackdrop = () => backdrop.classList.toggle("visible");


const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible")
    toggleBackdrop();
}

const backdropClickHandler = () => toggleMovieModal();

const addMovieModalAddButtonClickHandler = () => {
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
};


startAddMovieButton.addEventListener("click", toggleMovieModal)
backdrop.addEventListener("click", backdropClickHandler)
addMovieModalCancelButton.addEventListener("click", toggleMovieModal)
addMovieModalAddButton.addEventListener("click", addMovieModalAddButtonClickHandler)

