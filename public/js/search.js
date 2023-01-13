const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");
const genreInput = document.querySelector("#Genre-input");
const genreBtn = document.querySelector("#genreBtn");


movieBtn.addEventListener("click",()=>{
    fetch("/api/search/" + movieInput.value)
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        // make use of the data tp render stuff
    })
})

genreBtn.addEventListener("click",()=>{
    fetch("/api/search/" + genreInput.value)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
      // make use of the data tp render stuff
    })
})
