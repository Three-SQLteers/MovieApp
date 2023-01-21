
async function reviewFormHandler(event){
    event.preventDefault();

    //this code will get data from the form
    const review_string = document.querySelector("#movieComments").value.trim();
    const quality_review_integer = document.querySelector('#quality_review_integer').value; 
    const fun_review_integer = document.querySelector('#fun_review_integer').value; 

    const movie_id = window.location.href.split("/")[4]

    if(review_string){
        const response = await fetch(`/api/review`,{
            method: 'POST',
            body: JSON.stringify({
                quality_review_integer: quality_review_integer,
                fun_review_integer: fun_review_integer,
                review_string: review_string, 
                movie_id: movie_id,
        }),
            headers:{'Content-Type': 'application/json'}
           
        });
        console.log(response)
        
    function goToScore() {
        document.location.assign(`/moviescore/${movie_id}`);
        setTimeout(function () { goToScore() }, 1000);
    }

  }
    goToScore();
};



document.querySelector('#reviewBtn').addEventListener('click', reviewFormHandler);

// commit comment
