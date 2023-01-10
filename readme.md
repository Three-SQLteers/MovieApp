# MovieApp

## Your Task

Movies are the connective tissue that tie together our popular culture, partly because it's an amazing feeling to find a good one, but also because it's astoundingly fun to mock the terrible ones as well.  But how does one find them?  And how do you keep track of all the media you want to watch when everyone is offering their new suggestions?

Enter Firewatch, a new movie review site that allows you to find good movies, so-bad-they're-good movies, and the truly neutral blockbuster.  Here you can share your thoughts about films while reading the thoughts of others, find friends and keep track of your watchlist, so you'll never be without new movies, when you're ready for something new, of course.

## User Story

```md
AS A consumer who watches a variety of films
I WANT a CMS-style blog site
SO THAT I can keep track of movies I've watched and films I want to watch.
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing movie reviews if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing movie reviews that include the title of the film and the movie poster
WHEN I click on an existing movie review
THEN I am presented with the movie title, review from -10 to +10, user's text thoughts, post creator’s username, and date created for that post and have the option to add the movie to my watch list
WHEN I click on the add-to-watch-list button while signed in
THEN the movie is saved to my watch list on my profile
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any movie reviews I have already created and the option to add a new movie review
WHEN I click on the button to add a new movie review
THEN I am prompted to enter both a title and review for my movie review
WHEN I click on the button to create a new movie review
THEN the reviews are saved and I am taken back to an updated dashboard with my new movie review
WHEN I click on one of my existing movies in the dashboard
THEN I am able to delete or update my review and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view reviews but I am prompted to log in again before I can add, update, or delete reviews
```