const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");
const searchResults = document.getElementById("search-results");

const API_KEY = 'api_key=c37d08875afe5ad2df252dfaa348f06b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;


movieBtn.addEventListener("click", () => {
   
    fetch(BASE_URL + '/search/movie?' + API_KEY + '&language=en-US&query='  + movieInput.value + '&page=1&include_adult=false')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // make use of the data to render stuff
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


    function getInfoForReview() {

        const getMovieId = document.getElementById('fetchMovieId');
        console.log(getMovieId.textContent);
        

        fetch(BASE_URL + '/search/id/movie?' + getMovieId.textContent + 'api_key=' + API_KEY + '&language=en-US')
            .then(response => response.json())
                .then(getMovieId => {
                    
                getMovieId.results(movie => {
                    const { title, poster_path, overview, release_date, id } = movie;
                        
                    let movieCard = document.createElement("div");
                    let movieTitle = document.createElement("h2");
                    let poster = document.createElement("img");

                    let Movierelease_date = document.createElement("p");
                    let getMovieId = document.createElement("p");


                    movieTitle.textContent = title;
                    Movierelease_date.textContent = release_date;
                    getMovieId.textContent= id;
                    movieOverview.textContent = overview;

                    poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
                    poster.setAttribute('alt', `${title}'s movie poster`)
                })
            })
    };

    getInfoForReview();

};


