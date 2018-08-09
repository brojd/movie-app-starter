'use strict';

function addEventListenerToDeleteBtn() {
    var deleteButtons = document.querySelectorAll(".delete-btn");
    for (var i = 0; i < deleteButtons.length; i++) {
        var currentButton = deleteButtons[i];
        currentButton.addEventListener("click", function (event) {
            MoviesModule.deleteMovie(event.target.id);
            MoviesModule.displayMovies();
        })
    }
}



MoviesModule.displayMovies();
addEventListenerToDeleteBtn();
