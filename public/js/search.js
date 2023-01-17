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


// get movies
function getMovies(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if (data.results.length !== 0) {
            showMovies(data.results);
        }
    }
    )
}

// make movie card this way?
function showMovies(data) {


    data.results.forEach(movie => {
        const { title, poster_path, genre, release_date, overview, id } = movie;
       
        let movieCard = document.createElement("div");
        let movieTitle = document.createElement("h2");
        let poster = document.createElement("img");
      

        let listEl = document.createElement("ul");

        let rating = document.createElement("li");
        let Movierelease_date = document.createElement("p");
        let movieOverview = document.createElement("p");
        let movieGenre = document.createElement("p");
        let anchorContainer = document.createElement("a");
        let selectMovie = document.createElement("button");

        movieCard.setAttribute("class","movieCard")
        searchResults.setAttribute("class", "searchResults")
        selectMovie.setAttribute("id","reviewbtn" ) 
        anchorContainer.setAttribute('href', `/moviereviews`)

        movieTitle.textContent = title;
        Movierelease_date.textContent = release_date;
        movieOverview.textContent= overview;
        movieGenre.textContent = genre;
        selectMovie.textContent = 'Review Movie'

        poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
        poster.setAttribute('alt', `${title}'s movie poster`)


        anchorContainer.append(selectMovie)
        movieCard.append(poster, movieTitle, movieGenre, Movierelease_date, anchorContainer)

        // movieEl.handlebars = `
        //      <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        //     <div class="movie-info">
        //         <h3>${title}</h3>
        //         <span class="${getColor(release_date)}">${release_date}</span>
        //     </div>
        //     <div class="overview">
        //         <h3>Overview</h3>
        //         ${overview}
        //         <br/> 
        //     </div>
        // `

        searchResults.appendChild(movieCard);

        // document.getElementById(id).addEventListener('click', () => {
        //     console.log(id)
        //     openNav(movie)
        // })
    })
}
