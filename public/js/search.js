const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");


movieBtn.addEventListener("click",()=>{
    fetch("/api/search/" + movieInput.value)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        // make use of the data to render stuff
        movieInfo();
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
