'use strict';


var MoviesModule = (function () {
    var moviesStub = [
        {
            title: "aaa",
            imgSrc: "https://1.fwcdn.pl/po/42/56/464256/7317256.3.jpg",
            genre: "bbb",
            year: "ccc",
            mark: 8
        },
        {
            title: "aaa",
            imgSrc: "https://1.fwcdn.pl/po/42/56/464256/7317256.3.jpg",
            genre: "bbb",
            year: "ccc",
            mark: 8
        },
        {
            title: "aaa",
            imgSrc: "https://1.fwcdn.pl/po/42/56/464256/7317256.3.jpg",
            genre: "bbb",
            year: "ccc",
            mark: 8
        },
        {
            title: "aaa",
            imgSrc: "https://1.fwcdn.pl/po/42/56/464256/7317256.3.jpg",
            genre: "bbb",
            year: "ccc",
            mark: 8
        },
    ];

    function deleteMovie(id) {
        var moviesInJSON = localStorage.getItem("movies");
        var moviesInJS = JSON.parse(moviesInJSON);
        var filteredMovies = moviesInJS.filter(function(elem){
            if (Number(elem.id) === Number(id)) {
                return false;
            } else {
                return true;
            }
        })
        var filteredMoviesInJSON = JSON.stringify(filteredMovies);
        localStorage.setItem("movies", filteredMoviesInJSON);
    }
    
    
    function displayMovies() {
        var tbody = document.querySelector("#movies-table-body");
        var moviesInJSON = localStorage.getItem("movies");
        var moviesInJS = JSON.parse(moviesInJSON);
        tbody.innerHTML = "";
        for (var i = 0; i < moviesInJS.length; i++) {
            var currentMovie = moviesInJS[i];
            var row = document.createElement("tr");
            var titleTd = document.createElement("td");
            var imgTd = document.createElement("td");
            var genreTd = document.createElement("td");
            var yearTd = document.createElement("td");
            var markTd = document.createElement("td");
            var movieImg = document.createElement("img");
            var buttonDetails = document.createElement("button");
            var buttonDelete = document.createElement("button");

            titleTd.innerText = currentMovie.title;
            movieImg.src = currentMovie.imgSrc;
            genreTd.innerText = currentMovie.genre;
            yearTd.innerText = currentMovie.year;
            markTd.innerText = currentMovie.mark;
            buttonDetails.innerText = "Details";
            buttonDelete.innerText = "Delete";
            buttonDelete.id = currentMovie.id;
            buttonDelete.classList.add("delete-btn");
            

            imgTd.appendChild(movieImg);
            row.appendChild(titleTd);
            row.appendChild(imgTd);
            row.appendChild(genreTd);
            row.appendChild(yearTd);
            row.appendChild(markTd);
            row.appendChild(buttonDetails);
            row.appendChild(buttonDelete);


            tbody.appendChild(row);

        }

    }

    return {
        displayMovies: displayMovies, 
        deleteMovie: deleteMovie
    }

})()
