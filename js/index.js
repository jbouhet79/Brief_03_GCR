async function getListFilms() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&primary_release_date.gte=2024-02-27&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => response.results)
    // .then(movies => {
    //   // console.log(movies);
    //   return movies
    // })
    .then(movies => movies.forEach(createFilmInDOM))
    .catch(err => console.error(err));
}


function createFilmInDOM(movie) {
  // console.log(movie)
  const dest = document.querySelector('.grid-films')
  const btn = document.createElement('button')
  btn.id = movie.id
  dest.appendChild(btn)
  // const gridFilm = document.createElement('div')
  let movieTitle = document.createElement('h2')
  movieTitle.innerText = movie.title
  btn.appendChild(movieTitle)
  let moviePoster = document.createElement('img')
  const image = movie.poster_path
  console.error(moviePoster);

  moviePoster.src = "https://image.tmdb.org/t/p/w500" + image
  btn.appendChild(moviePoster)
  // let movieDate = document.createElement('p')
  // movieDate.innerText = movie.release_date
  // dest.appendChild(movieDate)
  // let movieGenre = document.createElement('p')
  // movieGenre.innerText = movie.genre_ids
  // dest.appendChild(movieGenre)
  // let movieDate = document.createElement('p')
  // movieDate.innerText = movie.release_date
  // dest.appendChild(movieDate)
  // document.location.href = `/details.html?id=${idFilm}`
  function test() {
    let inputFilm = document.querySelectorAll("button")
    console.log(inputFilm);
    inputFilm.forEach((button) => {
      button.addEventListener('click', (event) => {
        // const idFilm = btn.id
        console.log(event.currentTarget.id);
        document.location.href = `./details.html?id=${event.currentTarget.id}`
      })
    })
  }
  test();
}

getListFilms()


