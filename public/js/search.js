const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");
const searchResults = document.getElementById("search-results");

const API_KEY = 'api_key=c37d08875afe5ad2df252dfaa348f06b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY + '&language=en-US&query='  + movieInput.value + '&page=1&include_adult=false';


movieBtn.addEventListener("click", () => {
   
    fetch(BASE_URL + '/search/movie?' + API_KEY + '&language=en-US&query='  + movieInput.value + '&page=1&include_adult=false')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // make use of the data to render stuff
            showMovies(data);
        })
})


// get poster
const getPosterUrl = (poster_path) => {
    return `https://image.tmdb.org/t/p/w500${poster_path}`
};

// make movie card
const movieInfo = ({poster_path, title, release_date, overview, rating}) => {
    let body = document.body;
    let movieCard = document.createElement("div");
    let title = document.createElement("h3");
    let poster = document.createElement("img");

    let listEl = document.createElement("ul");

    let rating = document.createElement("li");
    let release_date = document.createElement("li");
    let overview = document.createElement("li");
    let genre = document.createElement("li");

    // title.textContent = 
    // rating.textContent = 
    // release_date.textContent = 
    // overview.textContent = 
    // genre.textContent = 

    body.appendChild(movieCard);
    title.appendChild(title);
    poster.appendChild(poster_path);
    listEl.appendChild(rating);
    listEl.appendChild(release_date);
    listEl.appendChild(overview);
    listEl.appendChild(genre);
};
