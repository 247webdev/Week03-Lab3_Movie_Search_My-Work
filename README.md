[OMDB API](http://www.omdbapi.com/)


Part 2: Bonus
-------------

Part 2 depends on having finished Part 1.

1. By this point, you should be rendering a list of movies to the page
based on a user search.
2. Make each movie title a link (or a button) that you can click to
   see the poster for that movie.
    * You'll need to make another AJAX request to the OMDB API to
    retrieve enough movie info to find the poster.
    Poster API requests:
    http://img.omdbapi.com/?apikey=[yourkey]&
    * Create an `<img>` tag with jQuery and set its `src` attribute to
      be the movie poster URL.
