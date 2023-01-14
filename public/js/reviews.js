
const reviewBtn = document.querySelector("#reviewBtn");



async function signupFormHandler(event){
    event.preventDefault();

    //this code will get data from the form
    const movieReview = document.querySelector("#movieComments");


    if(movieReview && password){
        const response = await fetch('/api/users',{
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        // checking the response status
        if(response.ok){
            console.log('Account created!');

            // this is login handler
            document.location.replace('/login');
        }else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#signup-form').addEventListener('submit',signupFormHandler);
