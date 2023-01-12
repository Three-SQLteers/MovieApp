const movieInput = document.querySelector("#Movie-input");
const movieBtn = document.querySelector("#movieBtn");

movieBtn.addEventListener("click",()=>{
    fetch("/api/search/" + movieInput.value)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        

        // make use of the data tp render stuff
    })
})