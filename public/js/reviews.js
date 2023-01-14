
async function reviewFormHandler(event){
    event.preventDefault();

    //this code will get data from the form
    const review_string = document.querySelector("#movieComments").value;


    if(review_string){
        const response = await fetch('/api/moviereviews',{
            method: 'POST',
            body: JSON.stringify({
                review_string,
              
              // id,
            // date_created,
                }),
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

