// const { SequelizeScopeError } = require("sequelize");

const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const similarInput = document.querySelector("#similar-input");
const similarBtn = document.querySelector("#similarBtn");
const searchResults = document.getElementById("search-results");

// Search button functionality
movieBtn.addEventListener("click", () => {

    Clean();

    fetch('/api/search/' + movieInput.value)
        .then(response => response.json())
        .then(data => {
            showMovies(data);
        })
})

// Removing previous results
function Clean(){
    document.getElementById('search-results').innerHTML='';
  }  

// Movie Card with title search
function showMovies(data) {


    data.results.forEach(movie => {
        const { title, poster_path, genre, release_date, id } = movie;
  
        let movieCard = document.createElement("div");
        let movieTitle = document.createElement("h2");
        let poster = document.createElement("img");
      

        let listEl = document.createElement("ul");

        let rating = document.createElement("li");
        let Movierelease_date = document.createElement("p");
        let movieId = document.createElement("p");
        let movieGenre = document.createElement("p");
        let movieScoreAnchor = document.createElement("a");
        let anchorContainer = document.createElement("a");
        let selectMovie = document.createElement("button");
        let selectScore = document.createElement("button");

        movieCard.setAttribute("class","movieCard")
        searchResults.setAttribute("class", "searchResults")
        selectMovie.setAttribute("id","reviewbtn" )
        selectScore.setAttribute ("id", "scorebtn")
        movieScoreAnchor.setAttribute('href', `/moviescore/${id}`)        
        anchorContainer.setAttribute('href', `/moviereviews/${id}`)
        movieId.setAttribute("id", "fetchMovieId")
        anchorContainer.setAttribute("id", "idToUseInRe")        
        

        movieId.setAttribute("id", "fetchMovieId")        
        
        movieTitle.textContent = title;
        Movierelease_date.textContent = release_date;
        movieGenre.textContent = genre;
        selectScore.textContent = "Movie Score";
        selectMovie.textContent = "Review Movie";


        poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
        poster.setAttribute('alt', `${title}'s movie poster`)


        anchorContainer.append(selectMovie)
        movieScoreAnchor.append(selectScore)
        movieCard.append(poster, movieId, movieTitle, movieGenre, Movierelease_date, movieScoreAnchor, anchorContainer )

        searchResults.appendChild(movieCard);


    })

};

document.querySelector('#movieBtn').addEventListener('click',showMovies);
