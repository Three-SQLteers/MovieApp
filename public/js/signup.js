async function signupFormHandler(event){
    event.preventDefault();

    //this code will get data from the form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && password){
        const response = await fetch('/api/user',{
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                email,
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

