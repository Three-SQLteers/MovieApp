const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");
const searchResults = document.getElementById("search-results");




movieBtn.addEventListener("click", () => {

    fetch('/api/search/' + movieInput.value)
        .then(response => response.json())
        .then(data => {
            showMovies(data);
        })
})

// Movie Card
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
        let anchorContainer = document.createElement("a");
        let selectMovie = document.createElement("button");

        movieCard.setAttribute("class","movieCard")
        searchResults.setAttribute("class", "searchResults")
        selectMovie.setAttribute("id","reviewbtn" ) 
        anchorContainer.setAttribute('href', `/moviereviews/${id}`)
        movieId.setAttribute("id", "fetchMovieId")
        anchorContainer.setAttribute("id", "idToUseInRe")        
        

        movieId.setAttribute("id", "fetchMovieId")        
        
        movieTitle.textContent = title;
        Movierelease_date.textContent = release_date;
        movieId.textContent= id;
        movieGenre.textContent = genre;
        selectMovie.textContent = "Review Movie";

        poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
        poster.setAttribute('alt', `${title}'s movie poster`)


        anchorContainer.append(selectMovie)
        movieCard.append(poster, movieId, movieTitle, movieGenre, Movierelease_date, anchorContainer)

        searchResults.appendChild(movieCard);
    })


};


