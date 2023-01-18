const movieInfo = document.getElementById("movie-info");
const searchResults = document.getElementById("search-results");


const API_KEY = 'c37d08875afe5ad2df252dfaa348f06b';
const BASE_URL = 'https://api.themoviedb.org/3';
// coded for Star Wars
const API_URL = BASE_URL + '/movie/11?api_key=' + API_KEY;

function showMovieInfo(data) {


    data.results.forEach(movie => {
        const { title, poster_path, genre, release_date, id } = movie;
       
        let movieInfo = document.createElement("div");
        let movieTitle = document.createElement("h2");
        let poster = document.createElement("img");

        let listEl = document.createElement("ul");

        let rating = document.createElement("li");
        let Movierelease_date = document.createElement("p");
        let movieId = document.createElement("p");
        let movieGenre = document.createElement("p");
        let anchorContainer = document.createElement("a");
        let saveMovieReview = document.createElement("button");

        movieInfo.setAttribute("class","movieInfo")
        searchResults.setAttribute("class", "searchResults")
        saveMovieReview.setAttribute("id","reviewbtn" ) 
        // anchorContainer.setAttribute('href', `/moviereviews/${id}`)
        movieId.setAttribute("id", "fetchMovieId")        
        
        movieTitle.textContent = title;
        Movierelease_date.textContent = release_date;
        movieId.textContent= id;
        movieGenre.textContent = genre;
        saveMovieReview.textContent = "Save Movie Review";

        poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
        poster.setAttribute('alt', `${title}'s movie poster`)


        anchorContainer.append(saveMovieReview)
        movieInfo.append(poster, movieId, movieTitle, movieGenre, Movierelease_date, anchorContainer)


        searchResults.appendChild(movieInfo);

    })
};

async function reviewFormHandler(event){
    event.preventDefault();

    //this code will get data from the form
    const review_string = document.querySelector("#movieComments").value.trim();


    if(review_string){
        const response = await fetch(`/api/review`,{
            method: 'POST',
            body: JSON.stringify({review_string}),
            headers:{'Content-Type': 'application/json'}
           
        });
 console.log('Post created!', review_string);
        // checking the response status
        if(response.ok){
            console.log('Post created!');

            // this is login handler
            
        }else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#reviewBtn').addEventListener('click',reviewFormHandler);

