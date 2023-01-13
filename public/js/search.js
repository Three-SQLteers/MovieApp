const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");
const main = document.querySelector("main");

const API_KEY = 'api_key=c37d08875afe5ad2df252dfaa348f06b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

movieBtn.addEventListener("click",()=>{
    fetch("/api/search/" + movieInput.value)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        // make use of the data to render stuff
        showMovies();
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
          if(data.results.length !== 0){
              showMovies(data.results);
  }}
)}

// make movie card this way?
function showMovies(data) {
    main.handlebars = '';

    data.forEach(movie => {
        const {title, poster_path, release_date, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.handlebars = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(release_date)}">${release_date}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
            </div>
        `

        main.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })
    })
}

// // Or this way?!?!
// const movieInfo = ({poster_path, title, release_date, overview, rating}) => {
//     let body = document.body;
//     let movieCard = document.createElement("div");
//     let title = document.createElement("h3");
//     let poster = document.createElement("img");

//     let listEl = document.createElement("ul");

//     let rating = document.createElement("li");
//     let release_date = document.createElement("li");
//     let overview = document.createElement("li");
//     let genre = document.createElement("li");

//     // title.textContent = 
//     // rating.textContent = 
//     // release_date.textContent = 
//     // overview.textContent = 
//     // genre.textContent = 

//     body.appendChild(movieCard);
//     title.appendChild(title);
//     poster.appendChild(poster_path);
//     listEl.appendChild(rating);
//     listEl.appendChild(release_date);
//     listEl.appendChild(overview);
//     listEl.appendChild(genre);
// };
