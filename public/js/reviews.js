const movieInfo = document.getElementById("movie-info");
const searchResults = document.getElementById("search-results");
const REQUIRED_ID = document.querySelector("idToUseInRe");

const API_KEY = 'api_key=c37d08875afe5ad2df252dfaa348f06b';
const BASE_URL = 'https://api.themoviedb.org/3';

// coded for Star Wars
const API_URL = BASE_URL + '/movie/' + REQUIRED_ID + '?api_key=' + API_KEY + '&language=en-US';

    
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // make use of the data to render stuff
        showMovieInfo(data);
    })


function showMovieInfo(data) {
// cannot be forEach
    data.results.forEach(movie => {
        const { title, poster_path, genre, release_date, id } = movie;

       
        let movieCard = document.createElement("div");
        let movieTitle = document.createElement("h2");
        let poster = document.createElement("img");

//         let listEl = document.createElement("ul");

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

//         poster.setAttribute('src', `https://image.tmdb.org/t/p/w200${poster_path}`)
//         poster.setAttribute('alt', `${title}'s movie poster`)


        anchorContainer.append(selectMovie)
        movieCard.append(poster, movieId, movieTitle, movieGenre, Movierelease_date, anchorContainer)


        searchResults.appendChild(movieCard);

//     })
// };

// async function reviewFormHandler(event){
//     event.preventDefault();

//     //this code will get data from the form
//     const review_string = document.querySelector("#movieComments").value.trim();


//     if(review_string){
//         const response = await fetch(`/api/review`,{
//             method: 'POST',
//             body: JSON.stringify({review_string}),
//             headers:{'Content-Type': 'application/json'}
           
//         });
//  console.log('Post created!', review_string);
//         // checking the response status
//         if(response.ok){
//             console.log('Post created!');

//             // this is login handler
            
//         }else {
//             alert(response.statusText);
//         }
//     }
// }


document.querySelector('#reviewBtn').addEventListener('click',reviewFormHandler);

