# MovieApp

## Description

Movies are the connective tissue that tie together our popular culture, partly because it's an amazing feeling to find a good one, but also because it's astoundingly fun to mock the terrible ones.  But how does one find them?  And how do you keep track of all the media you want to watch when everyone is offering their new suggestions?

Enter So Bad It's Good, a new movie review site that allows you to find good movies, so-bad-they're-good movies, and the truly neutral blockbuster.  Here you can share your thoughts about films while reading the thoughts of others, and one day, find friends and keep track of your watchlist, so you'll never be without new movies  ...when you're ready for something new, of course.

This project was designed by 3 people who enjoy watching bad movies as a way to find more.  While the social networking of the site is yet to be implemented, we love the idea of finding someone with similar tastes as yourself.  It was created to bring people together through a medium that millions enjoy.


## Table of Contents

# Installation
# Usage
# Credits


## Installation

Once the github has been cloned, the following technologies are required using 'npm install':
- axios
- express
- nodemon

Other technologies required are Sequelize, Node.js and Insomnia.  

Finally, technologies used to create the project include Bootstrap CSS, BCrypt, and Heroku, which was used to publish the website.


## Usage

When following the link posted below, the user is presented with a homepage prompting the user to sign up or log in.  These are not necessary to search for movies or see their scores, but it is required to leave a review.  The user then can use The Movie Database API integrated into the site to search from a library of over 10,000 films.  When the user clicks on the poster of the desired film, they are brought to the score page, which averages the quality and fun scores from registered users, as well as displays their text review.  If the user wants to review a film, and has logged in, they may follow the review link on the page, which redirects them to the review page, where two sliders and a text box entries are recorded and stored in the SQL database, then listed on the score page.  


## Screenshot
![Screenshot](/public/assets/SoBadItsGood.png)


## Links
* Video demo: https://youtu.be/JQ4LNe9DYYk 
* The site: https://so-bad-its-good.herokuapp.com  
* Github: https://github.com/Three-SQLteers/MovieApp 


## Credits

* Matthew Fischer - https://github.com/MfischerTurtle 
* Jaya Singh - https://github.com/jaya4ever
* Mark Calcagno - https://github.com/mcalcagno47


## Future Development

We hope to return to this project one day to add community features, allowing users to add their future films to a watchlist and follow other users, so as to get reccomendations from them.  We also want the best and worst movies to appear on the sites homepage in the near future, so one does not have to scour the site to find the films that are the most and least fun. 