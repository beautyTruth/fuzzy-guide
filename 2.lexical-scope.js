var movie = "Memento";

function otherMovie() {
  var movie = "American Psycho";

  function againMovie(movieName) {
    console.log(movie, movieName);
  }

  againMovie("Dances with Wolves");
}

otherMovie();
againMovie("The Revenant");

// DON'T forget that JavaScript is a lexically-scoped language
